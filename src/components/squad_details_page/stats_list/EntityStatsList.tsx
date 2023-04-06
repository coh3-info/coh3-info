import StatsList from './StatList';
import { useSelector } from 'react-redux';
import { createStatList } from './stat';
import EntityStats from '../../../types/stats/entityStats';

import type { Stat, StatGroup } from './stat.d';
import type { RootState } from '../../../state_store/store';
import styled from 'styled-components';
import EntitySelector from './EntitySelector';

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
  const { bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => state.squadBookmarkManager);
  const selectedEntityIdOnLeft = bookmarkOnLeft?.selectedEntityId ?? '';
  const selectedEntityIdOnRight = bookmarkOnRight?.selectedEntityId ?? '';

  const leftEntity = bookmarkOnLeft?.unit.entities.find((entity) => entity.id === selectedEntityIdOnLeft);
  const rightEntity = bookmarkOnRight?.unit.entities.find((entity) => entity.id === selectedEntityIdOnRight);

  const entityOptionsOnLeft =
    bookmarkOnLeft?.unit.loadout.map((loadoutData) => {
      return { name: loadoutData.entityId, value: loadoutData.entityId, num: loadoutData.num };
    }) ?? [];

  const entityOptionsOnRight =
    bookmarkOnRight?.unit.loadout.map((loadoutData) => {
      return { name: loadoutData.entityId, value: loadoutData.entityId, num: loadoutData.num };
    }) ?? [];

  const statList1: (Stat | StatGroup)[] = createStatList<EntityStats | undefined>(
    [leftEntity, rightEntity],
    [
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
    ]
  );

  const statList2: (Stat | StatGroup)[] = createStatList<EntityStats | undefined>(
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
    <EntityStatsListWrapper>
      <EntitySelectorContainer>
        <EntitySelector options={entityOptionsOnLeft} defaultValue={selectedEntityIdOnLeft} position="left" />
        <EntitySelector options={entityOptionsOnRight} defaultValue={selectedEntityIdOnRight} position="right" />
      </EntitySelectorContainer>
      <StatsList statList1={statList1} statList2={statList2} />
    </EntityStatsListWrapper>
  );
};

export default EntityStatsList;

const EntityStatsListWrapper = styled.section`
  margin-top: 20px;
`;

const EntitySelectorContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;
