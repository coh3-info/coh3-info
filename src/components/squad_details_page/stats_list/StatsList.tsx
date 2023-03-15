import styled from 'styled-components';
import StatItem from './StatItem';

import type { Stat, StatWithSubStats } from './stat';

type StatsListProps = {
  statsList: (Stat | StatWithSubStats)[];
};

const StatsList = ({ statsList = [] }: StatsListProps) => {
  return (
    <StatsListWrapper>
      {statsList.map((stat) => {
        if ('subStats' in stat) {
          const { statName, subStats } = stat;
          return <StatItem statName={statName} subStats={subStats}></StatItem>;
        } else {
          const { statName, leftValue, rightValue } = stat as Stat;
          return <StatItem statName={statName} leftValue={leftValue} rightValue={rightValue} />;
        }
      })}
    </StatsListWrapper>
  );
};

export default StatsList;

const StatsListWrapper = styled.div`
  width: 100%;
  max-width: 530px;
  margin-top: 20px; //temp attribute 추후 수정하기
  padding: 16px;
  border: solid 1px #979797;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
