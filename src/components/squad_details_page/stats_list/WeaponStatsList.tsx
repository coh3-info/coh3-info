import StatsList from './StatsList';

import type { Stat, StatWithSubStats } from './stat';

const WeaponStatsList = () => {
  const statsList: (Stat | StatWithSubStats)[] = [
    { statName: '공격력', leftValue: '12', rightValue: '160' },
    { statName: '비관통 공격력 배율', leftValue: '0%', rightValue: '15%' },
    {
      statName: '명중률',
      subStats: [
        { statName: '근거리', leftValue: '85%', rightValue: '5.5%' },
        { statName: '중거리', leftValue: '62%', rightValue: '2.7%' },
        { statName: '원거리', leftValue: '25%', rightValue: '0.5%' },
      ],
    },
    {
      statName: '거리정의',
      subStats: [
        { statName: '근거리', leftValue: '35', rightValue: '45' },
        { statName: '중거리', leftValue: '20', rightValue: '25' },
        { statName: '원거리', leftValue: '7', rightValue: '7' },
      ],
    },
  ];

  return (
    <>
      <StatsList statsList={statsList} />
    </>
  );
};

export default WeaponStatsList;
