import styled from 'styled-components';
import { useSelector } from 'react-redux';
import StatsList from '../StatList';
import EntitySelector from './EntitySelector';
import type { RootState } from '../../../../state_store/store';

import {
  createEntityStatList1,
  createEntityStatList2,
} from '../../../../util/for_components/squad_details_page/entityStatsList';

const EntityStatsList = () => {
  const { bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => {
    const { bookmarkList, bookmarkIdOnLeft, bookmarkIdOnRight } = state.squadBookmarkManager;
    const bookmarkOnLeft = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnLeft);
    const bookmarkOnRight = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnRight);

    return { bookmarkOnLeft, bookmarkOnRight };
  });
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
      <Title>분대 구성원</Title>
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

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

const EntitySelectorContainer = styled.div`
  margin: 10px 0 10px;
  display: flex;
  gap: 10px;
`;
