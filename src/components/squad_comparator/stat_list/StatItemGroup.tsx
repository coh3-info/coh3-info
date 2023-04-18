import styled from 'styled-components';
import { StatGroup } from '../../../types/for_components/squad_details_page/stat';
import StatItem from './StatItem';

type StatItemsGroupProps = {
  statGroup: StatGroup;
};

const StatItemGroup = ({ statGroup }: StatItemsGroupProps) => {
  const { name, stats } = statGroup;
  return (
    <StatItemGroupWrappwer>
      <GroupName>{name}</GroupName>
      <StatList>
        {stats.map((stat) => {
          return <StatItem key={stat.name} stat={stat} isInGroup />;
        })}
      </StatList>
    </StatItemGroupWrappwer>
  );
};

export default StatItemGroup;

const StatItemGroupWrappwer = styled.div``;

const GroupName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;
`;

const StatList = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
