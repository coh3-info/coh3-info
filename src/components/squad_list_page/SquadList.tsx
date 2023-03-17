import styled from 'styled-components';
import { getSquadList } from '../../game_data/data_controller/sbps';

import SquadSelector from '../common/squad_selector/SquadSelector';
import SquadListHeader from './SquadListHeader';
import SquadListItem from './SquadListItem';

const SquadList = () => {
  const squadList = getSquadList();

  return (
    <SquadListWrapper>
      <div>
        <SquadListHeader />
        <List>
          {squadList.map((squad) => {
            return <SquadListItem squad={squad} />;
          })}
        </List>
      </div>
      <SquadSelectorTrack>
        <SquadSelector />
      </SquadSelectorTrack>
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

const SquadSelectorTrack = styled.div`
  margin-left: 10px;
`;

const List = styled.ul`
  margin-top: 20px;
  border: solid 1px #c4c4c4;
  border-radius: 4px;
`;
