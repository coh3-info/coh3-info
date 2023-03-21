import StatsList from './StatList';

import type { Stat, StatGroup } from './stat';

const WeaponStatsList = () => {
  const statList1: (Stat | StatGroup)[] = [
    { name: '공격력', leftValue: 3, rightValue: 120 },
    { name: '비관통 공격력', leftValue: 0, rightValue: 18 },
    { name: '사거리', leftValue: [0, 35], rightValue: [0, 35], separator: '~' },
    {
      name: '거리 정의',
      stats: [
        { name: '근거리', leftValue: 7, rightValue: 10 },
        { name: '중거리', leftValue: 25, rightValue: 25 },
        { name: '원거리', leftValue: 35, rightValue: 40 },
      ],
    },
    {
      name: '관통력',
      stats: [
        { name: '근거리', leftValue: 1, rightValue: 180 },
        { name: '중거리', leftValue: 1, rightValue: 125 },
        { name: '원거리', leftValue: 1, rightValue: 110 },
      ],
    },
    {
      name: '명중률',
      stats: [
        { name: '근거리', leftValue: 0.42, rightValue: 0.075, unit: 'percentage' },
        { name: '중거리', leftValue: 0.375, rightValue: 0.0563, unit: 'percentage' },
        { name: '원거리', leftValue: 0.22, rightValue: 0.045, unit: 'percentage' },
      ],
    },
    {
      name: '쿨다운(초)',
      stats: [
        { name: '근거리', leftValue: [1.5, 2], rightValue: [0, 0], separator: '~' },
        { name: '중거리', leftValue: [2.25, 3], rightValue: [0, 0], separator: '~' },
        { name: '원거리', leftValue: [3, 4], rightValue: [0, 0], separator: '~' },
      ],
    },
    {
      name: '첫발 조준 시간(초)',
      stats: [
        { name: '근거리', leftValue: [0.15, 0.15], rightValue: [0.125, 0.125], separator: '~' },
        { name: '중거리', leftValue: [0.3, 0.3], rightValue: [0.125, 0.125], separator: '~' },
        { name: '원거리', leftValue: [0.6, 0.6], rightValue: [0.125, 0.125], separator: '~' },
      ],
    },
    {
      name: '조준 시간(초)',
      stats: [
        { name: '근거리', leftValue: [0.375, 0.25], rightValue: [0.125, 0.125], separator: '~' },
        { name: '중거리', leftValue: [0.25, 0.5], rightValue: [0.125, 0.125], separator: '~' },
        { name: '원거리', leftValue: [0.5, 1], rightValue: [0.125, 0.125], separator: '~' },
      ],
    },
    { name: '연사 가능 여부', leftValue: true, rightValue: false },
    {
      name: '연사 시간(초)',
      stats: [
        { name: '근거리', leftValue: [0.75, 0.75], rightValue: [0, 0], separator: '~' },
        { name: '중거리', leftValue: [0.5625, 0.5625], rightValue: [0, 0], separator: '~' },
        { name: '원거리', leftValue: [0.375, 0.375], rightValue: [0, 0], separator: '~' },
      ],
    },
    {
      name: '연사력',
      stats: [
        { name: '근거리', leftValue: [10, 10], rightValue: [0, 0], separator: '~' },
        { name: '중거리', leftValue: [10, 10], rightValue: [0, 0], separator: '~' },
        { name: '원거리', leftValue: [10, 10], rightValue: [0, 0], separator: '~' },
      ],
    },
    {
      name: '사격 전후 시간(초)',
      stats: [
        { name: '사격 전', leftValue: 0, rightValue: 0 },
        { name: '사격 후', leftValue: 0, rightValue: 0.875 },
      ],
    },
    {
      name: '재장전 시간(초)',
      stats: [
        { name: '근거리', leftValue: [2.9, 3], rightValue: [4, 5], separator: '~' },
        { name: '중거리', leftValue: [2.9, 3], rightValue: [4, 5], separator: '~' },
        { name: '원거리', leftValue: [2.9, 3], rightValue: [4, 5], separator: '~' },
      ],
    },
    { name: '재장전 주기', leftValue: [2, 2], rightValue: [0, 0], separator: '~' },
  ];

  const statList2: (Stat | StatGroup)[] = [
    { name: '범위 형태', leftValue: '없음', rightValue: '원' },
    { name: '범위 반경', leftValue: 0, rightValue: 4.5 },
    {
      name: '범위 거리 정의',
      stats: [
        { name: '근거리', leftValue: 0, rightValue: 0.25, separator: '~' },
        { name: '중거리', leftValue: 0, rightValue: 0.75, separator: '~' },
        { name: '원거리', leftValue: 0, rightValue: 4.5, separator: '~' },
      ],
    },
    {
      name: '범위 데미지',
      stats: [
        { name: '근거리', leftValue: 0, rightValue: 96 },
        { name: '중거리', leftValue: 0, rightValue: 30 },
        { name: '원거리', leftValue: 0, rightValue: 18 },
      ],
    },
    { name: '분대 당 최대 피해 인원수', leftValue: 0, rightValue: 3 },
    {
      name: '범위 명중률',
      stats: [
        { name: '근거리', leftValue: 0, rightValue: 5, unit: 'percentage' },
        { name: '중거리', leftValue: 0, rightValue: 5, unit: 'percentage' },
        { name: '원거리', leftValue: 0, rightValue: 5, unit: 'percentage' },
      ],
    },
    {
      name: '범위 관통력',
      stats: [
        { name: '근거리', leftValue: 0, rightValue: 10 },
        { name: '중거리', leftValue: 0, rightValue: 10 },
        { name: '원거리', leftValue: 0, rightValue: 10 },
      ],
    },
    {
      name: '산탄도',
      stats: [
        { name: '각도', leftValue: 1.5, rightValue: 10 },
        { name: '최대 거리', leftValue: 5, rightValue: 6 },
        { name: '거리 offset', leftValue: 0.4, rightValue: 0.25 },
        { name: '거리 비율', leftValue: 0.8, rightValue: 1 },
        { name: '안개 속 각도 배율', leftValue: 1, rightValue: 1.25, unit: 'percentage' },
        { name: '안개 속 거리 배율', leftValue: 1, rightValue: 1.25, unit: 'percentage' },
        { name: '이동 중 각도 배율', leftValue: 1, rightValue: 1.25, unit: 'percentage' },
        { name: '이동 중 거리 배율', leftValue: 1, rightValue: 1.25, unit: 'percentage' },
      ],
    },
    {
      name: '무기 셋팅',
      stats: [
        { name: '거치 시간', leftValue: 0, rightValue: 0 },
        { name: '해체 시간', leftValue: 0, rightValue: 0 },
      ],
    },
    {
      name: '제압',
      stats: [
        { name: '제압력', leftValue: 0, rightValue: 0 },
        { name: '제압 범위', leftValue: 0, rightValue: 0 },
        { name: '범위 제압력 배율', leftValue: 0, rightValue: 0 },
      ],
    },
    {
      name: 'tracking',
      stats: [
        { name: '왼쪽 사격각', leftValue: -90, rightValue: -180 },
        { name: '오른쪽 사격각', leftValue: 90, rightValue: 180 },
        { name: '포탑 선회속도', leftValue: 360, rightValue: 40, unit: 'degree' },
      ],
    },
    {
      name: '이동사격',
      stats: [
        { name: '이동사격 가능 여부', leftValue: true, rightValue: true },
        { name: '연사시간 배율', leftValue: 0.85, rightValue: 0.75, unit: 'percentage' },
        { name: '명중률 배율', leftValue: 1, rightValue: 1, unit: 'percentage' },
        { name: '쿨다운 배율', leftValue: 1, rightValue: 1, unit: 'percentage' },
      ],
    },
  ];

  return (
    <>
      <StatsList statList1={statList1} statList2={statList2} />
    </>
  );
};

export default WeaponStatsList;
