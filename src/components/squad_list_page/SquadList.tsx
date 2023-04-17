import styled from 'styled-components';
import type { Squad } from '../../types/game_data/squad';

import SquadBookmarkManager from '../common/squad_bookmark_manager/SquadBookmarkManager';
import SquadListHeader from './SquadListHeader';
import SquadListItem from './SquadListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../state_store/store';
import { useState } from 'react';

export interface Filters {
  race: string[];
  category: string[];
  filter: string[];
}

const SquadList = () => {
  const [filters, setFilters] = useState<Filters>({
    race: [],
    category: [],
    filter: [],
  });

  const sbps = useSelector((state: RootState) => state.gameData.sbps);
  const _squads: Squad[] = Object.values(sbps);

  const squads = _squads.filter((squad) => {
    const raceFilters = filters.race;
    const categoryFilters = filters.category;

    const isMatchRace = raceFilters.length > 0 ? raceFilters.includes(squad.race) : true;
    const isMatchCategory = categoryFilters.length > 0 ? categoryFilters.includes(squad.category) : true;
    let isMatchFilter = filters.filter.length > 0 ? false : true;

    for (const filter of filters.filter) {
      if (squad.filters.includes(filter)) {
        isMatchFilter = true;
        break;
      }
    }

    return isMatchRace && isMatchCategory && isMatchFilter;
  });

  return (
    <SquadListWrapper>
      <ContentsContainer>
        <SquadListHeader filters={filters} setFilters={setFilters} />
        {squads.length > 0 ? (
          <ListContainer>
            <List>
              {squads.map((squad) => {
                return <SquadListItem key={squad.id} squad={squad} />;
              })}
            </List>
          </ListContainer>
        ) : (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
      </ContentsContainer>
      <SquadBookmarkManagerTrack>
        <SquadBookmarkManager />
      </SquadBookmarkManagerTrack>
    </SquadListWrapper>
  );
};

export default SquadList;

const SquadListWrapper = styled.div`
  max-width: 1170px;
  //200px = header height(75px) + footer height(125px);
  min-height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 40px 0 60px;
  display: flex;
`;

const ContentsContainer = styled.section`
  width: 100%;
  max-width: 920px;
`;

const SquadBookmarkManagerTrack = styled.div`
  margin-left: 10px;
`;

const ListContainer = styled.div`
  margin-top: 20px;
`;

const List = styled.ul`
  border: solid 1px #c4c4c4;
  border-radius: 4px;
`;

const LoaderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  height: 50px;
  width: 50px;
  border: 3px solid #979797;
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
