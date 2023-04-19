import styled from 'styled-components';
import { getAccuracyReadingsByDistance } from '../../../../../util/calculator/weapon';

import SelectButton from '../../../../common/buttons/SelectButton';
import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';

import type { EntityStats } from '../../../../../types/stats/entityStats';
import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import type { AccuracyChartOption } from '../../../../../types/for_components/squad_comparator/weaponStatsChart';

interface AccuracyChartProps {
  data1: {
    weapon: WeaponStats | undefined;
    entity: EntityStats | undefined;
  };
  data2: {
    weapon: WeaponStats | undefined;
    entity: EntityStats | undefined;
  };
  option: AccuracyChartOption;
  setOption: (newOption: AccuracyChartOption) => void;
}

const AccuracyChart = ({ data1, data2, option, setOption }: AccuracyChartProps) => {
  const { isAppliedMoving, isAppliedTargetSize } = option;
  let weapon1AccuracyReadings: number[] = [];
  let weapon2AccuracyReadings: number[] = [];

  if (data1.weapon !== undefined && data2.entity !== undefined) {
    const options = {
      target: isAppliedTargetSize ? data2.entity : undefined,
      isMoving: isAppliedMoving,
    };

    weapon1AccuracyReadings = getAccuracyReadingsByDistance(data1.weapon, options).map((accuracy) => accuracy * 100);
  }

  if (data2.weapon !== undefined && data1.entity !== undefined) {
    const options = {
      target: isAppliedTargetSize ? data1.entity : undefined,
      isMoving: isAppliedMoving,
    };
    weapon2AccuracyReadings = getAccuracyReadingsByDistance(data2.weapon, options).map((accuracy) => accuracy * 100);
  }

  const onToggleTargetSize = () => {
    const newOption: AccuracyChartOption = {
      ...option,
      isAppliedTargetSize: !isAppliedTargetSize,
    };

    setOption(newOption);
  };

  const onToggleMoving = () => {
    const newOption: AccuracyChartOption = {
      ...option,
      isAppliedMoving: !isAppliedMoving,
    };

    setOption(newOption);
  };

  return (
    <AccuracyChartWrapper>
      <ChartHeader>
        <SelectButtonContainer>
          <SelectButton id="apply-target-size-to-accuracy" onSelect={onToggleTargetSize} checked={isAppliedTargetSize}>
            피격률 적용
          </SelectButton>
          <SelectButton id="apply-moving-to-accuracy" onSelect={onToggleMoving} checked={isAppliedMoving}>
            이동중
          </SelectButton>
        </SelectButtonContainer>
      </ChartHeader>
      <LineChartOfTwo
        labels={(weapon1AccuracyReadings.length > weapon2AccuracyReadings.length
          ? weapon1AccuracyReadings
          : weapon2AccuracyReadings
        ).map((_, i) => i)}
        data1={{ label: data1.weapon?.id ?? '', data: weapon1AccuracyReadings }}
        data2={{ label: data2.weapon?.id ?? '', data: weapon2AccuracyReadings }}
        axesOptions={{
          x: {
            title: '거리',
          },
          y: {
            suggestedMax: 100,
            title: '명중률(%)',
          },
        }}
      />
    </AccuracyChartWrapper>
  );
};

export default AccuracyChart;

const AccuracyChartWrapper = styled.div``;

const ChartHeader = styled.div`
  display: grid;
  grid-template: repeat(2, max-content) / repeat(2, max-content);
  column-gap: 10px;
`;

const SelectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
