import styled from 'styled-components';
import StatItem from './StatItem';

import type { Stat, StatGroup } from './stat';
import StatItemGroup from './StatItemGroup';

type StatListProps = {
  statList1: (Stat | StatGroup)[];
  statList2: (Stat | StatGroup)[];
};

const StatList = ({ statList1 = [], statList2 = [] }: StatListProps) => {
  return (
    <StatListWrapper>
      <List>
        {statList1.map((stat) => {
          if ('stats' in stat) {
            return <StatItemGroup statGroup={stat} />;
          }
          return <StatItem key={stat.name} stat={stat}></StatItem>;
        })}
      </List>
      <List>
        {statList2.map((stat) => {
          if ('stats' in stat) {
            return <StatItemGroup statGroup={stat} />;
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
  margin-top: 20px; //temp attribute 추후 수정하기
  padding: 16px;
  border: solid 1px #979797;
  border-radius: 6px;
  display: flex;

  position: relative;
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: #c4c4c4;
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
