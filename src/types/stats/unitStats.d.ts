import type SquadStats from './squadStats';
import type EntityStats from './entityStats';
import type { WeaponStats } from './weaponStats';
import type { UnitLoadout } from '../game_data/unit';

interface UnitStatsLoadOutData {
  num: number;
  entityId: string;
  weaponIds: string[];
}

type UnitStatsLoadout = UnitStatsLoadOutData[];

interface UnitStats {
  loadout: UnitStatsLoadout;
  squad: SquadStats;
  entities: EntityStats[];
  weapons: WeaponStats[];
}

export default UnitStats;
