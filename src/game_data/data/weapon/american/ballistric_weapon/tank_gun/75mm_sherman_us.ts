import type Weapon from '../../../../../../types/game_data/weapon';

const weapon: Weapon = {
  uniqueName: '75mm_sherman_us',
  name: '75mm gun',
  accuracy: {
    far: 0.045,
    mid: 0.0563,
    near: 0.075,
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
      far: 0.15,
      mid: 0.25,
      near: 0.84,
    },
    maxMember: 3,
    distance: {
      far: 4.5,
      mid: 0.75,
      near: 0.25,
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
      max: 0,
      min: 0,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
  },
  damage: 120,
  deflectionDamageMultiplier: 0.15,
  windDown: 0.875,
  windUp: 0,
  moving: {
    accuracyMultiplier: 0.75,
    burstMultiplier: 1,
    canFireWhileMoving: true,
    cooldownMultiplier: 1,
  },
  penetration: {
    far: 110,
    mid: 125,
    near: 180,
  },
  range: {
    distance: {
      far: 40,
      mid: 25,
      near: 10,
    },
    max: 40,
    min: 0,
  },
  reload: {
    duration: {
      max: 5,
      min: 4,
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
    angle: 10,
    distanceMax: 6,
    distanceOffset: 0.25,
    distanceRatio: 1,
    fowAngleMultiplier: 1.25,
    fowDistanceMultiplier: 1.25,
    movementAngleMultiplier: 1.25,
    movementDistanceMultiplier: 1.25,
  },
  setup: 0,
  suppression: {
    amount: 0,
    nearbyRadius: 0,
    nearbyMultiplier: 0,
  },
  teardown: 0,
  tracking: {
    maxLeftAngle: -180,
    maxRightAngle: 180,
    speedHorizontal: 40,
  },
};

export default weapon;
