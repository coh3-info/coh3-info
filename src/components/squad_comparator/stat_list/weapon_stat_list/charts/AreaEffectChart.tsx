import styled from 'styled-components';
import { getAreaDamageReadingsByDistance, getRPMReadingsByDistance } from '../../../../../util/calculator/weapon';

import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';

interface AreaEffectChartProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
}

const AreaEffectChart = ({ weapon1, weapon2 }: AreaEffectChartProps) => {
  let weapon1AreaDamageReadings: number[] = [];
  let weapon2AreaDamageReadings: number[] = [];
  if (weapon1 !== undefined) {
    weapon1AreaDamageReadings = getAreaDamageReadingsByDistance(weapon1);
  }

  if (weapon2 !== undefined) {
    weapon2AreaDamageReadings = getAreaDamageReadingsByDistance(weapon2);
  }

  return (
    <AreaEffectChartWrapper>
      <LineChartOfTwo
        labels={(weapon1AreaDamageReadings.length > weapon2AreaDamageReadings.length
          ? weapon1AreaDamageReadings
          : weapon2AreaDamageReadings
        ).map((_, i) => i / 100)}
        data1={{ label: weapon1?.id ?? '', data: weapon1AreaDamageReadings }}
        data2={{ label: weapon2?.id ?? '', data: weapon2AreaDamageReadings }}
        axesOptions={{
          x: {
            title: '폭발중심지로부터의 거리',
          },
          y: {
            suggestedMax: 20,
            title: '범위피해량',
          },
        }}
      />
    </AreaEffectChartWrapper>
  );
};

export default AreaEffectChart;

const AreaEffectChartWrapper = styled.div``;
