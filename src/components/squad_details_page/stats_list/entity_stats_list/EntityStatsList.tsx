import styled from 'styled-components';
import { useSelector } from 'react-redux';

import StatsList from '../StatList';
import EntitySelector from './EntitySelector';

import type EntityStats from '../../../../types/stats/entityStats';
import type { Stat, StatGroup } from '../../../../types/for_components/squad_details_page/stat';
import type { RootState } from '../../../../state_store/store';
import { createStatList } from '../../../../util/for_components/squad_details_page/stat';
import {
  createEntityStatList1,
  createEntityStatList2,
} from '../../../../util/for_components/squad_details_page/entityStatsList';

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

  const statList1 = createEntityStatList1([leftEntity, rightEntity]);

  const statList2 = createEntityStatList2([leftEntity, rightEntity]);

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
