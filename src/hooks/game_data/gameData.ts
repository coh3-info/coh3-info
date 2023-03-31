import { useSelector } from 'react-redux';
import { RootState } from '../../state_store/store';
import type Unit from '../../types/game_data/unit';

const useCreateUnit = () => {
  const { sbps, ebps, weapons } = useSelector((state: RootState) => state.gameData);

  return (squadId: string): Unit => {
    const squad = sbps[squadId];

    if (squad === undefined) {
      throw new Error(`${squadId}의 Sbps 데이터가 없습니다.`);
    }

    const loadout = squad.loadout.map((loadoutData) => {
      const { num, entityId } = loadoutData;
      const entity = ebps[entityId];

      if (entity === undefined) {
        throw new Error(`${entityId}의 Ebps 데이터가 없습니다.`);
      }

      const weaponsInUnit = [];
      if (entity.category === 'weapon') {
        const weapon = weapons[entity.weapon];

        if (weapon === undefined) {
          throw new Error(`${entity.weapon}의 Weapons 데이터가 없습니다.`);
        }

        weaponsInUnit.push(weapon);
      } else {
        entity.hardpoints.map((hardpoint) => {
          const weaponEntity = ebps[hardpoint];

          if (weaponEntity.category !== 'weapon') {
            throw new Error(`${hardpoint}는 WeaponEntity가 아닙니다.`);
          }

          const weapon = weapons[weaponEntity.weapon];

          if (weapon === undefined) {
            throw new Error(`${weaponEntity.weapon}의 Weapons 데이터가 없습니다.`);
          }

          weaponsInUnit.push(weapon);
        });
      }

      return {
        num,
        entity,
        weapons: weaponsInUnit,
      };
    });

    const unit: Unit = {
      squad,
      loadout,
    };
    return unit;
  };
};

export { useCreateUnit };
