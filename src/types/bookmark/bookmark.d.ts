import type Unit from '../game_data/unit';

export type SquadBookmark = {
  id: string;
  selectedEntityId: string;
  selectedWeaponId: string;
  unit: Unit;
};
