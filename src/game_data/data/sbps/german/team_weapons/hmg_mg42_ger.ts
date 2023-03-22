import portrait from '../../../../../images/german/team_weapons/hmg_mg42_ger/hmg_mg42_ger.png';
import squadIcon from '../../../../../images/german/team_weapons/hmg_mg42_ger/hmg_mg42_ger_symbol.png';

import type Squad from '../../../../../types/game_data/squad';
import entityCrewHmgGER from '../../../ebps/german/team_weapons/crew_hmg_ger';
import entityWMg42HmgGER from '../../../ebps/german/weapons/w_mg42_hmg_ger';

const squadHmgMg42GER: Squad = {
  uniqueName: 'hmg_mg42_ger',
  nameEN: 'MG42 Machine Gun Team',
  name: 'MG42 기관총 운용반',
  type: 'team_weapon',
  race: 'wehrmacht',
  imageUrl: {
    portrait,
    icon: squadIcon,
  },
  abilities: [],
  captureRateMutiplier: 1,
  revertRateMutiplier: 1,
  constructions: [],
  entities: [
    { num: 1, entity: entityWMg42HmgGER },
    { num: 4, entity: entityCrewHmgGER },
  ],
  population: {
    pop: 3,
  },
  reinforce: {
    costPercentage: 0.38,
    timePercentage: 1,
  },
  upgrades: [],
};

export default squadHmgMg42GER;
