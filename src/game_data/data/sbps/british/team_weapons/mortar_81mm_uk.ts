import portrait from '../../../../../images/british/team_weapons/mortar_81mm_uk/mortar_81mm_uk.png';
import squadIcon from '../../../../../images/british/team_weapons/mortar_81mm_uk/mortar_81mm_uk_symbol.png';

import type Squad from '../../../../../types/game_data/squad';

const squadMortar81mmUK: Squad = {
  id: 'mortar_81mm_uk',
  nameEN: 'ML 3-inch Mortar Team',
  name: 'ML 3인치 박격포 운용반',
  type: 'team_weapon',
  race: 'british_forces',
  imageUrl: {
    portrait,
    icon: squadIcon,
  },
  abilities: [],
  captureRateMutiplier: 1,
  revertRateMutiplier: 1,
  constructions: [],
  loadout: [
    { num: 1, entityId: 'w_81mm_mortar_uk' },
    {
      num: 4,
      entityId: 'crew_mortar_indian_uk',
    },
  ],
  population: {
    pop: 3,
  },
  reinforce: {
    costPercentage: 0.5,
    timePercentage: 1,
  },
  upgrades: [],
};

export default squadMortar81mmUK;
