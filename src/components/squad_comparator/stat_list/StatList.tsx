import styled from 'styled-components';

import StatItem from './StatItem';
import StatItemGroup from './StatItemGroup';

import type { Stat, StatGroup } from '../../../types/for_components/squad_comparator/stat';
import ColorLabelContainer from './ColorLabelContainer';

type StatListProps = {
  statList1: (Stat | StatGroup)[];
  statList2: (Stat | StatGroup)[];
};

const StatList = ({ statList1 = [], statList2 = [] }: StatListProps) => {
  return (
    <StatListWrapper>
      <List>
        <ColorLabelContainer />
        {statList1.map((stat) => {
          if ('stats' in stat) {
            return <StatItemGroup key={stat.name} statGroup={stat} />;
          }
          return <StatItem key={stat.name} stat={stat}></StatItem>;
        })}
      </List>
      <List>
        <ColorLabelContainer />
        {statList2.map((stat) => {
          if ('stats' in stat) {
            return <StatItemGroup key={stat.name} statGroup={stat} />;
          }
          return <StatItem key={stat.name} stat={stat}></StatItem>;
        })}
      </List>
    </StatListWrapper>
  );
};

export default StatList;

const StatListWrapper = styled.section`
  width: 100%;
  padding: 16px;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 6px;
  display: flex;

  position: relative;
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main.line};
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
