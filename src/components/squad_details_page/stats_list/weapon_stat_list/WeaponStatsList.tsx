import { useSelector } from 'react-redux';
import StatsList from '../StatList';
import styled from 'styled-components';
import WeaponSelector from './WeaponSelector';
import {
  createWeaponStatList1,
  createWeaponStatList2,
} from '../../../../util/for_components/squad_details_page/weaponStatList';

import type { RootState } from '../../../../state_store/store';
import RPMComparator from './comparator/RPMComparator';
import AccuracyComparator from './comparator/AccuracyComparator';
import { useState } from 'react';
import DPSComparator from './comparator/DPSComparator';
import PenetrationComparator from './comparator/PenetrationComparator';

const WeaponStatsList = () => {
  const [comparator, setComparator] = useState<'rpm' | 'accuracy' | 'dps' | 'penetration'>('dps');
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

  const statList1 = createWeaponStatList1([leftWeapon, rightWeapon]);
  const statList2 = createWeaponStatList2([leftWeapon, rightWeapon]);

  const comparatorsTable = {
    dps: <DPSComparator weapon1={leftWeapon} weapon2={rightWeapon} />,
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
    </WeaponStatsListWrapper>
  );
};

export default WeaponStatsList;

const WeaponStatsListWrapper = styled.section`
  margin-top: 20px;
`;

const WeaponSelectorContainer = styled.div`
  margin-bottom: 10px;
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
