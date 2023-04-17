import styled from 'styled-components';
import { getRPMReadingsByDistance } from '../../../../../util/calculator/weapon';
import { useState } from 'react';

import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';
import SelectButton from '../../../../common/buttons/SelectButton';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';

interface RPMComparatorProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
}

const RPMComparator = ({ weapon1, weapon2 }: RPMComparatorProps) => {
  const [isAppliedMoving, setIsAppliedMoving] = useState(false);
  let weapon1RPMReadings: number[] = [];
  let weapon2RPMReadings: number[] = [];
  if (weapon1 !== undefined) {
    weapon1RPMReadings = getRPMReadingsByDistance(weapon1, isAppliedMoving);
  }

  if (weapon2 !== undefined) {
    weapon2RPMReadings = getRPMReadingsByDistance(weapon2, isAppliedMoving);
  }

  const onApplyMoving = () => {
    setIsAppliedMoving((prev) => !prev);
  };

  return (
    <RPMComparatorWrapper>
      <ComparatorHeader>
        <SelectButtonContainer>
          <SelectButton id="apply-moving-to-accuracy" onSelect={onApplyMoving} checked={isAppliedMoving}>
            이동중
          </SelectButton>
        </SelectButtonContainer>
      </ComparatorHeader>
      <LineChartOfTwo
        labels={(weapon1RPMReadings.length > weapon2RPMReadings.length ? weapon1RPMReadings : weapon2RPMReadings).map(
          (_, i) => i
        )}
        data1={{ label: weapon1?.id ?? '', data: weapon1RPMReadings }}
        data2={{ label: weapon2?.id ?? '', data: weapon2RPMReadings }}
        axesOptions={{
          x: {
            title: '거리',
          },
          y: {
            suggestedMax: 20,
            title: 'RPM',
          },
        }}
      />
    </RPMComparatorWrapper>
  );
};

export default RPMComparator;

const RPMComparatorWrapper = styled.div`
  border: solid 1px #979797;
  border-radius: 6px;
  padding: 20px;
`;

const ComparatorHeader = styled.div`
  display: grid;
  grid-template: repeat(2, max-content) / repeat(2, max-content);
  column-gap: 10px;
`;

const SelectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
