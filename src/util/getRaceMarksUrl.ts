import type { Race } from '../types/game_data/squad';

const getRaceMarkUrl = (race: Race) => {
  if (race === '') {
    return '';
  }
  const afrikaKorpsMark = '/images/icons/common/races/afrika_korps_small.png';
  const americansMark = '/images/icons/common/races/american_small.png';
  const britishMark = '/images/icons/common/races/british_small.png';
  const germansMark = '/images/icons/common/races/german_small.png';

  const raceUrlTable = {
    americans: americansMark,
    british: britishMark,
    british_africa: britishMark,
    germans: germansMark,
    afrika_korps: afrikaKorpsMark,
  };
  return raceUrlTable[race];
};

export default getRaceMarkUrl;
