import styled from 'styled-components';

import resourceManpowerIcon from '../../../images/common/resource_manpower.png';
import resourceFuelIcon from '../../../images/common/resource_fuel.png';
import resourcePopulationIcon from '../../../images/common/resource_population.png';

import tempPortrait from '../../../images/american/infantiry/riflemen_us/riflemen_us.png';
import tempSquadSymbol from '../../../images/american/infantiry/riflemen_us/riflemen_us_symbol.png';
import tempRaceMark from '../../../images/common/american.png';

const Controller = () => {
  return (
    <ControllerWrapper>
      <Info>
        <Portrait>
          <img src={tempPortrait} alt="초상화" />
        </Portrait>
        <BasicInfo>
          <div>
            <SquadName>
              <SquadSymbol>
                <img src={tempSquadSymbol} alt="분대 심볼" />
              </SquadSymbol>
              소총병 분대
            </SquadName>
            <div>보병</div>
          </div>
          <ResourcesContainer>
            <Resource>
              <div>
                <img src={resourceManpowerIcon} alt="manpower icon" />
              </div>
              200
            </Resource>
            <Resource>
              <div>
                <img src={resourceFuelIcon} alt="fuel icon" />
              </div>
              100
            </Resource>
            <Resource>
              <div>
                <img src={resourcePopulationIcon} alt="population icon" />
              </div>
              10
            </Resource>
          </ResourcesContainer>
        </BasicInfo>
        <RaceMark>
          <img src={tempRaceMark} alt="진영 마크" />
        </RaceMark>
        <OptionName>업그레이드</OptionName>
        <Options>
          <ul>
            <li>
              <OptionButton>업그레이드1</OptionButton>
            </li>
          </ul>
        </Options>
        <OptionName>스킬</OptionName>
        <Options>
          <ul>
            <li>
              <OptionButton>스킬1</OptionButton>
            </li>
            <li>
              <OptionButton>스킬2</OptionButton>
            </li>
            <li>
              <OptionButton>스킬3</OptionButton>
            </li>
          </ul>
        </Options>
        <OptionName>건설</OptionName>
        <Options>
          <ul>
            <li>
              <OptionButton>건설1</OptionButton>
            </li>
            <li>
              <OptionButton>건설2</OptionButton>
            </li>
          </ul>
        </Options>
      </Info>
      <SelectorsContainer>
        <MockSelecter>분대구성원 선택</MockSelecter>
        <MockSelecter>무기 선택</MockSelecter>
      </SelectorsContainer>
    </ControllerWrapper>
  );
};

export default Controller;

const ControllerWrapper = styled.div`
  width: 100%;
  max-width: 530px;
  border: solid 1px #000;
  padding: 16px;
  font-size: 0.875rem;
`;

const Info = styled.div`
  display: grid;
  grid-template: repeat(4, max-content) / max-content 1fr 1fr max-content;
  column-gap: 20px;
  row-gap: 10px;
`;

const Portrait = styled.div`
  width: 100px;
  height: 100px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const BasicInfo = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 4px;
`;

const SquadSymbol = styled.div`
  width: 36px;
  height: 36px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const SquadName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const ResourcesContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Resource = styled.div`
  display: flex;
  gap: 4px;

  > div {
    width: 20px;
    height: 20px;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

const RaceMark = styled.div`
  width: 60px;
  height: 60px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const OptionName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Options = styled.div`
  grid-column: span 3;

  > ul {
    display: flex;
    gap: 10px;
  }
`;

const OptionButton = styled.button`
  width: 36px;
  height: 36px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const SelectorsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const MockSelecter = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 8px;
  border: solid 1px #000;
  display: flex;
  align-items: center;
`;
