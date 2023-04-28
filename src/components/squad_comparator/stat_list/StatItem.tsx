import styled, { css } from 'styled-components';

import type { Stat, UnitOfStat } from '../../../types/for_components/squad_comparator/stat';

const convertToUnitString = (value: number, unit: UnitOfStat): string => {
  if (unit === 'percentage') {
    return `${Number((value * 100).toFixed(2))}%`;
  } else {
    return `${value}˚`;
  }
};

const getValue = (stat: Stat, position: 'left' | 'right') => {
  const value = position === 'left' ? stat.leftValue : stat.rightValue;

  if (Array.isArray(value) && 'separator' in stat) {
    if (stat.separator === '~' && value[0] === value[1]) {
      return value[0];
    }

    return value.join(` ${stat.separator} `);
  }

  if (typeof value === 'number' && stat.unit !== undefined) {
    return convertToUnitString(value, stat.unit);
  }

  if (typeof value === 'number' && stat.unit === undefined && stat.decimalPlaces !== undefined) {
    return Number(value.toFixed(stat.decimalPlaces));
  }

  if (typeof value === 'boolean') {
    return value ? '가능' : '불가';
  }

  return value;
};

type StatItemProps = {
  stat: Stat;
  isInGroup?: boolean;
};

const StatItem = ({ stat, isInGroup = false }: StatItemProps) => {
  return (
    <StatItemWrapper>
      <LeftValue>{getValue(stat, 'left')}</LeftValue>
      <StatName isInGroup={isInGroup}>{stat.name}</StatName>
      <RightValue>{getValue(stat, 'right')}</RightValue>
    </StatItemWrapper>
  );
};

export default StatItem;

const StatItemWrapper = styled.li`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const StatName = styled.div<{ isInGroup: boolean }>`
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;

  ${({ isInGroup }) =>
    isInGroup &&
    css`
      color: ${({ theme }) => theme.colors.main.subTextGray};
      font-size: 0.815rem;
    `}
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
