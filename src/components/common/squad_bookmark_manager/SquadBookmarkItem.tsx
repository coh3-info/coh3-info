import { useLocation } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import type { SquadBookmark } from '../../../types/bookmark/bookmark';
import SelectButton from '../buttons/SelectButton';
import getRaceMarkUrl from '../../../util/getRaceMarksUrl';
import { ImgContainer } from '../styles/ImgContainer.style';

type SelectedSquadItemProps = {
  bookmark: SquadBookmark;
  removeBookmark: (id: string) => void;
  selectBookmark: (id: string, position: 'left' | 'right') => void;
  checkedLeft: boolean;
  checkedRight: boolean;
};

const SquadBookmarkItem = ({
  bookmark,
  removeBookmark,
  selectBookmark,
  checkedLeft,
  checkedRight,
}: SelectedSquadItemProps) => {
  const theme = useTheme();
  const location = useLocation();
  const path = location.pathname;
  const {
    id,
    unit: { squad },
  } = bookmark;

  return (
    <SquadBookmarkItemWrapper>
      {path === '/compare/comparator' && (
        <RadioButtonsContainer>
          <SelectButton
            type="radio"
            id={`${bookmark.id}left`}
            name="bookmark-left"
            onSelect={() => selectBookmark(id, 'left')}
            checked={checkedLeft}
            color={theme.colors.main.blue}
          />
          <SelectButton
            type="radio"
            id={`${bookmark.id}right`}
            name="bookmark-right"
            onSelect={() => selectBookmark(id, 'right')}
            checked={checkedRight}
            color={theme.colors.main.red}
          />
        </RadioButtonsContainer>
      )}
      <RaceIcon>
        <img src={getRaceMarkUrl(squad.race)} alt={`${squad.race} 아이콘`} />
      </RaceIcon>
      <SymbolIcon>
        <img src={squad.imageUrl.symbolIcon} alt={`${squad.nameKO} 심볼 아이콘`} />
      </SymbolIcon>
      <SquadName>{squad.nameKO}</SquadName>
      <RemoveButton onClick={() => removeBookmark(id)}>X</RemoveButton>
    </SquadBookmarkItemWrapper>
  );
};

export default SquadBookmarkItem;

const SquadBookmarkItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 4px 4px 8px;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 6px;
`;

const RadioButtonsContainer = styled.div`
  display: flex;
  gap: 3px;

  > input[type='radio'] {
    cursor: pointer;
  }
`;

const RaceIcon = styled(ImgContainer)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`;

const SymbolIcon = styled(ImgContainer)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`;

const SquadName = styled.div`
  font-size: 0.75rem;
  flex-grow: 1;
  word-break: keep-all;
`;

const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  font-size: 0.625rem;

  &:hover {
    color: ${({ theme }) => theme.colors.main.red};
  }
`;
