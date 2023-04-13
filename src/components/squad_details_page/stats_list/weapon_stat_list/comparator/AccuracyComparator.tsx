import styled from 'styled-components';
import { getAccuracyReadingsByDistance } from '../../../../../util/calculator/weapon';
import AccuracyChartOfTwoWeapons from '../../../../common/charts/AccuracyChartOfTwoWeapons';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import EntityStats from '../../../../../types/stats/entityStats';
import SelectButton from '../../../../common/buttons/SelectButton';
import { useState } from 'react';

interface AccuracyComparatorProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
  entity1: EntityStats | undefined;
  entity2: EntityStats | undefined;
}

const AccuracyComparator = ({ weapon1, weapon2, entity1, entity2 }: AccuracyComparatorProps) => {
  const [isAppliedTargetSize, setIsAppliedTargetSize] = useState(true);
  const [isAppliedMoving, setIsAppliedMoving] = useState(false);
  let weapon1AccuracyReadings: number[] = [];
  let weapon2AccuracyReadings: number[] = [];

  if (weapon1 !== undefined && entity2 !== undefined) {
    const multipliers = {
      targetSize: isAppliedTargetSize ? entity2.targetSize : undefined,
      moving: isAppliedMoving
        ? {
            canFireWhileMoving: weapon1.moving.canFireWhileMoving,
            accuracyMultiplier: weapon1.moving.accuracyMultiplier,
          }
        : undefined,
    };

    weapon1AccuracyReadings = getAccuracyReadingsByDistance(weapon1, multipliers).map((accuracy) => accuracy * 100);
  }

  if (weapon2 !== undefined && entity1 !== undefined) {
    const multipliers = {
      targetSize: isAppliedTargetSize ? entity1.targetSize : undefined,
      moving: isAppliedMoving
        ? {
            canFireWhileMoving: weapon2.moving.canFireWhileMoving,
            accuracyMultiplier: weapon2.moving.accuracyMultiplier,
          }
        : undefined,
    };
    weapon2AccuracyReadings = getAccuracyReadingsByDistance(weapon2, multipliers).map((accuracy) => accuracy * 100);
  }

  const onApplyTargetSize = () => {
    setIsAppliedTargetSize((prev) => !prev);
  };

  const onApplyMoving = () => {
    setIsAppliedMoving((prev) => !prev);
  };

  return (
    <AccuracyComparatorWrapper>
      <ComparatorHeader>
        <SelectButtonContainer>
          <SelectButton id="apply-target-size-to-accuracy" onSelect={onApplyTargetSize} checked={isAppliedTargetSize}>
            피격률 적용
          </SelectButton>
          <SelectButton id="apply-moving-to-accuracy" onSelect={onApplyMoving} checked={isAppliedMoving}>
            이동중
          </SelectButton>
        </SelectButtonContainer>
      </ComparatorHeader>
      <AccuracyChartOfTwoWeapons
        data1={{ label: weapon1?.id ?? '', data: weapon1AccuracyReadings }}
        data2={{ label: weapon2?.id ?? '', data: weapon2AccuracyReadings }}
      />
    </AccuracyComparatorWrapper>
  );
};

export default AccuracyComparator;

const AccuracyComparatorWrapper = styled.div`
  border: solid 1px #979797;
  border-radius: 6px;
  padding: 20px;
`;

const ComparatorHeader = styled.div`
  display: grid;
  grid-template: repeat(2, max-content) / repeat(2, max-content);
  column-gap: 10px;
`;

const SelectorCategory = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
`;

const SelectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
