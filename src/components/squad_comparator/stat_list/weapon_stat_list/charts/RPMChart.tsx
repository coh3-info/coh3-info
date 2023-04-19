import styled from 'styled-components';
import { getRPMReadingsByDistance } from '../../../../../util/calculator/weapon';

import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';
import SelectButton from '../../../../common/buttons/SelectButton';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import type { RPMChartOption } from '../../../../../types/for_components/squad_comparator/weaponStatsChart';

interface RPMChartProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
  option: RPMChartOption;
  setOption: (newOption: RPMChartOption) => void;
}

const RPMChart = ({ weapon1, weapon2, option, setOption }: RPMChartProps) => {
  const { isAppliedMoving } = option;
  let weapon1RPMReadings: number[] = [];
  let weapon2RPMReadings: number[] = [];
  if (weapon1 !== undefined) {
    weapon1RPMReadings = getRPMReadingsByDistance(weapon1, isAppliedMoving);
  }

  if (weapon2 !== undefined) {
    weapon2RPMReadings = getRPMReadingsByDistance(weapon2, isAppliedMoving);
  }

  const onToggleMoving = () => {
    const newOption: RPMChartOption = {
      isAppliedMoving: !isAppliedMoving,
    };
    setOption(newOption);
  };

  return (
    <RPMChartWrapper>
      <ChartHeader>
        <SelectButtonContainer>
          <SelectButton id="apply-moving-to-accuracy" onSelect={onToggleMoving} checked={isAppliedMoving}>
            이동중
          </SelectButton>
        </SelectButtonContainer>
      </ChartHeader>
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
    </RPMChartWrapper>
  );
};

export default RPMChart;

const RPMChartWrapper = styled.div``;

const ChartHeader = styled.div`
  display: grid;
  grid-template: repeat(2, max-content) / repeat(2, max-content);
  column-gap: 10px;
`;

const SelectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
