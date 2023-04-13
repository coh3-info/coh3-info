import styled from 'styled-components';
import SelectButton from '../common/buttons/SelectButton';
import { FILTER_TABLE } from '../../util/filter/filter';

import type { Filters } from './SquadList';

interface SquadListHeaderProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const SquadListHeader = ({ filters, setFilters }: SquadListHeaderProps) => {
  const onSelectRace = (value: string) => {
    const newFilters = {
      ...filters,
      race: [...filters.race, value],
    };

    setFilters(newFilters);
  };
  const onDeselectRace = (value: string) => {
    const newFilters = {
      ...filters,
      race: filters.race.filter((race) => race !== value),
    };
    setFilters(newFilters);
  };

  const onSelectCategory = (value: string) => {
    const newFilters = {
      ...filters,
      category: [...filters.category, value],
    };

    setFilters(newFilters);
  };
  const onDeselectCategory = (value: string) => {
    const newFilters = {
      ...filters,
      category: filters.category.filter((category) => category !== value),
    };
    setFilters(newFilters);
  };

  const onSelectFilter = (value: string) => {
    const newFilters = {
      ...filters,
      filter: [...filters.filter, value],
    };

    setFilters(newFilters);
  };
  const onDeselectFilter = (value: string) => {
    const newFilters = {
      ...filters,
      filter: filters.filter.filter((filter) => filter !== value),
    };
    setFilters(newFilters);
  };
  return (
    <SquadListHeaderWrapper>
      <Category>
        <CategoryName>진영</CategoryName>
        <CheckboxesContainer>
          <SelectButton
            id="filter-race-americans"
            value="americans"
            onSelect={onSelectRace}
            onDeselect={onDeselectRace}
            checked={filters.race.includes('americans')}
          >
            미국
          </SelectButton>
          <SelectButton
            id="filter-race-british"
            value="british_africa"
            onSelect={onSelectRace}
            onDeselect={onDeselectRace}
            checked={filters.race.includes('british_africa')}
          >
            영국
          </SelectButton>
          <SelectButton
            id="filter-race-germans"
            value="germans"
            onSelect={onSelectRace}
            onDeselect={onDeselectRace}
            checked={filters.race.includes('germans')}
          >
            독일 국방군
          </SelectButton>
          <SelectButton
            id="filter-race-afrika_korps"
            value="afrika_korps"
            onSelect={onSelectRace}
            onDeselect={onDeselectRace}
            checked={filters.race.includes('afrika_korps')}
          >
            아프리카 군단
          </SelectButton>
        </CheckboxesContainer>
      </Category>
      <Category>
        <CategoryName>분류</CategoryName>
        <CheckboxesContainer>
          <SelectButton
            id="filter-category-infantry"
            value="infantry"
            onSelect={onSelectCategory}
            onDeselect={onDeselectCategory}
            checked={filters.category.includes('infantry')}
          >
            보병
          </SelectButton>
          <SelectButton
            id="filter-category-team_weapons"
            value="team_weapons"
            onSelect={onSelectCategory}
            onDeselect={onDeselectCategory}
            checked={filters.category.includes('team_weapons')}
          >
            지원화기
          </SelectButton>
          <SelectButton
            id="filter-category-vehicles"
            value="vehicles"
            onSelect={onSelectCategory}
            onDeselect={onDeselectCategory}
            checked={filters.category.includes('vehicles')}
          >
            차량
          </SelectButton>
        </CheckboxesContainer>
      </Category>
      <Category>
        <CategoryName>타입</CategoryName>
        <CheckboxesContainer>
          {Object.values(FILTER_TABLE).map((filter) => {
            return (
              <SelectButton
                id={`filter-${filter.en}`}
                value={filter.en}
                onSelect={onSelectFilter}
                onDeselect={onDeselectFilter}
                checked={filters.filter.includes(filter.en)}
              >
                {filter.ko}
              </SelectButton>
            );
          })}
        </CheckboxesContainer>
      </Category>
      {/* <div>
        <input placeholder="분대 이름으로 검색" />
      </div> */}
    </SquadListHeaderWrapper>
  );
};

export default SquadListHeader;

const SquadListHeaderWrapper = styled.div`
  padding: 20px;
  border: solid 1px #c4c4c4;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Category = styled.div`
  display: flex;
  word-break: keep-all;
`;

const CategoryName = styled.div`
  margin-right: 20px;
`;

const CheckboxesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
