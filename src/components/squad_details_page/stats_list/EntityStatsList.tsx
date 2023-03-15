import StatsList from './StatsList';

import type { Stat, StatWithSubStats } from './stat';

const EntityStatsList = () => {
  const statsList: (Stat | StatWithSubStats)[] = [
    { statName: '체력', leftValue: '95', rightValue: '720' },
    { statName: '시야', leftValue: '35', rightValue: '42' },
    { statName: '체력', leftValue: '26', rightValue: '0' },
    {
      statName: '전진속도',
      subStats: [
        { statName: '최고속도', leftValue: '3.6', rightValue: '5.2' },
        { statName: '가속도', leftValue: '0', rightValue: '5' },
        { statName: '감속도', leftValue: '0', rightValue: '-1' },
      ],
    },
  ];

  return (
    <>
      <StatsList statsList={statsList} />
    </>
  );
};

export default EntityStatsList;
