import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectEntity as _selectEntity,
  selectWeapon as _selectWeapon,
} from '../../../state_store/slice/squad_bookmark_manager';
import getRaceMarkUrl from '../../../util/getRaceMarksUrl';
import ResourceCard from './ResourceCard';

import type { RootState } from '../../../state_store/store';

import tempBarIcon from '../../../images/american/upgrades/bar_riflemen_us.png';

const SQUAD_CATEGORY_KO_TABLE = {
  infantry: '보병',
  team_weapons: '지원화기',
  vehicles: '차량',
  '': '',
};

interface ControllerProps {
  isLeft?: boolean;
}

const Controller = ({ isLeft = false }: ControllerProps) => {
  const bookmark = useSelector((state: RootState) => {
    if (isLeft) {
      return state.squadBookmarkManager.bookmarkOnLeft;
    } else {
      return state.squadBookmarkManager.bookmarkOnRight;
    }
  });

  const squad = bookmark?.unit.squad;

  return (
    <ControllerWrapper>
      {squad !== undefined && bookmark !== undefined ? (
        <>
          <Info>
            <Portrait>
              <img src={squad.imageUrl.icon} alt="초상화" />
            </Portrait>
            <BasicInfo>
              <div>
                <SquadTitle>
                  <SquadSymbol>
                    <img src={squad.imageUrl.symbolIcon} alt="분대 심볼" />
                  </SquadSymbol>
                  <SquadNameContainer>
                    <SquadNameKO>{squad.nameKO}</SquadNameKO>
                    <SquadName>{squad.name}</SquadName>
                  </SquadNameContainer>
                </SquadTitle>
                <div>{SQUAD_CATEGORY_KO_TABLE[squad.category]}</div>
              </div>
              <ResourcesContainer>
                <ResourceCard type="manpower" value={squad.cost.manpower} />
                <ResourceCard type="fuel" value={squad.cost.fuel} />
                <ResourceCard type="population" value={squad.cost.population} />
              </ResourcesContainer>
            </BasicInfo>
            <RaceMark>
              <img src={getRaceMarkUrl(squad.race)} alt="진영 마크" />
            </RaceMark>
            {/* <OptionName>업그레이드</OptionName>
            <Options>
              <ul>
                <li>
                  <OptionButton>
                    <img src={tempBarIcon} alt="bar" />
                  </OptionButton>
                </li>
              </ul>
            </Options> */}
          </Info>
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
`;

const Portrait = styled.div`
  width: 80px;
  height: 80px;

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

const SquadTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-weight: 500;
`;

const SquadName = styled.div`
  font-size: 0.75rem;
  color: #979797;
`;

const SquadNameContainer = styled.div``;

const SquadNameKO = styled.div`
  word-break: keep-all;
`;

const ResourcesContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const RaceMark = styled.div`
  width: 40px;
  height: 40px;

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

const EmptyText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #979797;
  font-size: 24px;
`;
