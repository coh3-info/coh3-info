import styled from 'styled-components';
import { getPenetrationChanceReadings, getPenetrationReadingsByDistance } from '../../../../../util/calculator/weapon';
import { useState } from 'react';

import SelectButton from '../../../../common/buttons/SelectButton';
import LineChartOfTwo from '../../../../common/charts/LineChartOfTwo';

import type { WeaponStats } from '../../../../../types/stats/weaponStats';
import type { EntityStats } from '../../../../../types/stats/entityStats';

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

  if (selected === 'penetration') {
    if (data1.weapon !== undefined) {
      weapon1PenetrationReadings = getPenetrationReadingsByDistance(data1.weapon);
    }

    if (data2.weapon !== undefined) {
      weapon2PenetrationReadings = getPenetrationReadingsByDistance(data2.weapon);
    }
  } else if (selected === 'front' || selected === 'side' || selected === 'rear') {
    if (data1.weapon !== undefined && data2.entity !== undefined) {
      weapon1PenetrationReadings = getPenetrationChanceReadings(data1.weapon, data2.entity, selected).map(
        (accuracy) => accuracy * 100
      );
    }

    if (data2.weapon !== undefined && data1.entity !== undefined) {
      weapon2PenetrationReadings = getPenetrationChanceReadings(data2.weapon, data1.entity, selected).map(
        (accuracy) => accuracy * 100
      );
    }
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
            id="penetration-comparator-penetration"
            value="penetration"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selected === 'penetration'}
          >
            관통력
          </SelectButton>
        </SelectButtonContainer>
        <SelectorCategory>관통 확률</SelectorCategory>
        <SelectButtonContainer>
          <SelectButton
            type="radio"
            id="penetration-comparator-front"
            value="front"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selected === 'front'}
          >
            전면
          </SelectButton>
          <SelectButton
            type="radio"
            id="penetration-comparator-side"
            value="side"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selected === 'side'}
          >
            측면
          </SelectButton>
          <SelectButton
            type="radio"
            id="penetration-comparator-rear"
            value="rear"
            name={RADIO_NAME}
            onSelect={onSelect}
            checked={selected === 'rear'}
          >
            후면
          </SelectButton>
        </SelectButtonContainer>
      </ComparatorHeader>

      <LineChartOfTwo
        labels={(weapon1PenetrationReadings.length > weapon2PenetrationReadings.length
          ? weapon1PenetrationReadings
          : weapon2PenetrationReadings
        ).map((_, i) => i)}
        data1={{ label: data1.weapon?.id ?? '', data: weapon1PenetrationReadings }}
        data2={{ label: data2.weapon?.id ?? '', data: weapon2PenetrationReadings }}
        axesOptions={{
          x: {
            title: '거리',
          },
          y: {
            suggestedMax: selected === 'penetration' ? 50 : 100,
            title: selected === 'penetration' ? '관통력' : '관통확률(%)',
          },
        }}
      />
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
