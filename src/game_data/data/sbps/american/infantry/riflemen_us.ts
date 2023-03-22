import portrait from '../../../../../images/american/infantiry/riflemen_us/riflemen_us.png';
import squadIcon from '../../../../../images/american/infantiry/riflemen_us/riflemen_us_symbol.png';

import type SquadData from '../../../../../types/game_data/squad';

const squadRiflemenUS: SquadData = {
  id: 'riflemen_us',
  nameEN: 'Riflemen Squad',
  name: '소총병 분대',
  type: 'infantry',
  race: 'us_forces',
  imageUrl: {
    portrait,
    icon: squadIcon,
  },
  abilities: [],
  captureRateMutiplier: 1.25,
  revertRateMutiplier: 1,
  constructions: [],
  loadout: [
    {
      num: 1,
      entityId: 'rifleman_squad_leader_us',
    },
    {
      num: 5,
      entityId: 'rifleman_us',
    },
  ],
  population: {
    pop: 1,
  },
  reinforce: {
    costPercentage: 0.6,
    timePercentage: 1.2,
  },
  upgrades: [],
};

export default squadRiflemenUS;
