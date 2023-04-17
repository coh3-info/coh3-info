export type Race = 'americans' | 'british' | 'british_africa' | 'germans' | 'afrika_korps' | '';
export type SquadCategory = 'infantry' | 'team_weapons' | 'vehicles' | '';

interface LoadoutData {
  num: number; // sbps/squad_loadout_ext/unit_list/[loadout_data]/num
  entityId: string /* sbps/squad_loadout_ext/unit_list/[loadout_data]/type 경로의 파일 이름
  .../type 값이 'ebps/races/american/infantry/rifleman_us'라면 entityId = 'rifleman_us' */;
}

export interface Squad {
  id: string; // 데이터의 파일 이름
  name: string; // squad 영어 이름
  nameKO: string; // squad 한글 이름
  category: SquadCategory;
  race: Race; // sbps/squad_type_ext/squad_race_type_list/squad_race_type
  imageUrl: {
    icon: string; // sbps/squad_ui_ext/race_list/[race_data]/info/icon_name
    symbolIcon: string; // sbps/squad_ui_ext/race_list/[race_data]/info/symbol_icon_name
  };
  ui: {
    briefText: string;
  };
  abilities: [];
  captureStrategicPoint: {
    captureRateMutiplier: number; // sbps/squad_capture_strategic_point_ext/capture_rate_multiplier
    revertRateMutiplier: number; // sbps/squad_capture_strategic_point_ext/revert_rate_multiplier
  };
  constructions: [];
  loadout: LoadoutData[];
  population: {
    personnelPop: number; // sbps/squad_population_ext/personnel_pop
  };
  reinforce: {
    costPercentage: number; // sbps/squad_reinforce_ext/time_cost_percentage/cost_percentage
    timePercentage: number; // sbps/squad_reinforce_ext/time_cost_percentage/time_percentage
  };
  upgrades: [];
  inventory: {
    canPickUpItems: boolean; // sbps/squad_inventory_ext/can_pick_up_items
    categoryCapacity: {
      //-1 = infinite, 0 ~ n = finite
      casualty: number; // sbps/squad_inventory_ext/category_capacity/casualty
      default: number; // sbps/squad_inventory_ext/category_capacity/default
      special: number; // sbps/squad_inventory_ext/category_capacity/special
      upgrade: number; // sbps/squad_inventory_ext/category_capacity/upgrade
    };
  };
  filters: string[];
}

export interface Sbps {
  [key: string]: Squad;
}
