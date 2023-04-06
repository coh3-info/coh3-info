import { useSelector } from 'react-redux';
import StatsList from '../StatList';
import type { Stat, StatGroup } from '../../../../types/for_components/squad_details_page/stat';
import type { RootState } from '../../../../state_store/store';

import type { WeaponStats } from '../../../../types/stats/weaponStats';
import styled from 'styled-components';
import WeaponSelector from './WeaponSelector';
import { createStatList } from '../../../../util/for_components/squad_details_page/stat';
import {
  createWeaponStatList1,
  createWeaponStatList2,
} from '../../../../util/for_components/squad_details_page/weaponStatList';

const WeaponStatsList = () => {
  const { bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => state.squadBookmarkManager);
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

  const statList1 = createWeaponStatList1([leftWeapon, rightWeapon]);
  const statList2 = createWeaponStatList2([leftWeapon, rightWeapon]);

  return (
    <WeaponStatsListWrapper>
      <WeaponSelectorContainer>
        <WeaponSelector options={weaponOptionsOnLeft} defaultValue={leftWeaponId} position="left" />
        <WeaponSelector options={weaponOptionsOnRight} defaultValue={rightWeaponId} position="right" />
      </WeaponSelectorContainer>
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
