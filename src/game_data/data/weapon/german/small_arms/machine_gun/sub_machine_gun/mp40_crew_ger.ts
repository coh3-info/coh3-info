import Weapon from '../../../../../../../types/game_data/weapon';

const weaponTompsonRiflemenLeaderUS: Weapon = {
  id: 'mp40_crew_ger',
  name: 'MP 40',
  accuracy: {
    far: 0.1,
    mid: 0.25,
    near: 0.42,
  },
  aim: {
    aimTimeMultiplier: {
      far: 1.5,
      mid: 1.25,
      near: 0.125,
    },
    fireAimTime: {
      max: 0.5,
      min: 0.25,
    },
    readyAimTime: {
      max: 0.375,
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
      max: 1.75,
      min: 1.25,
    },
    durationMultiplier: {
      far: 0.25,
      mid: 0.4,
      near: 1,
    },
    rateOfFire: {
      max: 8,
      min: 8,
    },
    rateOfFireMultiplier: {
      far: 0.75,
      mid: 0.875,
      near: 1,
    },
  },
  cooldown: {
    duration: {
      max: 2,
      min: 1.25,
    },
    durationMultiplier: {
      far: 2,
      mid: 1.25,
      near: 0.75,
    },
  },
  damage: 2,
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
    far: 0.85,
    mid: 0.9,
    near: 1,
  },
  range: {
    distance: {
      far: 35,
      mid: 15,
      near: 7,
    },
    max: 35,
    min: 0,
  },
  reload: {
    duration: {
      max: 3.5,
      min: 2.8,
    },
    durationMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
    frequency: {
      max: 5,
      min: 4,
    },
  },
  scatter: {
    angle: 10,
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
    nearbyRadius: 0,
    nearbyMultiplier: 0,
  },
  teardown: 0,
  tracking: {
    maxLeftAngle: -60,
    maxRightAngle: 60,
    speedHorizontal: 360,
  },
};

export default weaponTompsonRiflemenLeaderUS;
