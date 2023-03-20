import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import type { Bookmark } from '../../../state_store/features/squadBookmarkSlice';

type SelectedSquadItemProps = {
  bookmark: Bookmark;
  removeBookmark: (id: string) => void;
  selectBookmark: (id: string, isLeft: boolean) => void;
  checkedLeft: boolean;
  checkedRight: boolean;
};

const SquadBookmark = ({
  bookmark,
  removeBookmark,
  selectBookmark,
  checkedLeft,
  checkedRight,
}: SelectedSquadItemProps) => {
  const {
    id,
    squad: { name: squadName },
  } = bookmark;

  const location = useLocation();
  const path = location.pathname;

  return (
    <SquadBookmarkWrapper>
      {path === '/details' && (
        <RadioButtonsContainer>
          <input type="radio" name="left" onClick={() => selectBookmark(id, true)} checked={checkedLeft} />
          <input type="radio" name="right" onClick={() => selectBookmark(id, false)} checked={checkedRight} />
        </RadioButtonsContainer>
      )}

      <SquadName>{squadName}</SquadName>
      <RemoveButton onClick={() => removeBookmark(id)}>×</RemoveButton>
    </SquadBookmarkWrapper>
  );
};

export default SquadBookmark;

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

const SquadBookmarkWrapper = styled.li`
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
