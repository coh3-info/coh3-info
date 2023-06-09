import styled, { useTheme } from 'styled-components';

import StatItem from './StatItem';
import StatItemGroup from './StatItemGroup';

import type { Stat, StatGroup } from '../../../types/for_components/squad_comparator/stat';
import ColorLabelContainer from './ColorLabelContainer';
import { useMediaQuery } from 'react-responsive';

type StatListProps = {
  statList1: (Stat | StatGroup)[];
  statList2: (Stat | StatGroup)[];
};

const StatList = ({ statList1 = [], statList2 = [] }: StatListProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery({ query: `(max-width:${theme.screenSize.mobile}px)` });

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
        {!isMobile && <ColorLabelContainer />}
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

  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.mobile}px`}) {
    flex-direction: column;
    gap: 12px;

    &::after {
      display: none;
    }
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
