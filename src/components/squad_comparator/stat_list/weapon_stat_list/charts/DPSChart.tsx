import styled from 'styled-components';
import { useState } from 'react';
import { getDPSReadingsByDistance } from '../../../../../util/calculator/weapon';

import SelectButton from '../../../../common/buttons/SelectButton';
import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import type { EntityStats } from '../../../../../types/stats/entityStats';

const RADIO_NAME = 'dps-radio-buton';

interface DPSChartProps {
  data1: {
    entity: EntityStats | undefined;
    weapon: WeaponStats | undefined;
  };

  data2: {
    entity: EntityStats | undefined;
    weapon: WeaponStats | undefined;
  };
}

const DPSChart = ({ data1, data2 }: DPSChartProps) => {
  const [isAppliedMoving, setIsAppliedMoving] = useState(false);
  const [selectedArmor, setSlectedArmor] = useState('none');
  let weapon1DPSReadings: number[] = [];
  let weapon2DPSReadings: number[] = [];
  if (data1.weapon !== undefined && data2.entity !== undefined) {
    weapon1DPSReadings = getDPSReadingsByDistance(data1.weapon, {
      target:
        selectedArmor === 'front' || selectedArmor === 'side' || selectedArmor === 'rear'
          ? {
              entity: data2.entity,
              isAppliedTargetSize: true,
              armorDirection: selectedArmor,
            }
          : undefined,
      isMoving: isAppliedMoving,
    });
  }

  if (data2.weapon !== undefined && data1.entity !== undefined) {
    weapon2DPSReadings = getDPSReadingsByDistance(data2.weapon, {
      target:
        selectedArmor === 'front' || selectedArmor === 'side' || selectedArmor === 'rear'
          ? {
              entity: data1.entity,
              isAppliedTargetSize: true,
              armorDirection: selectedArmor,
            }
          : undefined,
      isMoving: isAppliedMoving,
    });
  }

  const onApplyMoving = () => {
    setIsAppliedMoving((prev) => !prev);
  };

  const onSelect = (value: string) => {
    setSlectedArmor(value);
  };

  return (
    <DPSChartWrapper>
      <ChartHeader>
        <SelectButtonContainer>
          <SelectButton id="apply-moving-to-accuracy" onSelect={onApplyMoving} checked={isAppliedMoving}>
            이동중
          </SelectButton>
          <SelectButton
            type="radio"
            id="dps-comparator-none"
            value="none"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selectedArmor === 'none'}
          >
            무기 기본
          </SelectButton>
          <SelectButton
            type="radio"
            id="dps-comparator-front"
            value="front"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selectedArmor === 'front'}
          >
            전면
          </SelectButton>
          <SelectButton
            type="radio"
            id="dps-comparator-side"
            value="side"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selectedArmor === 'side'}
          >
            측면
          </SelectButton>
          <SelectButton
            type="radio"
            id="dps-comparator-rear"
            value="rear"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selectedArmor === 'rear'}
          >
            후면
          </SelectButton>
        </SelectButtonContainer>
      </ChartHeader>
      <LineChartOfTwo
        labels={(weapon1DPSReadings.length > weapon2DPSReadings.length ? weapon1DPSReadings : weapon2DPSReadings).map(
          (_, i) => i
        )}
        data1={{ label: data1.weapon?.id ?? '', data: weapon1DPSReadings }}
        data2={{ label: data2.weapon?.id ?? '', data: weapon2DPSReadings }}
        axesOptions={{
          x: {
            title: '거리',
          },
          y: {
            suggestedMax: 14,
            title: 'DPS',
          },
        }}
      />
    </DPSChartWrapper>
  );
};

export default DPSChart;

const DPSChartWrapper = styled.div`
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
