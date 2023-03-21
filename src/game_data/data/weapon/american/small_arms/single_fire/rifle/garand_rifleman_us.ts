import type Weapon from '../../../../../../../types/game_data/weapon';

const weapon: Weapon = {
  uniqueName: 'garand_rifleman_us',
  name: 'M1 Garand',
  accuracy: {
    far: 0.55,
    mid: 0.5,
    near: 0.29,
  },
  aim: {
    aimTimeMultiplier: {
      far: 1.5,
      mid: 1,
      near: 0.5,
    },
    fireAimTime: {
      max: 1.75,
      min: 1.5,
    },
    readyAimTime: {
      max: 1.25,
      min: 0.75,
    },
  },
  areaEffect: {
    accuracy: {
      far: 0.6,
      mid: 2.8,
      near: 5,
    },
    penetration: {
      far: 1,
      mid: 1,
      near: 1,
    },
    areaInfo: null,
    damageMultiplier: {
      far: 0.25,
      mid: 0.625,
      near: 1,
    },
    maxMember: -1,
    distance: {
      far: 0,
      mid: 0,
      near: 0,
    },
  },
  burst: {
    canBurst: false,
    duration: {
      max: 0,
      min: 0,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    rateOfFire: {
      max: 0,
      min: 0,
    },
    rateOfFireMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
  },
  cooldown: {
    duration: {
      max: 2.75,
      min: 1.75,
    },
    durationMultiplier: {
      far: 0.9,
      mid: 0.5,
      near: 0.2,
    },
  },
  damage: 12,
  deflectionDamageMultiplier: 0,
  windDown: 0.5,
  windUp: 0,
  moving: {
    accuracyMultiplier: 0.75,
    burstMultiplier: 1,
    canFireWhileMoving: true,
    cooldownMultiplier: 1,
  },
  penetration: {
    far: 1,
    mid: 1,
    near: 1,
  },
  range: {
    distance: {
      far: 35,
      mid: 25,
      near: 7,
    },
    max: 35,
    min: 0,
  },
  reload: {
    duration: {
      max: 3,
      min: 2.5,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    frequency: {
      max: 7,
      min: 7,
    },
  },
  scatter: {
    angle: 6,
    distanceMax: 15,
    distanceOffset: 0.8,
    distanceRatio: 0.8,
    fowAngleMultiplier: 1,
    fowDistanceMultiplier: 1,
    movementAngleMultiplier: 1,
    movementDistanceMultiplier: 1,
  },
  setup: 0,
  suppression: {
    amount: 0,
    nearbyMultiplier: 0,
    nearbyRadius: 0,
  },
  teardown: 0,
  tracking: {
    maxLeftAngle: -90,
    maxRightAngle: 90,
    speedHorizontal: 360,
  },
};

export default weapon;
