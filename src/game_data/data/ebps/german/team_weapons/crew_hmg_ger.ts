import type Entity from '../../../../../types/game_data/entity';

const entityCrewHmgGER: Entity = {
  uniqueName: 'grew_hmg_ger',
  type: 'crew',
  weapons: ['mp40_crew_ger'],
  cost: {
    manpower: 65,
    fuel: 0,
    time: 6.25,
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

export default entityCrewHmgGER;
