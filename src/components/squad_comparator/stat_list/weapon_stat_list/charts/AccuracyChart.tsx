import styled from 'styled-components';
import { useState } from 'react';
import { getAccuracyReadingsByDistance } from '../../../../../util/calculator/weapon';

import SelectButton from '../../../../common/buttons/SelectButton';
import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';

import type { EntityStats } from '../../../../../types/stats/entityStats';
import type { WeaponStats } from '../../../../../types/stats/weaponStats';

interface AccuracyChartProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
  entity1: EntityStats | undefined;
  entity2: EntityStats | undefined;
}

const AccuracyChart = ({ weapon1, weapon2, entity1, entity2 }: AccuracyChartProps) => {
  const [isAppliedTargetSize, setIsAppliedTargetSize] = useState(true);
  const [isAppliedMoving, setIsAppliedMoving] = useState(false);
  let weapon1AccuracyReadings: number[] = [];
  let weapon2AccuracyReadings: number[] = [];

  if (weapon1 !== undefined && entity2 !== undefined) {
    const options = {
      target: isAppliedTargetSize ? entity2 : undefined,
      isMoving: isAppliedMoving,
    };

    weapon1AccuracyReadings = getAccuracyReadingsByDistance(weapon1, options).map((accuracy) => accuracy * 100);
  }

  if (weapon2 !== undefined && entity1 !== undefined) {
    const options = {
      target: isAppliedTargetSize ? entity1 : undefined,
      isMoving: isAppliedMoving,
    };
    weapon2AccuracyReadings = getAccuracyReadingsByDistance(weapon2, options).map((accuracy) => accuracy * 100);
  }

  const onApplyTargetSize = () => {
    setIsAppliedTargetSize((prev) => !prev);
  };

  const onApplyMoving = () => {
    setIsAppliedMoving((prev) => !prev);
  };

  return (
    <AccuracyChartWrapper>
      <ChartHeader>
        <SelectButtonContainer>
          <SelectButton id="apply-target-size-to-accuracy" onSelect={onApplyTargetSize} checked={isAppliedTargetSize}>
            피격률 적용
          </SelectButton>
          <SelectButton id="apply-moving-to-accuracy" onSelect={onApplyMoving} checked={isAppliedMoving}>
            이동중
          </SelectButton>
        </SelectButtonContainer>
      </ChartHeader>
      <LineChartOfTwo
        labels={(weapon1AccuracyReadings.length > weapon2AccuracyReadings.length
          ? weapon1AccuracyReadings
          : weapon2AccuracyReadings
        ).map((_, i) => i)}
        data1={{ label: weapon1?.id ?? '', data: weapon1AccuracyReadings }}
        data2={{ label: weapon2?.id ?? '', data: weapon2AccuracyReadings }}
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

const AccuracyChartWrapper = styled.div`
  border: solid 1px #979797;
  border-radius: 6px;
  padding: 20px;
`;

const ChartHeader = styled.div`
  display: grid;
  grid-template: repeat(2, max-content) / repeat(2, max-content);
  column-gap: 10px;
`;

const SelectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
