import type EntityData from '../../../../../types/game_data/entity';

const entityW81mmMortarUK: EntityData = {
  id: 'w_81mm_mortar_uk',
  type: 'weapon',
  weapons: ['81mm_mortar_uk'],
  cost: {
    manpower: 80,
    fuel: 0,
    time: 5,
  },
  armor: 60,
  hitpoints: 180,
  targetSize: 0.5,
  moving: {
    acceleration: -1,
    deceleration: -1,
    reverseAcceleration: 0,
    reverseDeceleration: 0,
    rotaionRate: 0,
    maxSpeed: 0,
    reverseMaxSpeed: 0,
  },
  population: {
    pop: 0,
  },
  detect: 0,
  sight: 0,
};

export default entityW81mmMortarUK;
