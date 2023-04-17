import type { SquadCategory, Race } from '../game_data/squad';

export interface SquadStats {
  id: string;
  name: string;
  nameKO: string;
  category: SquadCategory;
  race: Race;
  imageUrl: {
    icon: string;
    symbolIcon: string;
  };
  captureRate: {
    capture: number;
    revert: number;
  };
  hitpoints: number;
  cost: {
    fuel: number;
    manpower: number;
    time: number;
    population: number;
  };
}
