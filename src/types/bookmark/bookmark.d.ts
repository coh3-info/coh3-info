import type { UnitStats } from '../stats/unitStats';

export interface SquadBookmark {
  id: string;
  selectedEntityId: string;
  selectedWeaponId: string;
  unit: UnitStats;
}
