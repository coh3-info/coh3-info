import styled from 'styled-components';

const FUEL_ICON_URL = '/images/icons/common/resources/resource_fuel.png';
const MANPOWER_ICON_URL = '/images/icons/common/resources/resource_manpower.png';
const POPULATION_ICON_URL = '/images/icons/common/resources/resource_population.png';
const ICON_URL = {
  fuel: FUEL_ICON_URL,
  manpower: MANPOWER_ICON_URL,
  population: POPULATION_ICON_URL,
};

interface ResourceCardProps {
  type: 'manpower' | 'fuel' | 'population';
  value: number;
}

const ResourceCard = ({ type, value }: ResourceCardProps) => {
  return (
    <ResourceCardWrapper isHidden={value === 0}>
      <ImageContainer>
        <img src={ICON_URL[type]} alt={`${type} icon`} />
      </ImageContainer>
      {value}
    </ResourceCardWrapper>
  );
};

export default ResourceCard;

const ResourceCardWrapper = styled.div<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  gap: 4px;
`;

const ImageContainer = styled.div`
  width: 20px;
  height: 20px;

  > img {
    width: 100%;
    height: 100%;
  }
`;
