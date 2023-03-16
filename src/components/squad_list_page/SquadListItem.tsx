import styled from 'styled-components';

import tempRaceMark from '../../images/common/american.png';
import tempSquadIcon from '../../images/american/infantiry/riflemen_us/riflemen_us_symbol.png';

const SquadListItem = () => {
  return (
    <SquadListItemWrapper>
      <RaceMark>
        <img src={tempRaceMark} alt="진영마크" />
      </RaceMark>
      <SquadIcon>
        <img src={tempSquadIcon} alt="분대 아이콘" />
      </SquadIcon>
      <SquadName>소총병 분대</SquadName>
      <SquadType>대보병 / 주력</SquadType>
    </SquadListItemWrapper>
  );
};

export default SquadListItem;

const SquadListItemWrapper = styled.li`
  display: grid;
  grid-template: 1fr / max-content max-content 1fr max-content;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: solid 1px #c4c4c4;
  }

  &:hover {
    background-color: #dfdfdf;
  }
`;

const RaceMark = styled.div`
  width: 40px;
  height: 40px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const SquadIcon = styled.div`
  width: 36px;
  height: 36px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const SquadName = styled.div``;
const SquadType = styled.div`
  font-size: 0.875rem;
`;
