import type Entity from '../../../../types/Entity';

const entityRiflemanUS: Entity = {
  uniqueName: 'rifleman_us',
  type: 'infantry',
  weapons: ['garand_rifleman_us'],
  cost: {
    fuel: 0,
    manpower: 43.34,
    time: 3.33,
  },
  armor: 1,
  hitpoints: 100,
  targetSize: 1,
  moving: {
    acceleration: -1,
    deceleration: -1,
    reverseAcceleration: 0,
    reverseDeceleration: 0,
    rotaionRate: 900,
    maxSpeed: 3.6,
    reverseMaxSpeed: 0,
  },
  detect: 10,
  sight: 35,
};

export default entityRiflemanUS;
