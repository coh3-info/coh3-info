import type Entity from '../../../../../types/game_data/entity';

const entityWMg42HmgGER: Entity = {
  id: 'w_mg42_hmg_ger',
  type: 'weapon',
  weapons: ['mg42_hmg_ger'],
  cost: {
    manpower: 0,
    fuel: 0,
    time: 1,
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

export default entityWMg42HmgGER;
