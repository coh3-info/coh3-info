import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import DPSChart from './DPSChart';
import RPMChart from './RPMChart';
import AccuracyChart from './AccuracyChart';
import PenetrationChart from './PenetrationChart';

import type { RootState } from '../../../../../state_store/store';
import type {
  AccuracyChartOption,
  DPSChartOption,
  PenetrationChartOption,
  RPMChartOption,
  WeaponStatsChartOptions,
} from '../../../../../types/for_components/squad_comparator/weaponStatsChart';
import AreaEffectChart from './AreaEffectChart';

const WeaponStatsChartsContainer = () => {
  const [chartName, setChartName] = useState<'rpm' | 'accuracy' | 'dps' | 'penetration' | 'area_effect'>('dps');
  const [chartOptions, setChartOptions] = useState<WeaponStatsChartOptions>({
    dps: { isAppliedMoving: false, selectedArmor: 'none' },
    rpm: { isAppliedMoving: false },
    accuracy: { isAppliedTargetSize: true, isAppliedMoving: false },
    penetration: { selected: 'penetration' },
  });

  const { bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => {
    const { bookmarkList, bookmarkIdOnLeft, bookmarkIdOnRight } = state.squadBookmarkManager;
    const bookmarkOnLeft = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnLeft);
    const bookmarkOnRight = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnRight);
    return { bookmarkOnLeft, bookmarkOnRight };
  });

  const leftEntityId = bookmarkOnLeft?.selectedEntityId ?? '';
  const rightEntityId = bookmarkOnRight?.selectedEntityId ?? '';
  const leftWeaponId = bookmarkOnLeft?.selectedWeaponId ?? '';
  const rightWeaponId = bookmarkOnRight?.selectedWeaponId ?? '';

  const leftEntity = bookmarkOnLeft?.unit.entities.find((entity) => entity.id === leftEntityId);
  const rightEntity = bookmarkOnRight?.unit.entities.find((entity) => entity.id === rightEntityId);
  const leftWeapon = bookmarkOnLeft?.unit.weapons.find((weapon) => weapon.id === leftWeaponId);
  const rightWeapon = bookmarkOnRight?.unit.weapons.find((weapon) => weapon.id === rightWeaponId);

  const setDPSChartOption = (newOption: DPSChartOption) => {
    setChartOptions({ ...chartOptions, dps: newOption });
  };

  const setRPMChartOption = (newOption: RPMChartOption) => {
    setChartOptions({ ...chartOptions, rpm: newOption });
  };

  const setAccuracyChartOption = (newOption: AccuracyChartOption) => {
    setChartOptions({ ...chartOptions, accuracy: newOption });
  };

  const setPenetrationChartOption = (newOption: PenetrationChartOption) => {
    setChartOptions({ ...chartOptions, penetration: newOption });
  };

  const chartsTable = {
    dps: (
      <DPSChart
        data1={{ weapon: leftWeapon, entity: leftEntity }}
        data2={{ weapon: rightWeapon, entity: rightEntity }}
        option={chartOptions.dps}
        setOption={setDPSChartOption}
      />
    ),
    rpm: (
      <RPMChart weapon1={leftWeapon} weapon2={rightWeapon} option={chartOptions.rpm} setOption={setRPMChartOption} />
    ),
    accuracy: (
      <AccuracyChart
        data1={{ weapon: leftWeapon, entity: leftEntity }}
        data2={{ weapon: rightWeapon, entity: rightEntity }}
        option={chartOptions.accuracy}
        setOption={setAccuracyChartOption}
      />
    ),
    penetration: (
      <PenetrationChart
        data1={{ weapon: leftWeapon, entity: leftEntity }}
        data2={{ weapon: rightWeapon, entity: rightEntity }}
        option={chartOptions.penetration}
        setOption={setPenetrationChartOption}
      />
    ),
    area_effect: <AreaEffectChart weapon1={leftWeapon} weapon2={rightWeapon} />,
  };
  return (
    <WeaponStatsChartsContainerWrapper>
      <ChartNav>
        <NavButton onClick={() => setChartName('dps')} isSelected={chartName === 'dps'}>
          DPS
        </NavButton>
        <NavButton onClick={() => setChartName('rpm')} isSelected={chartName === 'rpm'}>
          RPM
        </NavButton>
        <NavButton onClick={() => setChartName('accuracy')} isSelected={chartName === 'accuracy'}>
          명중률
        </NavButton>
        <NavButton onClick={() => setChartName('penetration')} isSelected={chartName === 'penetration'}>
          관통력
        </NavButton>
        <NavButton onClick={() => setChartName('area_effect')} isSelected={chartName === 'area_effect'}>
          범위피해
        </NavButton>
      </ChartNav>
      <ChartContainter>{chartsTable[chartName]}</ChartContainter>
    </WeaponStatsChartsContainerWrapper>
  );
};

export default WeaponStatsChartsContainer;

const WeaponStatsChartsContainerWrapper = styled.div`
  margin-bottom: 10px;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 6px;
`;

const ChartContainter = styled.div`
  padding: 20px;
`;

const ChartNav = styled.nav`
  border-bottom: solid 2px ${({ theme }) => theme.colors.main.line};
  padding: 0 20px;
  display: flex;
  gap: 10px;
`;

const NavButton = styled.button<{ isSelected: boolean }>`
  background-color: transparent;
  border: none;
  padding: 10px 5px;

  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ isSelected }) => (isSelected ? 'tomato' : 'transparent')};
    position: absolute;
    left: 0;
    bottom: -2px;
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.main.red};
  }
`;
