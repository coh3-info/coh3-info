import type { Squad } from '../../types/game_data/squad';
import type { Sbps } from '../../types/game_data/squad';
import type { Ebps, Entity, WeaponEntity } from '../../types/game_data/entity';
import type { Weapon } from '../../types/game_data/weapon';
import type { Weapons } from '../../types/game_data/weapon';
import type { Unit, UnitLoadout, WeaponPair } from '../../types/game_data/unit';

const getSquad = (squadId: string, sbps: Sbps): Squad | undefined => {
  const squad = sbps[squadId];
  return squad ?? undefined;
};

const getEntity = (entityId: string, ebps: Ebps): Entity | WeaponEntity | undefined => {
  const entity = ebps[entityId];
  return entity ?? undefined;
};

const getWeaponEntity = (weaponEntityId: string, ebps: Ebps): WeaponEntity | undefined => {
  const weaponEntity = ebps[weaponEntityId];
  if (weaponEntity === undefined) {
    throw new Error(`epbs에 ${weaponEntityId}가 없습니다.`);
  } else if (weaponEntity.category !== 'weapon') {
    throw new Error(`${weaponEntityId}는 WeaponEntity가 아닙니다.`);
  } else {
    return weaponEntity;
  }
};

const getWeapon = (weaponId: string, weapons: Weapons): Weapon | undefined => {
  const weapon = weapons[weaponId];
  return weapon ?? undefined;
};

const getHardpointsOfEntity = (entity: Entity | WeaponEntity): string[] => {
  if (entity.category === 'weapon') return [entity.id];
  return entity.hardpoints;
};

const getWeaponEntitiesOfEntity = (entity: Entity | WeaponEntity, ebps: Ebps): WeaponEntity[] | undefined => {
  const hardpoints = getHardpointsOfEntity(entity);
  const weaponEntities = hardpoints.map((weaponEntityId) => {
    const weaponEntity = getWeaponEntity(weaponEntityId, ebps);
    return weaponEntity;
  });

  if (weaponEntities.includes(undefined)) return undefined;
  return weaponEntities as WeaponEntity[];
};

const getEntitiesOfSquad = (squad: Squad, ebps: Ebps): (Entity | WeaponEntity)[] | undefined => {
  const entities = squad.loadout.map((loadoutData) => {
    const { entityId } = loadoutData;
    const entity = getEntity(entityId, ebps);
    return entity;
  });

  if (entities.includes(undefined)) return undefined;
  return entities as (Entity | WeaponEntity)[];
};

const getWeaponPairsOfSquad = (
  entities: (Entity | WeaponEntity)[],
  ebps: Ebps,
  weapons: Weapons
): WeaponPair[] | undefined => {
  const init: (WeaponEntity | undefined)[] = [];

  const weaponEntitiesOfSquad = entities.reduce((result, entity) => {
    const weaponEntities = getWeaponEntitiesOfEntity(entity, ebps);
    if (weaponEntities === undefined) return [...result, undefined];
    return [...result, ...weaponEntities];
  }, init);

  if (weaponEntitiesOfSquad.includes(undefined)) return undefined;

  const weaponPairs: (WeaponPair | undefined)[] = (weaponEntitiesOfSquad as WeaponEntity[]).map((weaponEntity) => {
    const weaponId = weaponEntity.weapon;
    const weapon = getWeapon(weaponId, weapons);
    return weapon !== undefined ? [weaponEntity, weapon] : undefined;
  });

  if (weaponPairs.includes(undefined)) return undefined;
  return weaponPairs as WeaponPair[];
};

const getLoadout = (squad: Squad, data: { ebps: Ebps; weapons: Weapons }): UnitLoadout | undefined => {
  const loadout = squad.loadout.map((loadoutData) => {
    const { num, entityId } = loadoutData;
    const entity = getEntity(entityId, data.ebps);
    if (entity === undefined) return undefined;

    const weaponEntities = getWeaponEntitiesOfEntity(entity, data.ebps);
    if (weaponEntities === undefined) return undefined;

    const weaponIds = weaponEntities.map((weaponEntity) => weaponEntity.weapon);

    return { num, entityId: entity.id, weaponIds };
  });

  if (loadout.includes(undefined)) return undefined;
  return loadout as UnitLoadout;
};

interface Data {
  sbps: Sbps;
  ebps: Ebps;
  weapons: Weapons;
}

export const createUnit = (squadId: string, data: Data): Unit | undefined => {
  const { sbps, ebps, weapons } = data;

  const squad = getSquad(squadId, sbps);
  if (squad === undefined) {
    console.error(new Error(`sbps에 ${squadId}가 존재하지 않습니다.`));
    return undefined;
  }

  const entities = getEntitiesOfSquad(squad, ebps);
  if (entities === undefined) return undefined;

  const weaponPairs = getWeaponPairsOfSquad(entities, ebps, weapons);

  if (weaponPairs === undefined) return undefined;

  const loadout = getLoadout(squad, { ebps: data.ebps, weapons: data.weapons });
  if (loadout === undefined) return undefined;

  return {
    squad,
    loadout,
    entities,
    weaponPairs,
  };
};
