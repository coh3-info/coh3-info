import styled from 'styled-components';
import type { StatValue, Stat } from './stat';

type StatItemProps = {
  statName: string;
  leftValue?: StatValue;
  rightValue?: StatValue;
  subStats?: Stat[];
};

const StatItem = ({ statName = '', leftValue = '', rightValue = '', subStats = [] }: StatItemProps) => {
  const hasSubStats = subStats.length !== 0;

  return (
    <StatItemWrapper>
      {hasSubStats ? (
        <StatWithSubStats>
          <StatName>{statName}</StatName>
          <SubStats>
            {subStats.map((subStat) => {
              return (
                <SingleStat key={subStat.statName}>
                  <LeftValue>{subStat.leftValue}</LeftValue>
                  <SubStatName>{subStat.statName}</SubStatName>
                  <RightValue>{subStat.rightValue}</RightValue>
                </SingleStat>
              );
            })}
          </SubStats>
        </StatWithSubStats>
      ) : (
        <SingleStat>
          <LeftValue>{leftValue}</LeftValue>
          <StatName>{statName}</StatName>
          <RightValue>{rightValue}</RightValue>
        </SingleStat>
      )}
    </StatItemWrapper>
  );
};

export default StatItem;

const StatItemWrapper = styled.li`
  max-width: 100%;
`;

const SingleStat = styled.div`
  display: flex;
  justify-content: center;
`;

const StatName = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;
`;

const Value = styled.div`
  flex-basis: 30%;
  font-size: 0.875rem;
`;

const LeftValue = styled(Value)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightValue = styled(Value)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StatWithSubStats = styled.div`
  /* margin-top: 4px; */
`;

const SubStats = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const SubStatName = styled(StatName)`
  color: #979797;
  font-size: 0.815rem;
`;
