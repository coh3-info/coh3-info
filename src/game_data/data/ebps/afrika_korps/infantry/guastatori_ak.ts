import type Entity from '../../../../../types/game_data/entity';

const entityGuastatoriAK: Entity = {
  uniqueName: 'guastatori_ak',
  type: 'infantry',
  weapons: ['beretta_m38_guastatori_ak'],
  cost: {
    fuel: 0,
    manpower: 83.33334,
    time: 8,
  },
  armor: 1.25,
  hitpoints: 105,
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
  population: {
    pop: 1,
  },
  detect: 10,
  sight: 35,
};

export default entityGuastatoriAK;
