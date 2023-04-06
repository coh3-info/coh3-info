import type { Area } from '../game_data/weapon';

interface MinMax {
  min: number;
  max: number;
}

interface Distance {
  near: number;
  mid: number;
  far: number;
}

export interface WeaponStats {
  id: string;
  damage: MinMax;

  /**공격이 비관통했을 때 상대에게 주는 피해 <br/>
   *
   * Weapon.deflection.deflectionDamageMultiplier * Weapon.damage.min | max
   * Weapon.hasDeflectionDamage가 false면 항상 0입니다.
   */
  deflectionDamage: MinMax;
  range: {
    distance: Distance;
  } & MinMax;
  penetration: Distance;
  accuracy: Distance;
  aim: {
    aimTimeMultiplier: Distance;
    fireAimTime: MinMax;
    readyAimTime: MinMax;
  };
  burst: {
    canBurst: boolean;
    duration: MinMax;
    durationMultiplier: Distance;
    rateOfFire: MinMax;
    rateOfFireMultiplier: Distance;
  };
  cooldown: {
    duration: MinMax;
    durationMultiplier: Distance;
  };
  fire: {
    windUp: number;
    windDown: number;
  };
  areaEffect: {
    areaInfo: Area;
    distance: Distance;
    damageMultiplier: Distance;
    maxMember: number;
    penetration: Distance;
    accuracy: Distance;
  };
  scatter: {
    angle: number;
    distanceMax: number;
    distanceOffset: number;
    distanceRatio: number;
    fowAngleMultiplier: number;
    fowDistanceMultiplier: number;
    movementAngleMultiplier: number;
    movementDistanceMultiplier: number;
  };
  settingTime: {
    setup: number;
    teardown: number;
  };
  suppression: {
    amount: number;
    nearbyMultiplier: number;
    nearbyRadius: number;
  };
  moving: {
    accuracyMultiplier: number;
    burstMultiplier: number;
    canFireWhileMoving: boolean;
    cooldownMultiplier: number;
  };
  tracking: {
    maxLeftAngle: number;
    maxRightAngle: number;
    speedHorizontal: number;
  };
}
