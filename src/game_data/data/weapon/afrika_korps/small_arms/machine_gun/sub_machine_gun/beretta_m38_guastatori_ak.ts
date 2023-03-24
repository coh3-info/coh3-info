import Weapon from '../../../../../../../types/game_data/weapon';

const weaponBerettaM38GuastatoriAK: Weapon = {
  id: 'beretta_m38_guastatoti_ak',
  name: 'MAB 38',
  accuracy: {
    far: 0.15,
    mid: 0.25,
    near: 0.55,
  },
  aim: {
    aimTimeMultiplier: {
      far: 2.5,
      mid: 1,
      near: 0.6,
    },
    fireAimTime: {
      max: 0.5,
      min: 0.3,
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
      max: 2,
      min: 1.5,
    },
    durationMultiplier: {
      far: 0.15,
      mid: 0.5,
      near: 1,
    },
    rateOfFire: {
      max: 8,
      min: 8,
    },
    rateOfFireMultiplier: {
      far: 1,
      mid: 1,
      near: 1,
    },
  },
  cooldown: {
    duration: {
      max: 1.5,
      min: 1,
    },
    durationMultiplier: {
      far: 3,
      mid: 2,
      near: 1,
    },
  },
  damage: 5,
  deflectionDamageMultiplier: 0,
  windDown: 0,
  windUp: 0,
  moving: {
    accuracyMultiplier: 0.75,
    burstMultiplier: 0.3,
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
      mid: 15,
      near: 10,
    },
    max: 35,
    min: 0,
  },
  reload: {
    duration: {
      max: 3.5,
      min: 3,
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
    angle: 5,
    distanceMax: 10,
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
    maxLeftAngle: -90,
    maxRightAngle: 90,
    speedHorizontal: 360,
  },
};

export default weaponBerettaM38GuastatoriAK;
