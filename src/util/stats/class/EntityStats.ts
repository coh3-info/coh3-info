import WeaponStats from './WeaponStats';

import type Entity from '../../../types/game_data/entity';

class EntityStats {
  private readonly data: Entity;
  // private readonly _weapons: WeaponStats[];
  private readonly reinforceMultiplier: {
    cost: number;
    time: number;
  };

  constructor(data: Entity, reinforceMultiplier: { cost: number; time: number }) {
    this.data = data;
    this.reinforceMultiplier = reinforceMultiplier;

    const init: WeaponStats[] = [];
    // this._weapons = data.weapons.reduce((weapons, weaponId) => {
    //   const weaponData = getWeapon(weaponId);

    //   if (weaponData === undefined) return weapons;

    //   return [...weapons, new WeaponStats(weaponData)];
    // }, init);
  }

  get hitpoints() {
    return this.data.health.hitpoints;
  }

  get targetSize() {
    return this.data.health.targetSize;
  }

  get armor() {
    return this.data.health.armor;
  }

  get reinforce() {
    const {
      cost: { manpower, time },
    } = this.data;

    return {
      cost: Math.round(manpower * this.reinforceMultiplier.cost),
      time: Math.round(time * this.reinforceMultiplier.time),
    };
  }

  get sight() {
    return this.data.sight;
  }

  get moving() {
    return this.data.moving;
  }

  // get weapons() {
  //   return this._weapons;
  // }

  // getWeapon(weaponId: string) {
  //   return this.weapons.find((weapon) => {
  //     return weapon.id === weaponId;
  //   });
  // }
}

export default EntityStats;
