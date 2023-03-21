import StatsList from './StatList';
import { getEntity } from '../../../util/squad';

import type { Stat, StatGroup } from './stat';
import type Entity from '../../../types/game_data/entity';
import type { SquadBookmark } from '../../../types/bookmark/bookmark';

type EntityStatsListProps = {
  leftBookmark: SquadBookmark | undefined;
  rightBookmark: SquadBookmark | undefined;
};

const getArmor = (entity: Entity | undefined) => {
  const armor = entity?.armor;
  if (armor === undefined || typeof armor === 'number') {
    return [armor, armor, armor];
  }
  const { front, side, rear } = armor;
  return [front, side, rear];
};

const EntityStatsList = ({ leftBookmark, rightBookmark }: EntityStatsListProps) => {
  const leftEntity =
    leftBookmark !== undefined ? getEntity(leftBookmark.squad, leftBookmark.selectedEntityUniqueName) : undefined;
  const rightEntity =
    rightBookmark !== undefined ? getEntity(rightBookmark?.squad, rightBookmark?.selectedEntityUniqueName) : undefined;

  const statList1: (Stat | StatGroup)[] = [
    { name: '체력', leftValue: leftEntity?.hitpoints, rightValue: rightEntity?.hitpoints },
    { name: '피격률', leftValue: leftEntity?.targetSize, rightValue: rightEntity?.targetSize, unit: 'percentage' },
    { name: '장갑', leftValue: getArmor(leftEntity), rightValue: getArmor(rightEntity), separator: '/' },
    { name: '충원비', leftValue: 26, rightValue: 0 },
    { name: '충원시간', leftValue: 3, rightValue: 0 },
    { name: '시야', leftValue: leftEntity?.sight, rightValue: rightEntity?.sight },
    { name: '은신탐지거리', leftValue: leftEntity?.detect, rightValue: rightEntity?.detect },
  ];

  const statList2: (Stat | StatGroup)[] = [
    {
      name: '전진속도',
      stats: [
        { name: '최고속도', leftValue: leftEntity?.moving.maxSpeed, rightValue: rightEntity?.moving.maxSpeed },
        { name: '가속도', leftValue: leftEntity?.moving.acceleration, rightValue: rightEntity?.moving.acceleration },
        { name: '감속도', leftValue: leftEntity?.moving.deceleration, rightValue: rightEntity?.moving.deceleration },
      ],
    },
    {
      name: '후진속도',
      stats: [
        {
          name: '최고속도',
          leftValue: leftEntity?.moving.reverseMaxSpeed,
          rightValue: rightEntity?.moving.reverseMaxSpeed,
        },
        {
          name: '가속도',
          leftValue: leftEntity?.moving.reverseAcceleration,
          rightValue: rightEntity?.moving.reverseAcceleration,
        },
        {
          name: '감속도',
          leftValue: leftEntity?.moving.reverseDeceleration,
          rightValue: rightEntity?.moving.reverseDeceleration,
        },
      ],
    },
    {
      name: '선회속도',
      leftValue: leftEntity?.moving.rotaionRate,
      rightValue: rightEntity?.moving.rotaionRate,
      unit: 'degree',
    },
  ];

  return (
    <>
      <StatsList statList1={statList1} statList2={statList2} />
    </>
  );
};

export default EntityStatsList;
