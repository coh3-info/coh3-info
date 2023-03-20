import StatsList from './StatsList';

import type { Stat } from './stat';
import type Entity from '../../../game_data/types/Entity';
import type { Bookmark } from '../../../state_store/features/squadBookmarkSlice';
import { getEntity } from '../../../game_data/util/sbps';

type EntityStatsListProps = {
  leftBookmark: Bookmark | undefined;
  rightBookmark: Bookmark | undefined;
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

  const statsList1: Stat[] = [
    { statName: '체력', leftValue: leftEntity?.hitpoints, rightValue: rightEntity?.hitpoints },
    { statName: '피격률', leftValue: leftEntity?.targetSize, rightValue: rightEntity?.targetSize, unit: 'percentage' },
    {
      statName: '장갑',
      headers: ['전면', '측면', '후면'],
      leftValues: getArmor(leftEntity),
      rightValues: getArmor(rightEntity),
    },
    { statName: '충원비', leftValue: 26, rightValue: 0 },
    { statName: '충원시간', leftValue: 3, rightValue: 0 },
    { statName: '시야', leftValue: leftEntity?.sight, rightValue: rightEntity?.sight },
    { statName: '은신탐지거리', leftValue: leftEntity?.detect, rightValue: rightEntity?.detect },
  ];

  const statsList2: Stat[] = [
    {
      statName: '전진속도',
      headers: ['최고속도', '가속도', '감속도'],
      leftValues: [leftEntity?.moving.maxSpeed, leftEntity?.moving.acceleration, leftEntity?.moving.deceleration],
      rightValues: [rightEntity?.moving.maxSpeed, rightEntity?.moving.acceleration, rightEntity?.moving.deceleration],
    },
    {
      statName: '후진속도',
      headers: ['최고속도', '가속도', '감속도'],
      leftValues: [
        leftEntity?.moving.reverseMaxSpeed,
        leftEntity?.moving.reverseAcceleration,
        leftEntity?.moving.reverseDeceleration,
      ],
      rightValues: [
        rightEntity?.moving.reverseMaxSpeed,
        rightEntity?.moving.reverseAcceleration,
        rightEntity?.moving.reverseDeceleration,
      ],
    },
    {
      statName: '선회속도',
      leftValue: leftEntity?.moving.rotaionRate,
      rightValue: rightEntity?.moving.rotaionRate,
      unit: 'degree',
    },
  ];

  return (
    <>
      <StatsList statsList1={statsList1} statsList2={statsList2} />
    </>
  );
};

export default EntityStatsList;
