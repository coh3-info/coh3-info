import { useSelector } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import {
  createWeaponStatList1,
  createWeaponStatList2,
} from '../../../../util/for_components/squad_comparator/weaponStatList';

import StatList from '../StatList';
import WeaponSelector from './WeaponSelector';
import SelectButton from '../../../common/buttons/SelectButton';
import WeaponStatsChartsContainer from './charts/WeaponStatsChartsContainer';

import type { RootState } from '../../../../state_store/store';

const WeaponStatList = () => {
  const [isBriefly, setIsBriefly] = useState(true);
  const { bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => {
    const { bookmarkList, bookmarkIdOnLeft, bookmarkIdOnRight } = state.squadBookmarkManager;
    const bookmarkOnLeft = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnLeft);
    const bookmarkOnRight = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnRight);
    return { bookmarkOnLeft, bookmarkOnRight };
  });

  const leftWeaponId = bookmarkOnLeft?.selectedWeaponId ?? '';
  const rightWeaponId = bookmarkOnRight?.selectedWeaponId ?? '';

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

  return (
    <WeaponStatListWrapper>
      <Title>무기</Title>
      <WeaponSelectorContainer>
        <WeaponSelector options={weaponOptionsOnLeft} defaultValue={leftWeaponId} position="left" />
        <WeaponSelector options={weaponOptionsOnRight} defaultValue={rightWeaponId} position="right" />
      </WeaponSelectorContainer>
      <WeaponStatsChartsContainer />
      <StatList statList1={statList1} statList2={statList2} />
      <MoreButtonContainer>
        <SelectButton type="radio" id="weapon-stat-list-brief" onSelect={() => setIsBriefly(true)} checked={isBriefly}>
          간략히
        </SelectButton>
        <SelectButton type="radio" id="weapon-stat-list-more" onSelect={() => setIsBriefly(false)} checked={!isBriefly}>
          자세히
        </SelectButton>
      </MoreButtonContainer>
    </WeaponStatListWrapper>
  );
};

export default WeaponStatList;

const WeaponStatListWrapper = styled.section`
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

const MoreButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;

  > button {
    background-color: transparent;
    border: none;
  }
`;
