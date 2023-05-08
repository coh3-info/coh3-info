import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import Controller from './controller/Controller';
import EntityStatList from './stat_list/entity_stat_list/EntityStatList';
import WeaponStatList from './stat_list/weapon_stat_list/WeaponStatList';
import SquadBookmarkManagerTrack from '../common/squad_bookmark_manager/SquadBookmarkTrack';

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
      <SquadBookmarkManagerTrack />
      <InfoWrapper>
        <ControllersContainer>
          <Controller position="left" />
          <Controller position="right" />
        </ControllersContainer>
        <EntityStatList />
        <WeaponStatList />
      </InfoWrapper>
    </SquadCompartorWrapper>
  );
};

export default SquadCompartor;

const SquadCompartorWrapper = styled.div`
  /* width: 100%; */
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px 0 60px;
  display: flex;
  gap: 10px;

  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.tablet}px`}) {
    padding-left: 6px;
    padding-right: 3px;
  }

  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.mobile}px`}) {
    flex-direction: column;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  max-width: 920px;
`;

const ControllersContainer = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.main.bgWhite};
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  gap: 10px;

  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.mobile}px`}) {
    flex-direction: column;
    position: static;
  }
`;
