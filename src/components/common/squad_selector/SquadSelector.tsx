import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state_store/store';

import SquadSelectorItem from './SquadSelectorItem';

const SquadSelector = () => {
  const location = useLocation();
  const testValue = useSelector((state: RootState) => state.selector.squadList);
  const path = location.pathname;
  return (
    <SquadSelectorWrapper>
      <Title>관심 분대</Title>
      <SquadListWrapper>
        <SquadList>
          {testValue.map((v, i) => (
            <SquadSelectorItem key={i} squadName={v.name} />
          ))}
        </SquadList>
      </SquadListWrapper>
      {path === '/' ? (
        <LinkToSquadListButton to="/details">분대 상세 보기</LinkToSquadListButton>
      ) : (
        <LinkToSquadListButton to="/">분대 목록 보기</LinkToSquadListButton>
      )}
    </SquadSelectorWrapper>
  );
};

export default SquadSelector;

const SquadSelectorWrapper = styled.div`
  width: 200px;
  padding: 8px;
  border: solid 1px #979797;
  border-radius: 6px;
  position: sticky;
  top: 0;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

const SquadListWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const SquadList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  > li {
    display: flex;
    border: solid 1px #979797;
    border-radius: 6px;
    font-size: 0.875rem;
  }
`;

const LinkToSquadListButton = styled(Link)`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border: solid 1px #979797;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    background-color: #dfdfdf;
  }
`;
