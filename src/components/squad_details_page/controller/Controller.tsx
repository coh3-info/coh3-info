import styled from 'styled-components';
import { getEntities } from '../../../util/squad';
import { useDispatch, useSelector } from 'react-redux';
import { selectEntity as _selectEntity } from '../../../state_store/slice/squad_bookmark_manager';
import getRaceMarkUrl from '../../../util/getRaceMarksUrl';

import resourceManpowerIcon from '../../../images/common/resource_manpower.png';
import resourceFuelIcon from '../../../images/common/resource_fuel.png';
import resourcePopulationIcon from '../../../images/common/resource_population.png';

import EntitySelector from './EntitySelector';

import type { RootState } from '../../../state_store/store';

import tempBarIcon from '../../../images/american/upgrades/bar_riflemen_us.png';
import tempGrenadIcon from '../../../images/american/abilities/grenade_riflemen_us.png';
import tempStickyBombIcon from '../../../images/american/abilities/sticky_bomb_riflemen_us.png';

type ControllerProps = {
  isLeft?: boolean;
};

const Controller = ({ isLeft = false }: ControllerProps) => {
  const dispatch = useDispatch();
  const bookmark = useSelector((state: RootState) => {
    if (isLeft) {
      return state.squadBookmarkManager.selectedBookmarkOnLeft;
    } else {
      return state.squadBookmarkManager.selectedBookmarkOnRight;
    }
  });

  const squad = bookmark?.squad;

  const selectEntity = (uniqueName: string) => {
    dispatch(_selectEntity({ uniqueName, isLeft }));
  };

  return (
    <ControllerWrapper>
      {squad !== undefined && bookmark !== undefined ? (
        <>
          <Info>
            <Portrait>
              <img src={squad.imageUrl.portrait} alt="초상화" />
            </Portrait>
            <BasicInfo>
              <div>
                <SquadName>
                  <SquadSymbol>
                    <img src={squad.imageUrl.icon} alt="분대 심볼" />
                  </SquadSymbol>
                  {squad.name}
                </SquadName>
                <div>{squad.type}</div>
              </div>
              <ResourcesContainer>
                <Resource>
                  <div>
                    <img src={resourceManpowerIcon} alt="manpower icon" />
                  </div>
                  {Math.round(
                    squad.entities.reduce((sum, entity) => {
                      return sum + entity.num * entity.entity.cost.manpower;
                    }, 0)
                  )}
                </Resource>
                <Resource>
                  <div>
                    <img src={resourceFuelIcon} alt="fuel icon" />
                  </div>
                  {Math.round(
                    squad.entities.reduce((sum, entity) => {
                      return sum + entity.num * entity.entity.cost.fuel;
                    }, 0)
                  )}
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
              <img src={getRaceMarkUrl(squad.race)} alt="진영 마크" />
            </RaceMark>
            <OptionName>업그레이드</OptionName>
            <Options>
              <ul>
                <li>
                  <OptionButton>
                    <img src={tempBarIcon} alt="bar" />
                  </OptionButton>
                </li>
              </ul>
            </Options>
            <OptionName>스킬</OptionName>
            <Options>
              <ul>
                <li>
                  <OptionButton>
                    <img src={tempGrenadIcon} alt="bar" />
                  </OptionButton>
                </li>
                <li>
                  <OptionButton>
                    <img src={tempStickyBombIcon} alt="bar" />
                  </OptionButton>
                </li>
              </ul>
            </Options>
            <OptionName>건설</OptionName>
            <Options>
              <ul></ul>
            </Options>
          </Info>
          <SelectorsContainer>
            <EntitySelector
              entities={getEntities(squad)}
              value={bookmark.selectedEntityUniqueName}
              selectEntity={selectEntity}
            />
            <MockSelecter>무기 선택</MockSelecter>
          </SelectorsContainer>
        </>
      ) : (
        <EmptyText>분대를 선택해 주세요.</EmptyText>
      )}
    </ControllerWrapper>
  );
};

export default Controller;

const ControllerWrapper = styled.div`
  width: 100%;
  border: solid 1px #979797;
  border-radius: 6px;
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
  font-weight: 500;
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
  height: 36px;
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
  border: solid 1px #c4c4c4;
  border-radius: 4px;
  background-color: transparent;

  &:hover {
    background-color: #dfdfdf;
  }

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
  border: solid 1px #979797;
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

const EmptyText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #979797;
  font-size: 24px;
`;
