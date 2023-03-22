import portrait from '../../../../../images/american/vehicles/sherman_us/sherman_us.png';
import squadIcon from '../../../../../images/american/vehicles/sherman_us/sherman_us_symbol.png';

import type SquadData from '../../../../../types/game_data/squad';

const squadShermenUS: SquadData = {
  id: 'sherman_us',
  nameEN: 'M4A1 Sherman Medium Tank',
  name: 'M4A1 셔먼 중형전차',
  type: 'vehicle',
  race: 'us_forces',
  imageUrl: {
    portrait,
    icon: squadIcon,
  },
  abilities: [],
  captureRateMutiplier: 0,
  revertRateMutiplier: 0,
  constructions: [],
  loadout: [
    {
      num: 1,
      entityId: 'sherman_us',
    },
  ],
  population: {
    pop: 0,
  },
  reinforce: {
    costPercentage: 0.5,
    timePercentage: 1,
  },
  upgrades: [],
};

export default squadShermenUS;
