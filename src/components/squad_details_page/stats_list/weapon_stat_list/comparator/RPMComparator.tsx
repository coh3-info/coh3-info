import styled from 'styled-components';
import RPMChartOfTwoWeapons from '../../../../common/charts/RPMChartOfTwoWeapons';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import { getRPMReadingsByDistance } from '../../../../../util/calculator/weapon';

interface RPMComparatorProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
}

const RPMComparator = ({ weapon1, weapon2 }: RPMComparatorProps) => {
  let weapon1RPMs: number[] = [];
  let weapon2RPMs: number[] = [];
  if (weapon1 !== undefined) {
    weapon1RPMs = getRPMReadingsByDistance(weapon1);
  }

  if (weapon2 !== undefined) {
    weapon2RPMs = getRPMReadingsByDistance(weapon2);
  }

  return (
    <RPMComparatorWrapper>
      <RPMChartOfTwoWeapons
        data1={{ label: weapon1?.id ?? '', data: weapon1RPMs }}
        data2={{ label: weapon2?.id ?? '', data: weapon2RPMs }}
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
