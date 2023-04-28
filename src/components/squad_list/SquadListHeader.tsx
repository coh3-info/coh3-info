import styled from 'styled-components';
import SelectButton from '../common/buttons/SelectButton';
import { FILTER_TABLE } from '../../util/filter/filter';

import type { Filters } from './SquadList';

interface SquadListHeaderProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const SquadListHeader = ({ filters, setFilters }: SquadListHeaderProps) => {
  const resetFilter = () => {
    setFilters({ race: [], category: [], anti: [], role: [], vehicleClassification: [] });
  };
  //Race
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

  //Category
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

  //Anti
  const onSelectAnti = (value: string) => {
    const newFilters = {
      ...filters,
      anti: [...filters.anti, value],
    };

    setFilters(newFilters);
  };

  const onDeselectAnti = (value: string) => {
    const newFilters = {
      ...filters,
      anti: filters.anti.filter((filter) => filter !== value),
    };
    setFilters(newFilters);
  };

  //Role
  const onSelectRole = (value: string) => {
    const newFilters = {
      ...filters,
      role: [...filters.role, value],
    };

    setFilters(newFilters);
  };
  const onDeselectRole = (value: string) => {
    const newFilters = {
      ...filters,
      role: filters.role.filter((filter) => filter !== value),
    };
    setFilters(newFilters);
  };

  const onSelectVehicleClassification = (value: string) => {
    const newFilters = {
      ...filters,
      vehicleClassification: [...filters.vehicleClassification, value],
    };

    setFilters(newFilters);
  };
  const onDeselectVehicleClassification = (value: string) => {
    const newFilters = {
      ...filters,
      vehicleClassification: filters.vehicleClassification.filter((filter) => filter !== value),
    };
    setFilters(newFilters);
  };
  return (
    <SquadListHeaderWrapper>
      <FiltersContainer>
        <FilterCategory>
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
        </FilterCategory>
        <FilterCategory>
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
        </FilterCategory>
        <FilterCategory>
          <CategoryName>대응</CategoryName>
          <CheckboxesContainer>
            {Object.values(FILTER_TABLE)
              .filter((filter) => filter.type === 'anti')
              .map((filter) => {
                return (
                  <SelectButton
                    key={filter.en}
                    id={`filter-${filter.en}`}
                    value={filter.en}
                    onSelect={onSelectAnti}
                    onDeselect={onDeselectAnti}
                    checked={filters.anti.includes(filter.en)}
                  >
                    {filter.ko}
                  </SelectButton>
                );
              })}
          </CheckboxesContainer>
        </FilterCategory>
        <FilterCategory>
          <CategoryName>역할</CategoryName>
          <CheckboxesContainer>
            {Object.values(FILTER_TABLE)
              .filter((filter) => filter.type === 'role')
              .map((filter) => {
                return (
                  <SelectButton
                    key={filter.en}
                    id={`filter-${filter.en}`}
                    value={filter.en}
                    onSelect={onSelectRole}
                    onDeselect={onDeselectRole}
                    checked={filters.role.includes(filter.en)}
                  >
                    {filter.ko}
                  </SelectButton>
                );
              })}
          </CheckboxesContainer>
        </FilterCategory>
        <FilterCategory>
          <CategoryName>차량종류</CategoryName>
          <CheckboxesContainer>
            {Object.values(FILTER_TABLE)
              .filter((filter) => filter.type === 'vehicle-classification')
              .map((filter) => {
                return (
                  <SelectButton
                    key={filter.en}
                    id={`filter-${filter.en}`}
                    value={filter.en}
                    onSelect={onSelectVehicleClassification}
                    onDeselect={onDeselectVehicleClassification}
                    checked={filters.vehicleClassification.includes(filter.en)}
                  >
                    {filter.ko}
                  </SelectButton>
                );
              })}
          </CheckboxesContainer>
        </FilterCategory>
      </FiltersContainer>
      <ResetFilterButton onClick={resetFilter}>필터 초기화</ResetFilterButton>
      {/* <div>
        <input placeholder="분대 이름으로 검색" />
      </div> */}
    </SquadListHeaderWrapper>
  );
};

export default SquadListHeader;

const SquadListHeaderWrapper = styled.div`
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ResetFilterButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.main.border};
  border-radius: 4px;
  height: min-content;
  padding: 5px;
  font-size: 0.75rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.hoverBg};
  }
`;

const FilterCategory = styled.div`
  display: flex;
  word-break: keep-all;
`;

const CategoryName = styled.div`
  margin-right: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const CheckboxesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
