export type StatValue = string | number | boolean | undefined;

type BasicStat = {
  statName: string;
  unit?: 'percentage' | 'degree';
};

export type StatWithSingleValue = {
  leftValue: StatValue;
  rightValue: StatValue;
} & BasicStat;

export type StatWithSubStats = {
  headers: string[];
  separator?: '/' | '~';
  leftValues: StatValue[];
  rightValues: StatValue[];
} & BasicStat;

export type Stat = StatWithSingleValue | StatWithSubStats;
