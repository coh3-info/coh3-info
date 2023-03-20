import { useSelector } from 'react-redux';
import styled from 'styled-components';

import SquadBookmarkManager from '../common/squad_bookmark_manager/SquadBookmarkManager';
import Controller from './controller/Controller';
import EntityStatsList from './stats_list/EntityStatsList';
import WeaponStatsList from './stats_list/WeaponStatsList';

import type { RootState } from '../../state_store/store';

const SquadDetails = () => {
  const leftBookmark = useSelector((state: RootState) => state.squadBookmark.selectedBookmarkOnLeft);
  const rightBookmark = useSelector((state: RootState) => state.squadBookmark.selectedBookmarkOnRight);

  return (
    <SquadDetailsWrapper>
      <InfoWrapper>
        <ControllersContainer>
          <Controller bookmark={leftBookmark} />
          <Controller bookmark={rightBookmark} />
        </ControllersContainer>
        <EntityStatsList />
        <WeaponStatsList />
      </InfoWrapper>
      <SquadBookmarkManagerTrack>
        <SquadBookmarkManager />
      </SquadBookmarkManagerTrack>
    </SquadDetailsWrapper>
  );
};

export default SquadDetails;

const SquadDetailsWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
`;

const InfoWrapper = styled.div`
  width: 100%;
  max-width: 960px;
`;

const ControllersContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SquadBookmarkManagerTrack = styled.div`
  margin-left: 10px;
`;
