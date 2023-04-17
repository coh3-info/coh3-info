import type { Unit } from '../../types/game_data/unit';
import type { UnitStats } from '../../types/stats/unitStats';
import { createEntityStats } from './entityStats';
import { createSquadStats } from './squadStats';
import { createWeaponStats } from './weaponStats';

export const createUnitStats = (unit: Unit): UnitStats => {
  const { squad, entities, weaponPairs, loadout } = unit;
  const squadStats = createSquadStats(squad, loadout, entities);

  const entityStatsList = entities.map((entity) => createEntityStats(entity, squad));

  const weaponStatsList = weaponPairs.map(([weaponEntity, weapon]) => createWeaponStats(weaponEntity, weapon));

  const unitLoadout = unit.loadout;

  return {
    squad: squadStats,
    entities: entityStatsList,
    weapons: weaponStatsList,
    loadout: unitLoadout,
  };
};
