import { StatGroup } from '../../../types/for_components/squad_details_page/stat';
import { Stat } from '../../../types/for_components/squad_details_page/stat';

import { StatListFormat, createStatList } from './stat';
import type { EntityStats } from '../../../types/stats/entityStats';

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
    ['시야', (t) => t?.sightRadius],
    // ['은신탐지거리', (t) => t?.detect?.global],

    [
      '충원',
      [
        ['비용', (t) => t?.reinforce.manpower],
        ['시간', (t) => t?.reinforce.time],
      ],
    ],
  ]);
};

export const createEntityStatList2 = (entities: (EntityStats | undefined)[]) => {
  return createEntityStatList(entities, [
    ['장갑', (t) => getArmor(t)],
    [
      '속도',
      [
        ['최고속도', (t) => t?.moving.speedScalingTable.defaultSpeed],
        ['가속도', (t) => t?.moving.acceleration],
        ['감속도', (t) => t?.moving.deceleration],
        ['선회속도', (t) => t?.moving.rotationRate, { unit: 'degree' }],
      ],
    ],

    /*모든 데이터의 후진속도 데이터가 0입니다. 후진속도 데이터의 값이 0일경우 전진속도의 값을 사용한다고 합니다. 
    그러므로 모든 후진속도 데이터는 전진속도와 같기때문에. 후진속도 스텟을 표시하지 않았습니다. 
    추후에 후진속도값이 0이 아닌 데이터를 발견했을 경우 다시 표시 하기위해 주석으로 남겨두었습니다.*/
    // [
    //   '후진속도',
    //   [
    //     ['최고속도', (t) => t?.moving.speedScalingTable.reverseMaxSpeed],
    //     ['가속도', (t) => t?.moving.reverseAcceleration],
    //     ['감속도', (t) => t?.moving.reverseDeceleration],
    //   ],
    // ],
  ]);
};
