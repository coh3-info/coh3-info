import { WeaponEntity } from '../../types/game_data/entity';
import type Weapon from '../../types/game_data/weapon';
import type { WeaponStats } from '../../types/stats/weaponStats';

export const createWeaponStats = (weaponEntity: WeaponEntity, weapon: Weapon): WeaponStats => {
  return {
    id: weapon.id,
    damage: weapon.damage,
    deflectionDamage: {
      min:
        weapon.damage.min *
        weapon.deflection.deflectionDamageMultiplier *
        (weapon.deflection.hasDeflectionDamage ? 1 : 0),
      max:
        weapon.damage.max *
        weapon.deflection.deflectionDamageMultiplier *
        (weapon.deflection.hasDeflectionDamage ? 1 : 0),
    },
    range: {
      min: weapon.range.min,
      max: weapon.range.max,
      distance: weapon.range.distance,
    },

    penetration: weapon.penetration,
    accuracy: weapon.accuracy,
    aim: weapon.aim,
    burst: weapon.burst,
    cooldown: weapon.cooldown,
    fire: weapon.fire,
    reload: {
      duration: weapon.reload.duration,
      durationMultiplier: weapon.reload.durationMultiplier,
      frequency: weapon.reload.frequency,
    },
    areaEffect: weapon.areaEffect,
    scatter: weapon.scatter,
    settingTime: {
      setup: weapon.setup.duration,
      teardown: weapon.teardown.duration,
    },
    suppression: weapon.suppression,
    moving: weapon.moving,
    tracking: weapon.tracking,
  };
};
