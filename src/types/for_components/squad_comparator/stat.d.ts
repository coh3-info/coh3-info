export type StatValue = string | number | boolean | undefined;
export type UnitOfStat = 'percentage' | 'degree';
export type SeparatorOfStat = '/' | '~';

interface BasicStat {
  name: string;
  unit?: UnitOfStat;
  decimalPlaces?: number;
}

interface StatOfValues extends BasicStat {
  leftValue: StatValue[];
  rightValue: StatValue[];
  separator: SeparatorOfStat;
}

interface StatOfSingleValue extends BasicStat {
  leftValue: StatValue;
  rightValue: StatValue;
}

export type Stat = StatOfSingleValue | StatOfValues;

export interface StatGroup {
  name: string;
  stats: Stat[];
}
