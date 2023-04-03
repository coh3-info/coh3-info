import StatsList from './StatList';
import { useSelector } from 'react-redux';

import type { SeparatorOfStat, Stat, StatGroup, StatValue, UnitOfStat } from './stat.d';
import type Entity from '../../../types/game_data/entity';
import type { RootState } from '../../../state_store/store';
import { WeaponEntity } from '../../../types/game_data/entity';
import { createStatList } from './stat';

const getArmor = (entity: Entity | WeaponEntity | undefined) => {
  const armor = entity?.health.armor;
  if (armor === undefined) return [];

  if (typeof armor === 'number') {
    return [armor, armor, armor];
  }
  const { front, side, rear } = armor;
  return [front, side, rear];
};

const EntityStatsList = () => {
  const { bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => state.squadBookmarkManager);
  const leftEntity = bookmarkOnLeft?.unit.loadout[0].entity;
  const rightEntity = bookmarkOnRight?.unit.loadout[0].entity;

  const statList1: (Stat | StatGroup)[] = createStatList<Entity | WeaponEntity | undefined>(
    [leftEntity, rightEntity],
    [
      ['id', (t) => t?.id],
      ['체력', (t) => t?.health.hitpoints],
      ['피격률', (t) => t?.health.targetSize],
      ['장갑', (t) => getArmor(t)],
      // [
      //   '충원',
      //   [
      //     ['비용', (t) => 30],
      //     ['시간', (t) => 20],
      //   ],
      // ],
      ['시야', (t) => t?.sight.sightPackage.outerRadius],
      ['은신탐지거리', (t) => t?.sight.detectCamouflage.global],
    ]
  );

  const statList2: (Stat | StatGroup)[] = createStatList<Entity | WeaponEntity | undefined>(
    [leftEntity, rightEntity],
    [
      [
        '전진속도',
        [
          ['최고속도', (t) => t?.moving.speedScalingTable.defaultSpeed],
          ['가속도', (t) => t?.moving.acceleration],
          ['감속도', (t) => t?.moving.deceleration],
        ],
      ],

      [
        '후진속도',
        [
          ['최고속도', (t) => t?.moving.speedScalingTable.reverseMaxSpeed],
          ['가속도', (t) => t?.moving.reverseAcceleration],
          ['감속도', (t) => t?.moving.reverseDeceleration],
        ],
      ],
      ['선회속도', (t) => t?.moving.rotationRate, { unit: 'degree' }],
    ]
  );

  return (
    <>
      <StatsList statList1={statList1} statList2={statList2} />
    </>
  );
};

export default EntityStatsList;
