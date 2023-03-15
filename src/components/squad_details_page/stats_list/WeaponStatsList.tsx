import StatsList from './StatsList';

import type { Stat, StatWithSubStats } from './stat';

const WeaponStatsList = () => {
  const statsList1: (Stat | StatWithSubStats)[] = [
    { statName: '공격력', leftValue: '3', rightValue: '120' },
    { statName: '비관통 공격력 배율', leftValue: '0%', rightValue: '15%' },
    {
      statName: '사거리',
      subStats: [
        { statName: '최소', leftValue: '0', rightValue: '0' },
        { statName: '최대', leftValue: '35', rightValue: '40' },
      ],
    },
    {
      statName: '거리 정의',
      subStats: [
        { statName: '근거리', leftValue: '7', rightValue: '10' },
        { statName: '중거리', leftValue: '25', rightValue: '25' },
        { statName: '원거리', leftValue: '35', rightValue: '40' },
      ],
    },
    {
      statName: '명중률',
      subStats: [
        { statName: '근거리', leftValue: '42%', rightValue: '7.5%' },
        { statName: '중거리', leftValue: '37.5%', rightValue: '5.63%' },
        { statName: '원거리', leftValue: '22%', rightValue: '4.5%' },
      ],
    },
    {
      statName: '초탄 조준 시간(초)',
      subStats: [
        { statName: '최소', leftValue: '0.3', rightValue: '0.125' },
        { statName: '최대', leftValue: '0.3', rightValue: '0.125' },
      ],
    },
    {
      statName: '조준 시간(초)',
      subStats: [
        { statName: '최소', leftValue: '0.25', rightValue: '0.125' },
        { statName: '최대', leftValue: '0.5', rightValue: '0.125' },
      ],
    },
    {
      statName: '조준 시간 배율',
      subStats: [
        { statName: '근거리', leftValue: '50%', rightValue: '100%' },
        { statName: '중거리', leftValue: '100%', rightValue: '100%' },
        { statName: '원거리', leftValue: '200%', rightValue: '100%' },
      ],
    },
    { statName: '연사 가능 여부', leftValue: 'true', rightValue: 'false' },
    {
      statName: '연사 시간(초)',
      subStats: [
        { statName: '최소', leftValue: '0.75', rightValue: '0' },
        { statName: '최대', leftValue: '0.75', rightValue: '0' },
      ],
    },
    {
      statName: '연사 시간 배율',
      subStats: [
        { statName: '근거리', leftValue: '100%', rightValue: '100%' },
        { statName: '중거리', leftValue: '75%', rightValue: '100%' },
        { statName: '원거리', leftValue: '50%', rightValue: '100%' },
      ],
    },
    {
      statName: '연사력',
      subStats: [
        { statName: '최소', leftValue: '10', rightValue: '0' },
        { statName: '최대', leftValue: '10', rightValue: '0' },
      ],
    },
    {
      statName: '연사력 배율',
      subStats: [
        { statName: '근거리', leftValue: '100%', rightValue: '100%' },
        { statName: '중거리', leftValue: '100%', rightValue: '100%' },
        { statName: '원거리', leftValue: '100%', rightValue: '100%' },
      ],
    },
    {
      statName: '쿨다운',
      subStats: [
        { statName: '최소', leftValue: '1.5', rightValue: '0' },
        { statName: '최대', leftValue: '2', rightValue: '0' },
      ],
    },
    {
      statName: '쿨다운 배율',
      subStats: [
        { statName: '근거리', leftValue: '100%', rightValue: '100%' },
        { statName: '중거리', leftValue: '150%', rightValue: '100%' },
        { statName: '원거리', leftValue: '200%', rightValue: '100%' },
      ],
    },
    { statName: 'wind_up', leftValue: '0', rightValue: '0' },
    { statName: 'wind_down', leftValue: '0', rightValue: '0.875' },

    {
      statName: '재장전 시간',
      subStats: [
        { statName: '최소', leftValue: '2.9', rightValue: '4' },
        { statName: '최대', leftValue: '3', rightValue: '5' },
      ],
    },
    {
      statName: '재장전 시간 배율',
      subStats: [
        { statName: '근거리', leftValue: '100%', rightValue: '100%' },
        { statName: '중거리', leftValue: '100%', rightValue: '100%' },
        { statName: '원거리', leftValue: '100%', rightValue: '100%' },
      ],
    },
    {
      statName: '재장전 주기',
      subStats: [
        { statName: '최소', leftValue: '2', rightValue: '0' },
        { statName: '최대', leftValue: '2', rightValue: '0' },
      ],
    },
  ];

  const statsList2: (Stat | StatWithSubStats)[] = [
    {
      statName: '관통력',
      subStats: [
        { statName: '근거리', leftValue: '1', rightValue: '180' },
        { statName: '중거리', leftValue: '1', rightValue: '125' },
        { statName: '원거리', leftValue: '1', rightValue: '110' },
      ],
    },
    {
      statName: '범위 명중률',
      subStats: [
        { statName: '근거리', leftValue: '100%', rightValue: '500%' },
        { statName: '중거리', leftValue: '100%', rightValue: '500%' },
        { statName: '원거리', leftValue: '100%', rightValue: '500%' },
      ],
    },
    {
      statName: '범위 관통력',
      subStats: [
        { statName: '근거리', leftValue: '1', rightValue: '10' },
        { statName: '중거리', leftValue: '1', rightValue: '10' },
        { statName: '원거리', leftValue: '1', rightValue: '10' },
      ],
    },
    { statName: '범위 반경', leftValue: '0', rightValue: '4.5' },
    { statName: '범위 형태', leftValue: 'null', rightValue: '원' },
    {
      statName: '범위 데미지 배율',
      subStats: [
        { statName: '근거리', leftValue: '100%', rightValue: '84%' },
        { statName: '중거리', leftValue: '62.5%', rightValue: '25%' },
        { statName: '원거리', leftValue: '25%', rightValue: '15%' },
      ],
    },
    { statName: '분대 당 최대 피해 인원수', leftValue: '-1', rightValue: '3' },
    {
      statName: '범위 거리 정의',
      subStats: [
        { statName: '근거리', leftValue: '0', rightValue: '0.25' },
        { statName: '중거리', leftValue: '0', rightValue: '0.75' },
        { statName: '원거리', leftValue: '0', rightValue: '4.5' },
      ],
    },
    {
      statName: '산탄도',
      subStats: [
        { statName: '각도', leftValue: '1.5', rightValue: '10' },
        { statName: '최대 거리', leftValue: '5', rightValue: '6' },
        { statName: '거리 offset', leftValue: '0.4', rightValue: '0.25' },
        { statName: '거리 비율', leftValue: '0.8', rightValue: '1' },
        { statName: '안개 속 각도 배율', leftValue: '100%', rightValue: '125%' },
        { statName: '안개 속 거리 배율', leftValue: '100%', rightValue: '125%' },
        { statName: '이동 중 각도 배율', leftValue: '100%', rightValue: '125%' },
        { statName: '이동 중 거리 배율', leftValue: '100%', rightValue: '125%' },
      ],
    },
    {
      statName: '무기 셋팅',
      subStats: [
        { statName: '거치 시간', leftValue: '0', rightValue: '0.125' },
        { statName: '해체 시간', leftValue: '0', rightValue: '0.125' },
      ],
    },
    {
      statName: '제압',
      subStats: [
        { statName: '제압력', leftValue: '0', rightValue: '0' },
        { statName: '제압 범위', leftValue: '0', rightValue: '0' },
        { statName: '범위 제압력 배율', leftValue: '0', rightValue: '0' },
      ],
    },
    {
      statName: 'tracking',
      subStats: [
        { statName: '왼쪽 사격각', leftValue: '-90', rightValue: '-180' },
        { statName: '오른쪽 사격각', leftValue: '90', rightValue: '180' },
        { statName: '포탑 선회속도', leftValue: '360˚', rightValue: '40˚' },
      ],
    },
    {
      statName: '이동사격',
      subStats: [
        { statName: '이동사격 가능 여부', leftValue: 'true', rightValue: 'true' },
        { statName: '연사시간 배율', leftValue: '85%', rightValue: '75%' },
        { statName: '명중률 배율', leftValue: '100%', rightValue: '100%' },
        { statName: '쿨다운 배율', leftValue: '100%', rightValue: '100%' },
      ],
    },
  ];

  return (
    <>
      <StatsList statsList1={statsList1} statsList2={statsList2} />
    </>
  );
};

export default WeaponStatsList;
