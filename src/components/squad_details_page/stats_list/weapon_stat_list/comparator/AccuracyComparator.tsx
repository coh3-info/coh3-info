import styled from 'styled-components';
import { getAccuracyReadingsByDistance } from '../../../../../util/calculator/weapon';
import AccuracyChartOfTwoWeapons from '../../../../common/charts/AccuracyChartOfTwoWeapons';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import EntityStats from '../../../../../types/stats/entityStats';

interface AccuracyComparatorProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
  entity1: EntityStats | undefined;
  entity2: EntityStats | undefined;
}

const AccuracyComparator = ({ weapon1, weapon2, entity1, entity2 }: AccuracyComparatorProps) => {
  let weapon1AccuracyReadings: number[] = [];
  let weapon2AccuracyReadings: number[] = [];
  if (weapon1 !== undefined && entity2 !== undefined) {
    const targetSize = entity2.targetSize;
    weapon1AccuracyReadings = getAccuracyReadingsByDistance(weapon1, targetSize).map((accuracy) => accuracy * 100);
  }

  if (weapon2 !== undefined && entity1 !== undefined) {
    const targetSize = entity1.targetSize;
    weapon2AccuracyReadings = getAccuracyReadingsByDistance(weapon2, targetSize).map((accuracy) => accuracy * 100);
  }

  return (
    <AccuracyComparatorWrapper>
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
