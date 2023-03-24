import type Weapon from '../../../../../../../types/game_data/weapon';

const weaponMg42HmgGER: Weapon = {
  id: 'mg42_hmg_ger',
  name: 'MG42 Heavy Machine Gun',
  accuracy: {
    far: 0.185,
    mid: 0.4,
    near: 0.55,
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
      max: 0.25,
      min: 0.25,
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
    areaInfo: {
      areaType: 'none',
    },
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
      max: 4.25,
      min: 4.25,
    },
    durationMultiplier: {
      far: 1,
      mid: 1.25,
      near: 1.5,
    },
    rateOfFire: {
      max: 20,
      min: 20,
    },
    rateOfFireMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
  },
  cooldown: {
    duration: {
      max: 2.5,
      min: 2.5,
    },
    durationMultiplier: {
      far: 1.25,
      mid: 1,
      near: 0.4,
    },
  },
  damage: 4,
  deflectionDamageMultiplier: 0,
  windDown: 0,
  windUp: 0,
  moving: {
    accuracyMultiplier: 0.5,
    burstMultiplier: 1,
    canFireWhileMoving: false,
    cooldownMultiplier: 1,
  },
  penetration: {
    far: 1.1,
    mid: 1.2,
    near: 1.3,
  },
  range: {
    distance: {
      far: 45,
      mid: 25,
      near: 10,
    },
    max: 45,
    min: 0,
  },
  reload: {
    duration: {
      max: 5,
      min: 5,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    frequency: {
      max: 3,
      min: 3,
    },
  },
  scatter: {
    angle: 8,
    distanceMax: 20,
    distanceOffset: 0.8,
    distanceRatio: 0.8,
    fowAngleMultiplier: 1,
    fowDistanceMultiplier: 1,
    movementAngleMultiplier: 1,
    movementDistanceMultiplier: 1,
  },
  setup: 3.16,
  suppression: {
    amount: 0.01,
    nearbyRadius: 0.88,
    nearbyMultiplier: 13,
  },
  teardown: 3.16,
  tracking: {
    maxLeftAngle: -62.5,
    maxRightAngle: 62.5,
    speedHorizontal: 35,
  },
};

export default weaponMg42HmgGER;
