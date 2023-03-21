import type Weapon from '../../../../../../../types/game_data/weapon';

const weapon: Weapon = {
  uniqueName: '30cal_coaxial_sherman_us',
  name: '30cal coaxial LMG',
  accuracy: {
    far: 0.1,
    mid: 0.15,
    near: 0.35,
  },
  aim: {
    aimTimeMultiplier: {
      far: 2,
      mid: 1,
      near: 0.1,
    },
    fireAimTime: {
      max: 0.125,
      min: 0.125,
    },
    readyAimTime: {
      max: 0.125,
      min: 0.125,
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
    canBurst: true,
    duration: {
      max: 5.5,
      min: 5,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    rateOfFire: {
      max: 7,
      min: 7,
    },
    rateOfFireMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
  },
  cooldown: {
    duration: {
      max: 4,
      min: 4,
    },
    durationMultiplier: {
      far: 1.5,
      mid: 1,
      near: 0.6,
    },
  },
  damage: 4,
  deflectionDamageMultiplier: 0,
  windDown: 0,
  windUp: 0,
  moving: {
    accuracyMultiplier: 0.5,
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
      mid: 20,
      near: 7,
    },
    max: 35,
    min: 0,
  },
  reload: {
    duration: {
      max: 6.5,
      min: 6,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    frequency: {
      max: 5,
      min: 5,
    },
  },
  scatter: {
    angle: 10,
    distanceMax: 20,
    distanceOffset: 0.8,
    distanceRatio: 0,
    fowAngleMultiplier: 1,
    fowDistanceMultiplier: 1,
    movementAngleMultiplier: 1,
    movementDistanceMultiplier: 1,
  },
  setup: 0,
  suppression: {
    amount: 0,
    nearbyRadius: 0,
    nearbyMultiplier: 0,
  },
  teardown: 0,
  tracking: {
    maxLeftAngle: 0,
    maxRightAngle: 0,
    speedHorizontal: 120,
  },
};

export default weapon;
