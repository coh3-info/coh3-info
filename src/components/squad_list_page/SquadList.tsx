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
      <div>
        <SquadListHeader />
        <List>
          {squads.map((squad) => {
            return <SquadListItem key={squad.id} squad={squad} />;
          })}
        </List>
      </div>
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

  > div:first-child {
    width: 100%;
    max-width: 960px;
  }
`;

const SquadBookmarkManagerTrack = styled.div`
  margin-left: 10px;
`;

const List = styled.ul`
  margin-top: 20px;
  border: solid 1px #c4c4c4;
  border-radius: 4px;
`;
