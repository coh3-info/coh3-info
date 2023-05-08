import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../state_store/store';
import { useState } from 'react';

import SquadListHeader from './SquadListHeader';
import SquadListItem from './SquadListItem';
import SquadBookmarkManagerTrack from '../common/squad_bookmark_manager/SquadBookmarkTrack';

import type { Squad } from '../../types/game_data/squad';

export interface Filters {
  race: string[];
  category: string[];
  anti: string[];
  role: string[];
  vehicleClassification: string[];
}

const SquadList = () => {
  const [filters, setFilters] = useState<Filters>({
    race: [],
    category: [],
    anti: [],
    role: [],
    vehicleClassification: [],
  });

  const sbps = useSelector((state: RootState) => state.gameData.sbps);
  const isDoneSbps = useSelector((state: RootState) => state.gameData.isDoneSbps);
  const isDoneEbps = useSelector((state: RootState) => state.gameData.isDoneEbps);
  const isDoneWeapons = useSelector((state: RootState) => state.gameData.isDoneWeapons);
  const isDoneAll = useSelector((state: RootState) => state.gameData.isDoneAll);

  const _squads: Squad[] = Object.values(sbps);

  const squads = _squads.filter((squad) => {
    const raceFilters = filters.race;
    const categoryFilters = filters.category;

    const isMatchRace = raceFilters.length > 0 ? raceFilters.includes(squad.race) : true;
    const isMatchCategory = categoryFilters.length > 0 ? categoryFilters.includes(squad.category) : true;
    let isMatchAnti = filters.anti.length > 0 ? false : true;
    let isMatchRole = filters.role.length > 0 ? false : true;
    let isMatchVehicleClassification = filters.vehicleClassification.length > 0 ? false : true;

    for (const filter of filters.anti) {
      if (squad.filters.includes(filter)) {
        isMatchAnti = true;
        break;
      }
    }

    for (const filter of filters.role) {
      if (squad.filters.includes(filter)) {
        isMatchRole = true;
        break;
      }
    }

    for (const filter of filters.vehicleClassification) {
      if (squad.filters.includes(filter)) {
        isMatchVehicleClassification = true;
        break;
      }
    }

    return isMatchRace && isMatchCategory && isMatchAnti && isMatchRole && isMatchVehicleClassification;
  });

  return (
    <SquadListWrapper>
      <SquadBookmarkManagerTrack />
      <ContentsContainer>
        <SquadListHeader filters={filters} setFilters={setFilters} />
        {isDoneAll ? (
          <ListContainer>
            {squads.length > 0 ? (
              <List>
                {squads.map((squad) => {
                  return <SquadListItem key={squad.id} squad={squad} />;
                })}
              </List>
            ) : (
              <ListEmptyMessage>해당 조건에 맞는 분대가 없습니다.</ListEmptyMessage>
            )}
          </ListContainer>
        ) : (
          <LoaderContainer>
            <Loader />
            {/* ProgressBar와 LoadingMassage는 초기로딩속도가 너무 오래 걸려 좀더 나은 사용성을 위해 추가했습니다. 추후 로딩속도문제가 해결되면 없어도 됩니다. */}
            <ProgressBar>
              <Progress isDone={isDoneSbps}>{isDoneSbps ? '완료' : '분대 데이터 불러오는 중...'}</Progress>
              <Progress isDone={isDoneEbps}>{isDoneEbps ? '완료' : '객체 데이터 불러오는 중...'}</Progress>
              <Progress isDone={isDoneWeapons}>{isDoneWeapons ? '완료' : '무기 데이터 불러오는 중...'}</Progress>
            </ProgressBar>
            <LoadingMassage>
              불러오는 데이터의 양이 많아 로딩이 매우 오래 걸릴 수 있습니다. <br />
              추후에 빠른 로딩을 위해 노력하겠습니다.
            </LoadingMassage>
          </LoaderContainer>
        )}
      </ContentsContainer>
    </SquadListWrapper>
  );
};

export default SquadList;

const SquadListWrapper = styled.div`
  max-width: 1170px;
  //200px = header height(75px) + footer height(125px);
  min-height: calc(100vh - 200px);
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

const ContentsContainer = styled.section`
  width: 100%;
  max-width: 920px;
  padding-top: 10px;
`;

const ListContainer = styled.div`
  margin-top: 20px;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 4px;
`;

const List = styled.ul``;

const ListEmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.main.subTextGray};
  font-size: 1.25rem;
  text-align: center;
  padding: 20px 0;
`;

const LoaderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Loader = styled.div`
  height: 50px;
  width: 50px;
  border: 3px solid ${({ theme }) => theme.colors.main.border};
  border-right-color: transparent;
  border-top-color: transparent;
  border-radius: 100%;

  animation: loading-spin 800ms infinite linear;

  @keyframes loading-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 100px;
  display: flex;
`;

const Progress = styled.div<{ isDone?: boolean }>`
  font-size: 0.75rem;
  background-color: ${({ isDone, theme }) => (isDone ? theme.colors.main.green : 'transparent')};
  flex-basis: 33.34%;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;

  &:first-child {
    border-right: solid 1px ${({ theme }) => theme.colors.main.border};
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &:last-child {
    border-left: solid 1px ${({ theme }) => theme.colors.main.border};
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`;

const LoadingMassage = styled.p`
  color: ${({ theme }) => theme.colors.main.subTextGray};
  font-size: 0.875rem;
  max-width: 500px;
  text-align: center;
  word-break: keep-all;
`;
