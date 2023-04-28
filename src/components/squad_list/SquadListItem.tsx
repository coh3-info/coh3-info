import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../../state_store/slice/squad_bookmark_manager';
import getRaceMarkUrl from '../../util/getRaceMarksUrl';

import { useCreateUnit } from '../../hooks/game_data/gameData';
import type { Squad } from '../../types/game_data/squad';
import { createUnitStats } from '../../util/stats/unitStats';

type SquadListItemProps = {
  squad: Squad;
};

const SquadListItem = ({ squad }: SquadListItemProps) => {
  const {
    id,
    name,
    nameKO,
    race,
    imageUrl: { icon, symbolIcon },
    ui: { briefText },
  } = squad;

  const dispatch = useDispatch();
  const createUnit = useCreateUnit();

  const onAddBookmark = () => {
    const unit = createUnit(id);
    if (unit === undefined) return console.error(new Error('unit이 undefined입니다.'));

    const unitStats = createUnitStats(unit);
    dispatch(addBookmark({ unit: unitStats }));
  };

  return (
    <SquadListItemWrapper onClick={onAddBookmark}>
      <RaceMark>
        <img src={getRaceMarkUrl(race)} alt={`${race} 마크`} />
      </RaceMark>
      <SquadProtrait>
        <img src={icon} alt={`${nameKO} 아이콘`} />
      </SquadProtrait>
      <SquadIcon>
        <img src={symbolIcon} alt={`${nameKO} 심볼 아이콘`} />
      </SquadIcon>
      <SquadNameContainer>
        <SquadNameKO>{nameKO}</SquadNameKO>
        <SquadName>{name}</SquadName>
      </SquadNameContainer>
      <SquadType>{briefText}</SquadType>
    </SquadListItemWrapper>
  );
};

export default SquadListItem;

const SquadListItemWrapper = styled.li`
  display: grid;
  grid-template: 1fr / repeat(3, max-content) 1fr max-content;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.colors.main.border};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.hoverBg};
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const RaceMark = styled(ImgContainer)`
  width: 40px;
  height: 40px;
`;

const SquadProtrait = styled(ImgContainer)`
  width: 40px;
  height: 40px;
`;

const SquadIcon = styled(ImgContainer)`
  width: 36px;
  height: 36px;
`;

const SquadNameContainer = styled.div``;

const SquadNameKO = styled.div``;

const SquadName = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.main.subTextGray};
`;

const SquadType = styled.div`
  font-size: 0.875rem;
`;
