type InfantryArmor = number;

interface VehicleArmor {
  front: number;
  side: number;
  rear: number;
}

type InventoryItemCategory = 'casualty' | 'default' | 'upgrade' | 'special' | '';

interface Entity {
  id: string; //데이터의 파일 이름
  hardpoints: string[] /* ebps/combat_ext/hardpoints/[n.hardpoint]/weapon_table/1.weapon/weapon_entity_attachment/entity_attach_data/ebp의 값인 경로의 파일이름
    각 hardpoint의 1.weapon만 사용합니다.
    예) sherman_us
    1.hardpoint/.../ebp = 'ebps\races\american\weapons\ballistic_weapon\tank_gun\w_75mm_sherman_us'
    2.hardpoint/.../ebp = 'ebps\races\american\weapons\small_arms\machine_guns\light_machine_gun\w_30cal_coaxial_sherman_us'
    ...
    일 때 hardpoints = ['w_75mm_sherman_us', 'w_30cal_coaxial_sherman_us', ...]; */;
  cost: {
    fuel: number; //epbs/cost_ext/time_cost/cost/fuel
    manpower: number; //epbs/cost_ext/time_cost/cost/manpower
    time: number; //epbs/cost_ext/time_cost/time_seconds
  };
  health: {
    armor: InfantryArmor | VehicleArmor; //ebps/health_ext/armor_layout_option/
    hitpoints: number; //ebps/health_ext/hitpoints
    targetSize: number; //ebps/health_ext/target_size
  };
  moving: {
    acceleration: number; //ebps/moving_ext/acceleration
    deceleration: number; //ebps/moving_ext/deceleration
    reverseAcceleration: number; //ebps/moving_ext/reverse_acceleration
    reverseDeceleration: number; //ebps/moving_ext/reverse_deceleration
    //초당 회전 각도
    rotationRate: number; //ebps/moving_ext/rotation_rate

    // 데이터 설명을 읽어보면 defaultSpeed가 기본 최고속도인듯 합니다. maxSpeed는 속도 버프를 받을 때 최대속도 같습니다.
    speedScalingTable: {
      defaultSpeed: number; //ebps/moving_ext/speed_scaling_table/default_speed
      maxSpeed: number; //ebps/moving_ext/speed_scaling_table/max_speed
      minSpeed: number; //ebps/moving_ext/speed_scaling_table/min_speed
      reverseMaxSpeed: number; //ebps/moving_ext/speed_scaling_table/reverse_max_speed
    };
  };
  population: {
    personnelPop: number; //ebps/population_ext/personnel_pop
  };
  sight: {
    detectCamouflage: {
      global: number; //ebps/sight/detect_camouflage/tp_global
      mine: number; //ebps/sight/detect_camouflage/tp_mine
      unit: number; //ebps/sight/detect_camouflage/tp_unit
    };
    sightPackage: {
      //최대 시야 범위
      outerRadius: number; //ebps/sight/sight_package/outer_radius
    };
  };
  simInventoryItem: {
    capacityRequired: number; //ebps/sim_inventory_item_ext/simulation_item/capacity_required
    category: InventoryItemCategory; //ebps/sim_inventory_item_ext/simulation_item/category
    ownershipAttributes: {
      dropOnDeathChance: number; //ebps/sim_inventory_item_ext/simulation_item/ownership_attributes/drop_on_death_chance
    };
  };

  weapon?: string /*id가 w_로 시작하는 entity만 weapon속성을 가지고 있습니다.
    ebps/weapon_ext/weapon의 값인 경로의 파일이름
    예) w_garand_rifleman_us
    ebps/weapon_ext/weapon = 'weapon\american\small_arms\single_fire\rifle\garand_rifleman_us'
    일 때 weapon = 'garand_rifleman_us' */;
}

interface Ebps {
  [key: string]: Entity;
}

export { Ebps, InventoryItemCategory };

export default Entity;
