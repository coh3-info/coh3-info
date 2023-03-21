import type Squad from '../game_data/squad';

export type SquadBookmark = {
  id: string;
  squad: Squad;
  selectedEntityUniqueName: string;
};
