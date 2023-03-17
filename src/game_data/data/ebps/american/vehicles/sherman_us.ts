import type Entity from '../../../../types/Entity';

const entity: Entity = {
  uniqueName: 'sherman_us',
  type: 'vehicle',
  weapons: ['75mm_sherman_us', '30cal_coaxial_sherman_us', '30cal_hull_sherman_us'],
  cost: {
    fuel: 90,
    manpower: 360,
    time: 45,
  },
  armor: {
    front: 195,
    side: 110,
    rear: 80,
  },
  hitpoints: 720,
  targetSize: 20,
  moving: {
    acceleration: 2.2,
    deceleration: 4,
    reverseAcceleration: 0,
    reverseDeceleration: 0,
    rotaionRate: 35,
    maxSpeed: 5.25,
    reverseMaxSpeed: 0,
  },
  detect: 10,
  sight: 35,
};

export default entity;
