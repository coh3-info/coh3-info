import riflemanUS from '../../../../ebps/races/american/infantry/rifleman_us';
import riflemanSquadLeaderUS from '../../../../ebps/races/american/infantry/rifleman_squad_leader_us';
import type Squad from '../../../../../types/Squad';

const squad: Squad = {
  uniqueName: 'riflemen_us',
  nameEN: 'Riflemen Squad',
  name: '소총병 분대',
  type: 'infantry',
  race: 'us_forces',
  imageUrl: {
    portrait: '',
    icon: '',
  },
  abilities: [],
  captureRateMutiplier: 1.25,
  revertRateMutiplier: 1,
  constructions: [],
  entities: [
    {
      num: 1,
      entity: 'rifleman_squad_leader_us',
    },
    {
      num: 5,
      entity: 'rifleman_us',
    },
  ],
  reinforce: {
    costPercentage: 0.6,
    timePercentage: 1.2,
  },
  upgrades: [],
};

export default squad;
