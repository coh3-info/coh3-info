import type Squad from '../../../types/game_data/squad';
import type Entity from '../../../types/game_data/entity';
import type Weapon from '../../../types/game_data/weapon';
import { WeaponEntity } from '../../../types/game_data/entity';

const createInitSquad = (id: string): Squad => {
  return {
    id,
    name: '',
    nameKO: '',
    category: '',
    race: '',
    imageUrl: {
      icon: '',
      symbolIcon: '',
    },
    abilities: [],
    captureStrategicPoint: {
      captureRateMutiplier: 0,
      revertRateMutiplier: 0,
    },
    constructions: [],
    loadout: [],
    population: {
      personnelPop: 0,
    },
    reinforce: {
      costPercentage: 0,
      timePercentage: 0,
    },
    upgrades: [],
    inventory: {
      canPickUpItems: false,
      categoryCapacity: {
        casualty: 0,
        default: 0,
        special: 0,
        upgrade: 0,
      },
    },
    filters: [],
  };
};

const createInitEntity = (id: string): Entity => {
  return {
    id,
    category: 'normal',
    cost: {
      fuel: 0,
      manpower: 0,
      time: 0,
    },
    health: {
      armor: 0,
      hitpoints: 0,
      targetSize: 0,
    },
    hardpoints: [],
    moving: {
      acceleration: 0,
      deceleration: 0,
      reverseAcceleration: 0,
      reverseDeceleration: 0,
      rotationRate: 0,
      speedScalingTable: {
        defaultSpeed: 0,
        maxSpeed: 0,
        minSpeed: 0,
        reverseMaxSpeed: 0,
      },
    },
    population: {
      personnelPop: 0,
    },
    sight: {
      detectCamouflage: {
        global: 0,
        mine: 0,
        unit: 0,
      },
      sightPackage: {
        outerRadius: 0,
      },
    },
    simInventoryItem: {
      capacityRequired: 0,
      category: '',
      ownershipAttributes: {
        dropOnDeathChance: 0,
      },
    },
  };
};

const createInitWeaponEntity = (id: string): WeaponEntity => {
  const entity = createInitEntity(id);
  return {
    ...entity,
    category: 'weapon',
    weapon: '',
  };
};

const createInitWeapon = (id: string): Weapon => {
  return {
    id,
    name: '',
    accuracy: {
      far: 0,
      mid: 0,
      near: 0,
    },
    aim: {
      aimTimeMultiplier: {
        far: 0,
        mid: 0,
        near: 0,
      },
      fireAimTime: {
        min: 0,
        max: 0,
      },
      readyAimTime: {
        min: 0,
        max: 0,
      },
    },
    areaEffect: {
      accuracy: {
        far: 0,
        mid: 0,
        near: 0,
      },
      penetration: {
        far: 0,
        mid: 0,
        near: 0,
      },
      areaInfo: {
        areaType: 'none',
      },
      damageMultiplier: {
        far: 0,
        mid: 0,
        near: 0,
      },
      maxMember: 0,
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
        far: 0,
        mid: 0,
        near: 0,
      },
      rateOfFire: {
        max: 0,
        min: 0,
      },
      rateOfFireMultiplier: {
        far: 0,
        mid: 0,
        near: 0,
      },
    },
    cooldown: {
      duration: {
        max: 0,
        min: 0,
      },
      durationMultiplier: {
        far: 0,
        mid: 0,
        near: 0,
      },
    },
    damage: {
      max: 0,
      min: 0,
      damageType: '',
    },
    defaultAttackType: '',
    deflection: {
      deflectionDamageMultiplier: 0,
      hasDeflectionDamage: false,
    },
    fire: {
      windDown: 0,
      windUp: 0,
    },
    moving: {
      accuracyMultiplier: 0,
      burstMultiplier: 0,
      canFireWhileMoving: false,
      cooldownMultiplier: 0,
    },
    penetration: {
      far: 0,
      mid: 0,
      near: 0,
    },
    range: {
      distance: {
        far: 0,
        mid: 0,
        near: 0,
      },
      max: 0,
      min: 0,
    },
    reload: {
      duration: {
        max: 0,
        min: 0,
      },
      durationMultiplier: {
        far: 0,
        mid: 0,
        near: 0,
      },
      frequency: {
        max: 0,
        min: 0,
      },
    },
    scatter: {
      angle: 0,
      distanceMax: 0,
      distanceOffset: 0,
      distanceRatio: 0,
      fowAngleMultiplier: 0,
      fowDistanceMultiplier: 0,
      movementAngleMultiplier: 0,
      movementDistanceMultiplier: 0,
    },
    setup: {
      duration: 0,
    },
    suppression: {
      amount: 0,
      nearbyMultiplier: 0,
      nearbyRadius: 0,
    },
    teardown: {
      duration: 0,
    },
    tracking: {
      maxLeftAngle: 0,
      maxRightAngle: 0,
      speedHorizontal: 0,
    },
  };
};

export { createInitSquad, createInitEntity, createInitWeaponEntity, createInitWeapon };
