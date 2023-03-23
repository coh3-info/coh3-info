import WeaponStats from './WeaponStats';
import { getWeapon } from '../../game_data/weapon/weaponsController';

import type Entity from '../../../types/game_data/entity';

class EntityStats {
  private readonly data: Entity;
  private readonly _weapons: WeaponStats[];

  constructor(data: Entity) {
    this.data = data;

    const init: WeaponStats[] = [];
    this._weapons = data.weapons.reduce((weapons, weaponId) => {
      const weaponData = getWeapon(weaponId);

      if (weaponData === undefined) return weapons;

      return [...weapons, new WeaponStats(weaponData)];
    }, init);
  }

  get hitpoints() {
    return this.data.hitpoints;
  }

  get targetSize() {
    return this.data.targetSize;
  }

  get armor() {
    return this.data.armor;
  }

  get weapons() {
    return this._weapons;
  }

  getWeapon(weaponId: string) {
    return this.weapons.find((weapon) => {
      return weapon.id === weaponId;
    });
  }
}

export default EntityStats;
