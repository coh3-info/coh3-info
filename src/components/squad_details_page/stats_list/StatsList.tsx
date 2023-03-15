import styled from 'styled-components';
import StatItem from './StatItem';

import type { Stat, StatWithSubStats } from './stat';

type StatsListProps = {
  statsList1: (Stat | StatWithSubStats)[];
  statsList2: (Stat | StatWithSubStats)[];
};

const StatsList = ({ statsList1 = [], statsList2 = [] }: StatsListProps) => {
  return (
    <StatsListWrapper>
      <List>
        {statsList1.map((stat) => {
          if ('subStats' in stat) {
            const { statName, subStats } = stat;
            return <StatItem key={statName} statName={statName} subStats={subStats}></StatItem>;
          } else {
            const { statName, leftValue, rightValue } = stat as Stat;
            return <StatItem key={statName} statName={statName} leftValue={leftValue} rightValue={rightValue} />;
          }
        })}
      </List>
      <List>
        {statsList2.map((stat) => {
          if ('subStats' in stat) {
            const { statName, subStats } = stat;
            return <StatItem key={statName} statName={statName} subStats={subStats}></StatItem>;
          } else {
            const { statName, leftValue, rightValue } = stat as Stat;
            return <StatItem key={statName} statName={statName} leftValue={leftValue} rightValue={rightValue} />;
          }
        })}
      </List>
    </StatsListWrapper>
  );
};

export default StatsList;

const StatsListWrapper = styled.section`
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
