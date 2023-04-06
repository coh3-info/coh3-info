import type UnitStats from '../stats/unitStats';

export type SquadBookmark = {
  id: string;
  selectedEntityId: string;
  selectedWeaponId: string;
  unit: UnitStats;
};
