import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import type { SquadBookmark } from '../../../types/bookmark/bookmark';
import { getSquad } from '../../../util/game_data/squad/squadsController';

type SelectedSquadItemProps = {
  bookmark: SquadBookmark;
  removeBookmark: (id: string) => void;
  selectBookmark: (id: string, isLeft: boolean) => void;
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
  const location = useLocation();
  const path = location.pathname;
  const { id, squadId } = bookmark;
  const squad = getSquad(squadId);

  return (
    <SquadBookmarkItemWrapper>
      {path === '/details' && (
        <RadioButtonsContainer>
          <input type="radio" name="left" onChange={() => selectBookmark(id, true)} checked={checkedLeft} />
          <input type="radio" name="right" onChange={() => selectBookmark(id, false)} checked={checkedRight} />
        </RadioButtonsContainer>
      )}

      <SquadName>{squad?.name}</SquadName>
      <RemoveButton onClick={() => removeBookmark(id)}>×</RemoveButton>
    </SquadBookmarkItemWrapper>
  );
};

export default SquadBookmarkItem;

const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  visibility: hidden;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const SquadBookmarkItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 4px 4px 8px;
  border: solid 1px #979797;
  border-radius: 6px;

  &:hover > ${RemoveButton} {
    visibility: visible;
  }
`;

const RadioButtonsContainer = styled.div`
  display: flex;
  gap: 3px;

  > input[type='radio'] {
    cursor: pointer;
  }
`;

const SquadName = styled.div`
  font-size: 0.75rem;
  flex-grow: 1;
  word-break: keep-all;
`;
