import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import SquadBookmarkManager from '../common/squad_bookmark_manager/SquadBookmarkManager';
import Controller from './controller/Controller';
import EntityStatList from './stat_list/entity_stat_list/EntityStatList';
import WeaponStatList from './stat_list/weapon_stat_list/WeaponStatList';

import type { RootState } from '../../state_store/store';

const SquadCompartor = () => {
  const navigate = useNavigate();
  const { bookmarkList } = useSelector((state: RootState) => state.squadBookmarkManager);

  useEffect(() => {
    if (bookmarkList.length === 0) {
      navigate('/compare/squad-list');
    }
  }, [bookmarkList, navigate]);
  return (
    <SquadCompartorWrapper>
      <InfoWrapper>
        <ControllersContainer>
          <Controller position="left" />
          <Controller position="right" />
        </ControllersContainer>
        <EntityStatList />
        <WeaponStatList />
      </InfoWrapper>
      <SquadBookmarkManagerTrack>
        <SquadBookmarkManagerWrapper>
          <SquadBookmarkManager />
        </SquadBookmarkManagerWrapper>
      </SquadBookmarkManagerTrack>
    </SquadCompartorWrapper>
  );
};

export default SquadCompartor;

const SquadCompartorWrapper = styled.div`
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
