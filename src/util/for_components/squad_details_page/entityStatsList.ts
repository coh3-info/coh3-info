import { StatGroup } from '../../../types/for_components/squad_details_page/stat';
import { Stat } from '../../../types/for_components/squad_details_page/stat';

import { StatListFormat, createStatList } from './stat';
import EntityStats from '../../../types/stats/entityStats';

const getArmor = (entity: EntityStats | undefined) => {
  const armor = entity?.armor;
  if (armor === undefined) return [];

  if (typeof armor === 'number') {
    return [armor, armor, armor];
  }
  const { front, side, rear } = armor;
  return [front, side, rear];
};

const createEntityStatList = (
  entities: (EntityStats | undefined)[],
  format: StatListFormat<EntityStats | undefined>
): (Stat | StatGroup)[] => {
  return createStatList<EntityStats | undefined>(entities, format);
};

export const createEntityStatList1 = (entities: (EntityStats | undefined)[]) => {
  return createEntityStatList(entities, [
    ['체력', (t) => t?.hitpoints],
    ['피격률', (t) => t?.targetSize],
    ['장갑', (t) => getArmor(t)],
    [
      '충원',
      [
        ['비용', (t) => t?.reinforce.manpower],
        ['시간', (t) => t?.reinforce.time],
      ],
    ],
    ['시야', (t) => t?.sightRadius],
    ['은신탐지거리', (t) => t?.detect?.global],
  ]);
};

export const createEntityStatList2 = (entities: (EntityStats | undefined)[]) => {
  return createEntityStatList(entities, [
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
  ]);
};
