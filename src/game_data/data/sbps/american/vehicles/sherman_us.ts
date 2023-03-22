import portrait from '../../../../../images/american/vehicles/sherman_us/sherman_us.png';
import squadIcon from '../../../../../images/american/vehicles/sherman_us/sherman_us_symbol.png';

import entityShermanUS from '../../../ebps/american/vehicles/sherman_us';

import type Squad from '../../../../../types/game_data/squad';

const squadShermenUS: Squad = {
  uniqueName: 'sherman_us',
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
  entities: [
    {
      num: 1,
      entity: entityShermanUS,
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
