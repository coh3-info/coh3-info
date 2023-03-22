import type EntityData from '../../../../../types/game_data/entity';

const entityRiflemenSquadLeaderUS: EntityData = {
  id: 'rifleman_squad_leader_us',
  type: 'infantry',
  weapons: ['tompson_riflemen_leader_us'],
  cost: {
    manpower: 43.34,
    fuel: 0,
    time: 5,
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
  population: {
    pop: 1,
  },
  detect: 10,
  sight: 35,
};

export default entityRiflemenSquadLeaderUS;
