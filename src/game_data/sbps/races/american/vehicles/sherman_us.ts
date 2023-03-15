import type Squad from '../../../../types/Squad';

const squad: Squad = {
  uniqueName: 'sherman_us',
  nameEN: 'M4A1 Sherman Medium Tank',
  name: 'M4A1 셔먼 중형전차',
  type: 'vehicle',
  race: 'us_forces',
  imageUrl: {
    portrait: '',
    icon: '',
  },
  abilities: [],
  captureRateMutiplier: 0,
  revertRateMutiplier: 0,
  constructions: [],
  entities: [
    {
      num: 1,
      entity: 'sherman_us',
    },
  ],
  reinforce: {
    costPercentage: 0.5,
    timePercentage: 1,
  },
  upgrades: [],
};

export default squad;
