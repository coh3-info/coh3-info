import styled from 'styled-components';
import type { Stat, StatValue } from './stat';

type StatItemProps = {
  stat: Stat;
};

const StatItem = ({ stat }: StatItemProps) => {
  const getValue = (value: StatValue) => {
    if (stat.unit === 'percentage' && typeof value === 'number') {
      return `${value * 100}%`;
    }

    if (stat.unit === 'degree' && typeof value === 'number') {
      return `${value}˚`;
    }

    return value;
  };

  return (
    <StatItemWrapper>
      {'headers' in stat ? (
        <StatWithSubStats>
          <StatName>{stat.statName}</StatName>
          <SubStats>
            {stat.headers.map((header, i) => {
              return (
                <SingleStat key={header}>
                  <LeftValue>{getValue(stat.leftValues[i])}</LeftValue>
                  <SubStatName>{header}</SubStatName>
                  <RightValue>{getValue(stat.rightValues[i])}</RightValue>
                </SingleStat>
              );
            })}
          </SubStats>
        </StatWithSubStats>
      ) : (
        <SingleStat>
          <LeftValue>{getValue(stat.leftValue)}</LeftValue>
          <StatName>{stat.statName}</StatName>
          <RightValue>{getValue(stat.rightValue)}</RightValue>
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
