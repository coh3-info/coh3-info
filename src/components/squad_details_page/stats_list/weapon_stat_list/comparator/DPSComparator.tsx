import styled from 'styled-components';
import RPMChartOfTwoWeapons from '../../../../common/charts/RPMChartOfTwoWeapons';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import { getDPSReadingsByDistance } from '../../../../../util/calculator/weapon';
import DPSChartOfTwoWeapons from '../../../../common/charts/DPSChartOfTwoWeapons';

interface DPSComparatorProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
}

const DPSComparator = ({ weapon1, weapon2 }: DPSComparatorProps) => {
  let weapon1DPSReadings: number[] = [];
  let weapon2DPSReadings: number[] = [];
  if (weapon1 !== undefined) {
    weapon1DPSReadings = getDPSReadingsByDistance(weapon1);
  }

  if (weapon2 !== undefined) {
    weapon2DPSReadings = getDPSReadingsByDistance(weapon2);
  }

  return (
    <DPSComparatorWrapper>
      <DPSChartOfTwoWeapons
        data1={{ label: weapon1?.id ?? '', data: weapon1DPSReadings }}
        data2={{ label: weapon2?.id ?? '', data: weapon2DPSReadings }}
      />
    </DPSComparatorWrapper>
  );
};

export default DPSComparator;

const DPSComparatorWrapper = styled.div`
  border: solid 1px #979797;
  border-radius: 6px;
  padding: 20px;
`;
