import portrait from '../../../../../images/american/infantiry/riflemen_us/riflemen_us.png';
import squadIcon from '../../../../../images/american/infantiry/riflemen_us/riflemen_us_symbol.png';

import entityRiflemenSquadLeaderUS from '../../../ebps/american/infantry/rifleman_squad_leader_us';
import entityRiflemanUS from '../../../ebps/american/infantry/rifleman_us';

import type Squad from '../../../../types/Squad';

const squadRiflemenUS: Squad = {
  uniqueName: 'riflemen_us',
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
  entities: [
    {
      num: 1,
      entity: entityRiflemenSquadLeaderUS,
    },
    {
      num: 5,
      entity: entityRiflemanUS,
    },
  ],
  reinforce: {
    costPercentage: 0.6,
    timePercentage: 1.2,
  },
  upgrades: [],
};

export default squadRiflemenUS;
