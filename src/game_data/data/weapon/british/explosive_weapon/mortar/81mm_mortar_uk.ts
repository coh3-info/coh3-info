import type Weapon from '../../../../../../types/game_data/weapon';

const weapon81mmMortarUK: Weapon = {
  id: '81mm_mortar_uk',
  name: 'ML 3-inch Mortar',
  accuracy: {
    far: 0,
    mid: 0,
    near: 0,
  },
  aim: {
    aimTimeMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
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
      far: 5,
      mid: 5,
      near: 5,
    },
    penetration: {
      far: 10,
      mid: 10,
      near: 10,
    },
    areaInfo: {
      areaType: 'circle',
      radius: 4.5,
    },
    damageMultiplier: {
      far: 0.1,
      mid: 0.3,
      near: 0.6,
    },
    maxMember: 3,
    distance: {
      far: 4.5,
      mid: 0.5,
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
      max: 7,
      min: 6,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
  },
  damage: 100,
  deflectionDamageMultiplier: 0.2,
  windDown: 1.875,
  windUp: 1.375,
  moving: {
    accuracyMultiplier: 1,
    burstMultiplier: 1,
    canFireWhileMoving: false,
    cooldownMultiplier: 1,
  },
  penetration: {
    far: 20,
    mid: 20,
    near: 20,
  },
  range: {
    distance: {
      far: -1,
      mid: 40,
      near: 20,
    },
    max: 75,
    min: 15,
  },
  reload: {
    duration: {
      max: 0,
      min: 0,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    frequency: {
      max: 0,
      min: 0,
    },
  },
  scatter: {
    angle: 7,
    distanceMax: 5,
    distanceOffset: 0,
    distanceRatio: 0.04,
    fowAngleMultiplier: 1.25,
    fowDistanceMultiplier: 1.25,
    movementAngleMultiplier: 1,
    movementDistanceMultiplier: 1,
  },
  setup: 2.4,
  suppression: {
    amount: 0,
    nearbyRadius: 0,
    nearbyMultiplier: 0,
  },
  teardown: 1.9,
  tracking: {
    maxLeftAngle: -180,
    maxRightAngle: 180,
    speedHorizontal: 90,
  },
};

export default weapon81mmMortarUK;
