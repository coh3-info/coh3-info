import styled from 'styled-components';
import type Squad from '../../types/game_data/squad';

import SquadBookmarkManager from '../common/squad_bookmark_manager/SquadBookmarkManager';
import SquadListHeader from './SquadListHeader';
import SquadListItem from './SquadListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../state_store/store';

const SquadList = () => {
  const sbps = useSelector((state: RootState) => state.gameData.sbps);
  const squads: Squad[] = Object.values(sbps);

  return (
    <SquadListWrapper>
      <ContentsContainer>
        <SquadListHeader />
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
  margin: 0 auto;
  padding: 20px 0;
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
