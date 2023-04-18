import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import SquadBookmarkManager from '../common/squad_bookmark_manager/SquadBookmarkManager';
import Controller from './controller/Controller';
import EntityStatsList from './stats_list/entity_stats_list/EntityStatsList';
import WeaponStatsList from './stats_list/weapon_stat_list/WeaponStatsList';

import type { RootState } from '../../state_store/store';

const SquadDetails = () => {
  const navigate = useNavigate();
  const { bookmarkList } = useSelector((state: RootState) => state.squadBookmarkManager);

  useEffect(() => {
    if (bookmarkList.length === 0) {
      navigate('/compare/squad-list');
    }
  }, [bookmarkList, navigate]);
  return (
    <SquadDetailsWrapper>
      <InfoWrapper>
        <ControllersContainer>
          <Controller position="left" />
          <Controller position="right" />
        </ControllersContainer>
        <EntityStatsList />
        <WeaponStatsList />
      </InfoWrapper>
      <SquadBookmarkManagerTrack>
        <SquadBookmarkManagerWrapper>
          <SquadBookmarkManager />
        </SquadBookmarkManagerWrapper>
      </SquadBookmarkManagerTrack>
    </SquadDetailsWrapper>
  );
};

export default SquadDetails;

const SquadDetailsWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px 0 60px;
  display: flex;
`;

const InfoWrapper = styled.div`
  width: 100%;
  max-width: 920px;
`;

const ControllersContainer = styled.div`
  padding-top: 10px;
  background-color: #fff;
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  gap: 10px;
`;

const SquadBookmarkManagerTrack = styled.div`
  position: relative;
  margin-left: 10px;
`;

const SquadBookmarkManagerWrapper = styled.div`
  padding-top: 10px;
  position: sticky;
  top: 0;
`;
