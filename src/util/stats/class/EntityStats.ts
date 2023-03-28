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
    return this.data.hitpoints;
  }

  get targetSize() {
    return this.data.targetSize;
  }

  get armor() {
    return this.data.armor;
  }

  get reinforce() {
    const {
      type: entityType,
      cost: { manpower, time },
    } = this.data;

    if (entityType === 'crew' || entityType === 'infantry') {
      return {
        cost: Math.round(manpower * this.reinforceMultiplier.cost),
        time: Math.round(time * this.reinforceMultiplier.time),
      };
    }
    return {
      cost: undefined,
      time: undefined,
    };
  }

  get sight() {
    return this.data.sight;
  }

  get detect() {
    return this.data.detect;
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
