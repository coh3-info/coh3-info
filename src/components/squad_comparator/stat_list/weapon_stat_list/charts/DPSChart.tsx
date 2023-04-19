import styled from 'styled-components';
import { getDPSReadingsByDistance } from '../../../../../util/calculator/weapon';

import SelectButton from '../../../../common/buttons/SelectButton';
import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import type { EntityStats } from '../../../../../types/stats/entityStats';
import type { DPSChartOption } from '../../../../../types/for_components/squad_comparator/weaponStatsChart';

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
  option: DPSChartOption;
  setOption: (newOption: DPSChartOption) => void;
}

const DPSChart = ({ data1, data2, option, setOption }: DPSChartProps) => {
  const { isAppliedMoving, selectedArmor } = option;

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
  } else if (data1.weapon !== undefined) {
    weapon1DPSReadings = getDPSReadingsByDistance(data1.weapon, { isMoving: isAppliedMoving });
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
  } else if (data2.weapon !== undefined) {
    weapon2DPSReadings = getDPSReadingsByDistance(data2.weapon, { isMoving: isAppliedMoving });
  }

  const onToggleMoving = () => {
    const newDPSOption = {
      ...option,
      isAppliedMoving: !isAppliedMoving,
    };

    setOption(newDPSOption);
  };

  const onSelectArmor = (value: string) => {
    if (value === 'none' || value === 'front' || value === 'side' || value === 'rear') {
      const newDPSChartOption: DPSChartOption = {
        ...option,
        selectedArmor: value,
      };

      setOption(newDPSChartOption);
    } else {
      throw new Error(`매개변수 "value"에는 값 "${value}"가 올 수 없습니다.`);
    }
  };

  return (
    <DPSChartWrapper>
      <ChartHeader>
        <SelectorCategory>기본</SelectorCategory>
        <SelectButtonContainer>
          <SelectButton id="apply-moving-to-accuracy" onSelect={onToggleMoving} checked={isAppliedMoving}>
            이동중
          </SelectButton>
          <SelectButton
            type="radio"
            id="dps-comparator-none"
            value="none"
            name={RADIO_NAME}
            onSelect={onSelectArmor}
            checked={selectedArmor === 'none'}
          >
            무기 기본
          </SelectButton>
        </SelectButtonContainer>
        <SelectorCategory>피격률&장갑</SelectorCategory>
        <SelectButtonContainer>
          <SelectButton
            type="radio"
            id="dps-comparator-front"
            value="front"
            name={RADIO_NAME}
            onSelect={onSelectArmor}
            checked={selectedArmor === 'front'}
          >
            전면
          </SelectButton>
          <SelectButton
            type="radio"
            id="dps-comparator-side"
            value="side"
            name={RADIO_NAME}
            onSelect={onSelectArmor}
            checked={selectedArmor === 'side'}
          >
            측면
          </SelectButton>
          <SelectButton
            type="radio"
            id="dps-comparator-rear"
            value="rear"
            name={RADIO_NAME}
            onSelect={onSelectArmor}
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
      <Description>
        DPS에 영향을 주는 데이터는 아주 많으며, 이 그래프에서는 정확하게 계산할 수 있는 데이터만을 고려하였습니다.
        <br />
        따라서, 범위피해같은 계산에서 제외된 요소가 있을 수 있습니다.
      </Description>
    </DPSChartWrapper>
  );
};

export default DPSChart;

const DPSChartWrapper = styled.div``;

const ChartHeader = styled.div`
  display: grid;
  grid-template: repeat(2, max-content) / repeat(2, max-content);
  row-gap: 5px;
  column-gap: 10px;
`;

const SelectorCategory = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  text-align: right;
`;

const SelectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Description = styled.p`
  margin-top: 10px;
  color: #979797;
  font-size: 0.875rem;
  text-align: center;
`;
