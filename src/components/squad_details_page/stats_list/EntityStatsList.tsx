import StatsList from './StatList';
import { getEntity } from '../../../util/game_data/entity/entitiesController';
import { getSquad } from '../../../util/game_data/squad/squadsController';
import { useSelector } from 'react-redux';

import type { Stat, StatGroup } from './stat';
import type Entity from '../../../types/game_data/entity';
import type { RootState } from '../../../state_store/store';
import EntityStats from '../../../util/stats/class/EntityStats';

const getArmor = (entity: EntityStats | undefined) => {
  const armor = entity?.armor;
  if (armor === undefined) return [];

  if (typeof armor === 'number') {
    return [armor, armor, armor];
  }
  const { front, side, rear } = armor;
  return [front, side, rear];
};

const EntityStatsList = () => {
  const { selectedBookmarkOnLeft: leftBookmark, selectedBookmarkOnRight: rightBookmark } = useSelector(
    (state: RootState) => state.squadBookmarkManager
  );

  const leftSquad = leftBookmark !== undefined ? getSquad(leftBookmark.squadId) : undefined;
  const rightSquad = rightBookmark !== undefined ? getSquad(rightBookmark.squadId) : undefined;
  const _leftEntity = leftBookmark !== undefined ? getEntity(leftBookmark.selectedEntityId) : undefined;
  const _rightEntity = rightBookmark !== undefined ? getEntity(rightBookmark.selectedEntityId) : undefined;
  const leftEntity =
    _leftEntity !== undefined
      ? new EntityStats(_leftEntity, {
          cost: leftSquad?.reinforce.costPercentage ?? 0,
          time: leftSquad?.reinforce.timePercentage ?? 0,
        })
      : undefined;
  const rightEntity =
    _rightEntity !== undefined
      ? new EntityStats(_rightEntity, {
          cost: rightSquad?.reinforce.costPercentage ?? 0,
          time: rightSquad?.reinforce.timePercentage ?? 0,
        })
      : undefined;

  const statList1: (Stat | StatGroup)[] = [
    { name: '체력', leftValue: leftEntity?.hitpoints, rightValue: rightEntity?.hitpoints },
    { name: '피격률', leftValue: leftEntity?.targetSize, rightValue: rightEntity?.targetSize, unit: 'percentage' },
    { name: '장갑', leftValue: getArmor(leftEntity), rightValue: getArmor(rightEntity), separator: '/' },
    {
      name: '충원비',
      leftValue: leftEntity?.reinforce.cost,
      rightValue: rightEntity?.reinforce.cost,
    },
    {
      name: '충원시간',
      leftValue: leftEntity?.reinforce.time,
      rightValue: rightEntity?.reinforce.time,
    },
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
