import StatsList from './StatsList';

import type { Stat, StatWithSubStats } from './stat';

const EntityStatsList = () => {
  const statsList1: (Stat | StatWithSubStats)[] = [
    { statName: '체력', leftValue: '100', rightValue: '720' },
    { statName: '피격률', leftValue: '100%', rightValue: '2000%' },
    { statName: '장갑', leftValue: '130 / 80 / 20', rightValue: '195 / 110 / 80' },
    { statName: '충원비', leftValue: '26', rightValue: '0' },
    { statName: '충원시간', leftValue: '3', rightValue: '0' },
    { statName: '시야', leftValue: '35', rightValue: '35' },
    { statName: '은신탐지거리', leftValue: '10', rightValue: '10' },
  ];

  const statsList2: (Stat | StatWithSubStats)[] = [
    {
      statName: '전진속도',
      subStats: [
        { statName: '최고속도', leftValue: '3.6', rightValue: '5.25' },
        { statName: '가속도', leftValue: '-1', rightValue: '2.2' },
        { statName: '감속도', leftValue: '-1', rightValue: '4' },
      ],
    },
    {
      statName: '후진속도',
      subStats: [
        { statName: '최고속도', leftValue: '0', rightValue: '0' },
        { statName: '가속도', leftValue: '0', rightValue: '0' },
        { statName: '감속도', leftValue: '0', rightValue: '0' },
      ],
    },
    { statName: '선회속도', leftValue: '900˚', rightValue: '40˚' },
  ];

  return (
    <>
      <StatsList statsList1={statsList1} statsList2={statsList2} />
    </>
  );
};

export default EntityStatsList;
