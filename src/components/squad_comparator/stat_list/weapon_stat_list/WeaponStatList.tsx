import { useSelector } from 'react-redux';
import StatsList from '../StatList';
import styled from 'styled-components';
import WeaponSelector from './WeaponSelector';
import {
  createWeaponStatList1,
  createWeaponStatList2,
} from '../../../../util/for_components/squad_comparator/weaponStatList';

import type { RootState } from '../../../../state_store/store';
import RPMComparator from './charts/RPMChart';
import AccuracyComparator from './charts/AccuracyChart';
import { useState } from 'react';
import DPSComparator from './charts/DPSChart';
import PenetrationComparator from './charts/PenetrationChart';
import SelectButton from '../../../common/buttons/SelectButton';

const WeaponStatsList = () => {
  const [comparator, setComparator] = useState<'rpm' | 'accuracy' | 'dps' | 'penetration'>('dps');
  const [isBriefly, setIsBriefly] = useState(true);
  const { bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => state.squadBookmarkManager);

  const leftEntityId = bookmarkOnLeft?.selectedEntityId ?? '';
  const rightEntityId = bookmarkOnRight?.selectedEntityId ?? '';
  const leftWeaponId = bookmarkOnLeft?.selectedWeaponId ?? '';
  const rightWeaponId = bookmarkOnRight?.selectedWeaponId ?? '';

  const leftEntity = bookmarkOnLeft?.unit.entities.find((entity) => entity.id === leftEntityId);
  const rightEntity = bookmarkOnRight?.unit.entities.find((entity) => entity.id === rightEntityId);
  const leftWeapon = bookmarkOnLeft?.unit.weapons.find((weapon) => weapon.id === leftWeaponId);
  const rightWeapon = bookmarkOnRight?.unit.weapons.find((weapon) => weapon.id === rightWeaponId);

  const [weaponOptionsOnLeft, weaponOptionsOnRight] = [bookmarkOnLeft, bookmarkOnRight].map((bookmark) => {
    return (
      bookmark?.unit.weapons.map((weapon) => {
        return { name: weapon.id, value: weapon.id };
      }) ?? []
    );
  });

  const statList1 = createWeaponStatList1([leftWeapon, rightWeapon], isBriefly);
  const statList2 = createWeaponStatList2([leftWeapon, rightWeapon], isBriefly);

  const comparatorsTable = {
    dps: (
      <DPSComparator
        data1={{ weapon: leftWeapon, entity: leftEntity }}
        data2={{ weapon: rightWeapon, entity: rightEntity }}
      />
    ),
    rpm: <RPMComparator weapon1={leftWeapon} weapon2={rightWeapon} />,
    accuracy: (
      <AccuracyComparator weapon1={leftWeapon} weapon2={rightWeapon} entity1={leftEntity} entity2={rightEntity} />
    ),
    penetration: (
      <PenetrationComparator
        data1={{ weapon: leftWeapon, entity: leftEntity }}
        data2={{ weapon: rightWeapon, entity: rightEntity }}
      />
    ),
  };
  return (
    <WeaponStatsListWrapper>
      <Title>무기</Title>
      <WeaponSelectorContainer>
        <WeaponSelector options={weaponOptionsOnLeft} defaultValue={leftWeaponId} position="left" />
        <WeaponSelector options={weaponOptionsOnRight} defaultValue={rightWeaponId} position="right" />
      </WeaponSelectorContainer>
      <ComparatorNav>
        <NavButton onClick={() => setComparator('dps')} isSelected={comparator === 'dps'}>
          DPS
        </NavButton>
        <NavButton onClick={() => setComparator('rpm')} isSelected={comparator === 'rpm'}>
          RPM
        </NavButton>
        <NavButton onClick={() => setComparator('accuracy')} isSelected={comparator === 'accuracy'}>
          명중률
        </NavButton>

        <NavButton onClick={() => setComparator('penetration')} isSelected={comparator === 'penetration'}>
          관통력
        </NavButton>
      </ComparatorNav>

      <ComparatorContainter>{comparatorsTable[comparator]}</ComparatorContainter>

      <StatsList statList1={statList1} statList2={statList2} />
      <MoreButtonContainer>
        <SelectButton type="radio" id="weapon-stat-list-brief" onSelect={() => setIsBriefly(true)} checked={isBriefly}>
          간략히
        </SelectButton>
        <SelectButton type="radio" id="weapon-stat-list-more" onSelect={() => setIsBriefly(false)} checked={!isBriefly}>
          자세히
        </SelectButton>
      </MoreButtonContainer>
    </WeaponStatsListWrapper>
  );
};

export default WeaponStatsList;

const WeaponStatsListWrapper = styled.section`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

const WeaponSelectorContainer = styled.div`
  margin: 10px 0 10px;
  display: flex;
  gap: 10px;
`;

const ComparatorContainter = styled.div`
  margin-bottom: 10px;
`;

const ComparatorNav = styled.nav`
  border: solid 1px #979797;
  border-radius: 6px;
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;

const NavButton = styled.button<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#dfdfdf' : 'transparent')};
  border: solid 1px #979797;
  border-radius: 3px;
  padding: 5px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const MoreButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;

  > button {
    background-color: transparent;
    border: none;
  }
`;
