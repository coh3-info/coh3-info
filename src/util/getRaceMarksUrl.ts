import raceMarkUSForces from '../images/common/race_marks/american.png';
import raceMarkBritishForces from '../images/common/race_marks/british.png';
import raceMarkWehrmacht from '../images/common/race_marks/german.png';
import raceMarkAfrikaKorps from '../images/common/race_marks/afrika_korps.png';

const getRaceMarkUrl = (race: 'us_forces' | 'british_forces' | 'wehrmacht' | 'afrika_korps') => {
  const raceUrlTable = {
    us_forces: raceMarkUSForces,
    british_forces: raceMarkBritishForces,
    wehrmacht: raceMarkWehrmacht,
    afrika_korps: raceMarkAfrikaKorps,
  };
  return raceUrlTable[race];
};

export default getRaceMarkUrl;
