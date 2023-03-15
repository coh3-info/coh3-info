export type StatValue = string | number | boolean;

export type Stat = {
  statName: string;
  leftValue?: StatValue;
  rightValue?: StatValue;
};

export type StatWithSubStats = {
  statName: string;
  subStats?: Stat[];
};
