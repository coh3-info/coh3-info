export type StatValue = string | number | boolean | undefined;
export type UnitOfStat = 'percentage' | 'degree';
export type SeparatorOfStat = '/' | '~';

type BasicStat = {
  name: string;
  unit?: UnitOfStat;
};

type StatOfValues = {
  leftValue: StatValue[];
  rightValue: StatValue[];
  separator: SeparatorOfStat;
} & BasicStat;

type StatOfSingleValue = {
  leftValue: StatValue;
  rightValue: StatValue;
} & BasicStat;

export type Stat = StatOfSingleValue | StatOfValues;

export type StatGroup = {
  name: string;
  stats: Stat[];
};
