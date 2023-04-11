import styled from 'styled-components';
import { getAccuracyReadingsByDistance, getPenetrationChanceReadings } from '../../../../../util/calculator/weapon';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import PenetrationChanceChartOfTwoWeapons from '../../../../common/charts/PenetrationChanceChartOfTwoWeapons copy';
import type EntityStats from '../../../../../types/stats/entityStats';

interface PenetrationChanceComparatorProps {
  weapon1: WeaponStats | undefined;
  weapon2: WeaponStats | undefined;
  entity1: EntityStats | undefined;
  entity2: EntityStats | undefined;
}

const PenetrationChanceComparator = ({ weapon1, weapon2, entity1, entity2 }: PenetrationChanceComparatorProps) => {
  let weapon1AccuracyReadings: number[] = [];
  let weapon2AccuracyReadings: number[] = [];

  if (weapon1 !== undefined && entity2 !== undefined) {
    const armor = typeof entity2.armor === 'number' ? entity2.armor : entity2.armor.front;
    weapon1AccuracyReadings = getPenetrationChanceReadings(weapon1, armor).map((accuracy) => accuracy * 100);
  }

  if (weapon2 !== undefined && entity1 !== undefined) {
    const armor = typeof entity1.armor === 'number' ? entity1.armor : entity1.armor.front;
    weapon2AccuracyReadings = getPenetrationChanceReadings(weapon2, armor).map((accuracy) => accuracy * 100);
  }

  return (
    <PenetrationChanceComparatorWrapper>
      <PenetrationChanceChartOfTwoWeapons
        data1={{ label: weapon1?.id ?? '', data: weapon1AccuracyReadings }}
        data2={{ label: weapon2?.id ?? '', data: weapon2AccuracyReadings }}
      />
    </PenetrationChanceComparatorWrapper>
  );
};

export default PenetrationChanceComparator;

const PenetrationChanceComparatorWrapper = styled.div`
  border: solid 1px #979797;
  border-radius: 6px;
  padding: 20px;
`;
