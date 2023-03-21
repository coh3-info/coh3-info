import Weapon from '../../../../../../../types/game_data/weapon';

const weapon: Weapon = {
  uniqueName: 'tompson_riflemen_leader_us',
  name: 'Tompson SMG',
  accuracy: {
    far: 0.22,
    mid: 0.375,
    near: 0.42,
  },
  aim: {
    aimTimeMultiplier: {
      far: 2,
      mid: 1,
      near: 0.5,
    },
    fireAimTime: {
      max: 0.5,
      min: 0.25,
    },
    readyAimTime: {
      max: 0.3,
      min: 0.3,
    },
  },
  areaEffect: {
    accuracy: {
      far: 1,
      mid: 1,
      near: 1,
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
      max: 0.75,
      min: 0.75,
    },
    durationMultiplier: {
      far: 0.5,
      mid: 0.75,
      near: 1,
    },
    rateOfFire: {
      max: 10,
      min: 10,
    },
    rateOfFireMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
  },
  cooldown: {
    duration: {
      max: 2,
      min: 1.5,
    },
    durationMultiplier: {
      far: 2,
      mid: 1.5,
      near: 1,
    },
  },
  damage: 3,
  deflectionDamageMultiplier: 0,
  windDown: 0,
  windUp: 0,
  moving: {
    accuracyMultiplier: 0.85,
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
      min: 2.9,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    frequency: {
      max: 2,
      min: 2,
    },
  },
  scatter: {
    angle: 1.5,
    distanceMax: 5,
    distanceOffset: 0.4,
    distanceRatio: 0.8,
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
    maxLeftAngle: -90,
    maxRightAngle: 90,
    speedHorizontal: 360,
  },
};

export default weapon;
