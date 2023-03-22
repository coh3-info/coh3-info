import type EntityData from '../../../../../types/game_data/entity';

const entityCrewMortarIndianUK: EntityData = {
  id: 'crew_mortar_indian_uk',
  type: 'crew',
  weapons: ['lee_enfield_crew_uk'],
  cost: {
    manpower: 45,
    fuel: 0,
    time: 5,
  },
  armor: 1,
  hitpoints: 80,
  targetSize: 1.33,
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

export default entityCrewMortarIndianUK;
