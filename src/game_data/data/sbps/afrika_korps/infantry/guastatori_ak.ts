import portrait from '../../../../../images/afrika_korps/infantry/guastatori_ak/guastatori_ak.png';
import squadIcon from '../../../../../images/afrika_korps/infantry/guastatori_ak/guastatori_ak_symbol.png';

import type Squad from '../../../../../types/game_data/squad';
import entityGuastatoriAK from '../../../ebps/afrika_korps/infantry/guastatori_ak';

const squadGuastatoriAK: Squad = {
  uniqueName: 'guastatori_ak',
  nameEN: 'Guastatori Squad',
  name: '이탈리아 공병 분대',
  type: 'infantry',
  race: 'afrika_korps',
  imageUrl: {
    portrait,
    icon: squadIcon,
  },
  abilities: [],
  captureRateMutiplier: 1.25,
  revertRateMutiplier: 1,
  constructions: [],
  entities: [{ num: 6, entity: entityGuastatoriAK }],
  population: {
    pop: 4,
  },
  reinforce: {
    costPercentage: 0.48,
    timePercentage: 0.625,
  },
  upgrades: [],
};

export default squadGuastatoriAK;
