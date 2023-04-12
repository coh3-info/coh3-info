import styled from 'styled-components';
import { getPenetrationChanceReadings, getPenetrationReadingsByDistance } from '../../../../../util/calculator/weapon';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import PenetrationChanceChartOfTwoWeapons from '../../../../common/charts/PenetrationChanceChartOfTwoWeapons';
import type EntityStats from '../../../../../types/stats/entityStats';
import { useState } from 'react';
import PenetrationChartOfTwoWeapons from '../../../../common/charts/PenetrationChartOfTwoWeapons';
import SelectButton from '../../../../common/buttons/SelectButton';

const RADIO_NAME = 'penetration-radio-buton';

interface PenetrationComparatorProps {
  data1: {
    entity: EntityStats | undefined;
    weapon: WeaponStats | undefined;
  };

  data2: {
    entity: EntityStats | undefined;
    weapon: WeaponStats | undefined;
  };
}

const PenetrationComparator = ({ data1, data2 }: PenetrationComparatorProps) => {
  const [selected, setSlected] = useState('penetration');
  let weapon1PenetrationReadings: number[] = [];
  let weapon2PenetrationReadings: number[] = [];

  if (data1.weapon !== undefined) {
    weapon1PenetrationReadings = getPenetrationReadingsByDistance(data1.weapon);
  }

  if (data2.weapon !== undefined) {
    weapon2PenetrationReadings = getPenetrationReadingsByDistance(data2.weapon);
  }

  let weapon1PenetrationChanceReadings: number[] = [];
  let weapon2PenetrationChanceReadings: number[] = [];

  const getArmor = (entity: EntityStats) => {
    if (typeof entity.armor === 'number') {
      return entity.armor;
    }
    switch (selected) {
      case 'front':
        return entity.armor.front;
      case 'side':
        return entity.armor.side;
      default:
        return entity.armor.rear;
    }
  };

  if (data1.weapon !== undefined && data2.entity !== undefined) {
    const armor = getArmor(data2.entity);

    weapon1PenetrationChanceReadings = getPenetrationChanceReadings(data1.weapon, armor).map(
      (accuracy) => accuracy * 100
    );
  }

  if (data2.weapon !== undefined && data1.entity !== undefined) {
    const armor = getArmor(data1.entity);

    weapon2PenetrationChanceReadings = getPenetrationChanceReadings(data2.weapon, armor).map(
      (accuracy) => accuracy * 100
    );
  }

  const onSelect = (value: string) => {
    setSlected(value);
  };

  return (
    <PenetrationComparatorWrapper>
      <ComparatorHeader>
        <SelectorCategory>관통력</SelectorCategory>
        <SelectButtonContainer>
          <SelectButton
            type="radio"
            id="penetration"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selected === 'penetration'}
          >
            관통력
          </SelectButton>
        </SelectButtonContainer>
        <SelectorCategory>관통 확률</SelectorCategory>
        <SelectButtonContainer>
          <SelectButton type="radio" id="front" name={RADIO_NAME} onSelect={onSelect} checked={selected === 'front'}>
            전면
          </SelectButton>
          <SelectButton type="radio" id="side" name={RADIO_NAME} onSelect={onSelect} checked={selected === 'side'}>
            측면
          </SelectButton>
          <SelectButton type="radio" id="rear" name={RADIO_NAME} onSelect={onSelect} checked={selected === 'rear'}>
            후면
          </SelectButton>
        </SelectButtonContainer>
      </ComparatorHeader>
      {selected === 'penetration' ? (
        <PenetrationChartOfTwoWeapons
          data1={{ label: data1.weapon?.id ?? '', data: weapon1PenetrationReadings }}
          data2={{ label: data2.weapon?.id ?? '', data: weapon2PenetrationReadings }}
        />
      ) : (
        <PenetrationChanceChartOfTwoWeapons
          data1={{ label: data1.weapon?.id ?? '', data: weapon1PenetrationChanceReadings }}
          data2={{ label: data2.weapon?.id ?? '', data: weapon2PenetrationChanceReadings }}
        />
      )}
    </PenetrationComparatorWrapper>
  );
};

export default PenetrationComparator;

const PenetrationComparatorWrapper = styled.article`
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
