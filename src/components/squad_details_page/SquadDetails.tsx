import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import SquadBookmarkManager from '../common/squad_bookmark_manager/SquadBookmarkManager';
import Controller from './controller/Controller';
import EntityStatsList from './stats_list/EntityStatsList';
import WeaponStatsList from './stats_list/WeaponStatsList';

import type { RootState } from '../../state_store/store';

const SquadDetails = () => {
  const navigate = useNavigate();
  const { bookmarkOnLeft, bookmarkOnRight, bookmarkList } = useSelector(
    (state: RootState) => state.squadBookmarkManager
  );

  useEffect(() => {
    if (bookmarkList.length === 0) {
      navigate('/');
    }
  }, []);
  return (
    <SquadDetailsWrapper>
      <InfoWrapper>
        <ControllersContainer>
          <Controller isLeft />
          <Controller />
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
