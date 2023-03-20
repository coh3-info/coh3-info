import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type SelectedSquadItemProps = {
  squadName: string;
};

const SquadBookmark = ({ squadName }: SelectedSquadItemProps) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <SquadBookmarkWrapper>
      {path === '/details' && (
        <RadioButtonsContainer>
          <input type="radio" name="left" />
          <input type="radio" name="right" />
        </RadioButtonsContainer>
      )}

      <SquadName>{squadName}</SquadName>
      <RemoveButton>×</RemoveButton>
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
