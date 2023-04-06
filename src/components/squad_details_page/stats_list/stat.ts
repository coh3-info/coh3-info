import type EntityStats from '../../../types/stats/entityStats';
import { WeaponStats } from '../../../types/stats/weaponStats';
import type { SeparatorOfStat, Stat, StatGroup, StatValue, UnitOfStat } from './stat.d';

type Target = EntityStats | WeaponStats | undefined;
type GetValue<T extends Target> = (target: T) => StatValue | StatValue[];

interface Options {
  separator?: SeparatorOfStat;
  unit?: UnitOfStat;
}

type Name = string;

type StatFormat<T extends Target> = [Name, GetValue<T>, Options?];
type StatGroupFormat<T extends Target> = [Name, StatFormat<T>[]];
type StatListFormat<T extends Target> = (StatFormat<T> | StatGroupFormat<T>)[];

type CreateStat = <T extends Target>(name: string, targets: T[], getValue: GetValue<T>, options?: Options) => Stat;
type CreateStatGroup = <T extends Target>(groupName: string, targets: T[], statFormats: StatFormat<T>[]) => StatGroup;
type CreateStatList = <T extends Target>(targets: T[], listformat: StatListFormat<T>) => (Stat | StatGroup)[];

const createStat: CreateStat = (name, targets, getValue, options?) => {
  const leftValue = getValue(targets[0]);
  const rightValue = getValue(targets[1]);
  const init = {
    name,
    unit: options?.unit,
  };

  if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
    return {
      ...init,
      leftValue,
      rightValue,
      separator: options?.separator ?? '/',
    };
  } else if (!Array.isArray(leftValue) && !Array.isArray(rightValue)) {
    return {
      ...init,
      leftValue,
      rightValue,
    };
  } else {
    const errorMessage =
      'leftValue와 rightValue의 Type은 모두 StatValue이거나 모두 StatValue[] 이여야 합니다. 서로 다를 수 없습니다.';
    throw new Error(errorMessage);
  }
};

const createStatGroup: CreateStatGroup = <T extends Target>(
  groupName: string,
  targets: T[],
  statFormats: StatFormat<T>[]
) => {
  const stats = statFormats.map((format) => {
    const [name, getValue, options] = format;
    return createStat<T>(name, targets, getValue, options);
  });
  return {
    name: groupName,
    stats,
  };
};

export const createStatList: CreateStatList = <T extends Target>(targets: T[], listformat: StatListFormat<T>) => {
  return listformat.map((format) => {
    if (Array.isArray(format[1])) {
      const [name, statFromats] = format;
      return createStatGroup<T>(name, targets, statFromats);
    } else {
      const [name, getValue, options] = format;
      return createStat<T>(name, targets, getValue, options);
    }
  });
};
