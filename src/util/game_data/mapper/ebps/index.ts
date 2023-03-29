import { fetchEbps } from '../common/fetchData';
import { traverseData } from '../common/traversingData';

import type Entity from '../../../../types/game_data/entity';
import type { Ebps } from '../../../../types/game_data/entity';

const mapEbps = async (): Promise<Ebps> => {
  const mappedEbps: Ebps = {};

  const ebps = await fetchEbps();

  for (const race in ebps.races) {
    if (
      race === 'afrika_korps' ||
      race === 'american' ||
      race === 'british_africa' ||
      race === 'british' ||
      race === 'german'
    ) {
      for (const category in ebps.races[race]) {
        if (
          category === 'infantry' ||
          category === 'team_weapons' ||
          category === 'vehicles' ||
          category === 'weapons'
        ) {
          for (const dataName in ebps.races[race][category]) {
            const data = ebps.races[race][category][dataName];
            traverseData(data, dataName, (file, fileName) => {
              const entity = mapEntity(fileName, file);
              mappedEbps[fileName] = entity;
            });
          }
        }
      }
    }
  }

  return mappedEbps;
};

export default mapEbps;

const mapEntity = (entityId: string, file: any) => {
  const entity: Entity = createInitEntity(entityId);

  if (file.extensions === undefined) {
    throw new Error(`extensions가 존재하지 않는 객체입니다. id: ${entityId}`);
  }

  for (const extension of file.extensions) {
    const { exts } = extension;
    const templateId = exts.template_reference.value.split('\\')[1];

    switch (templateId) {
      case 'combat_ext':
        mapCombat(entity, exts);
        break;
      case 'health_ext':
        mapHealth(entity, exts);
        break;
      case 'moving_ext':
        mapMoving(entity, exts);
        break;
      case 'sight_ext':
        mapSight(entity, exts);
        break;
      case 'cost_ext':
        mapCost(entity, exts);
        break;
      case 'population_ext':
        mapPopulation(entity, exts);
        break;
      case 'sim_inventory_item_ext':
        mapSimInventoryItem(entity, exts);
        break;
      case 'weapon_ext':
        mapWeapon(entity, exts);
        break;
    }
  }
  return entity;
};

const createInitEntity = (id: string): Entity => {
  return {
    id,
    hardpoints: [],
    cost: {
      fuel: 0,
      manpower: 0,
      time: 0,
    },
    health: {
      armor: 0,
      hitpoints: 0,
      targetSize: 0,
    },
    moving: {
      acceleration: 0,
      deceleration: 0,
      reverseAcceleration: 0,
      reverseDeceleration: 0,
      rotationRate: 0,
      speedScalingTable: {
        defaultSpeed: 0,
        maxSpeed: 0,
        minSpeed: 0,
        reverseMaxSpeed: 0,
      },
    },
    population: {
      personnelPop: 0,
    },
    sight: {
      detectCamouflage: {
        global: 0,
        mine: 0,
        unit: 0,
      },
      sightPackage: {
        outerRadius: 0,
      },
    },
    simInventoryItem: {
      capacityRequired: 0,
      category: '',
      ownershipAttributes: {
        dropOnDeathChance: 0,
      },
    },
  };
};

const mapCombat = (entity: Entity, exts: any) => {
  exts.hardpoints.forEach(({ hardpoint }: any) => {
    hardpoint.weapon_table.forEach(({ weapon }: any) => {
      const ebpPath = weapon.weapon_entity_attachment.entity_attach_data.ebp.instance_reference;
      if (ebpPath === undefined || ebpPath.length === 0) return;

      const splitedEbpPath = ebpPath.split('/');
      entity.hardpoints.push(splitedEbpPath[splitedEbpPath.length - 1]);
    });
  });
};

const mapHealth = (entity: Entity, exts: any) => {
  const armorTemplate = exts.armor_layout_option.template_reference.value;
  const splitedArmorTemplate = armorTemplate.split('\\');
  //armorType = 'armor_layout_uniform' | 'armor_layout_front_rear_side' | 'armor_layout_front_rear'
  const armorType = splitedArmorTemplate[splitedArmorTemplate.length - 1];

  if (armorType === 'armor_layout_uniform') {
    entity.health.armor = exts.armor_layout_option.armor;
  } else {
    entity.health.armor = {
      front: exts.armor_layout_option.front_armor,
      //entity id가 sherman_prewrecked_us인 객체는 font_armor와 rear_armor만 있습니다.
      side: exts.armor_layout_option.front_armor ?? 0,
      rear: exts.armor_layout_option.rear_armor,
    };
  }

  entity.health.hitpoints = exts.hitpoints;
  entity.health.targetSize = exts.target_size;
};

const mapMoving = (entity: Entity, exts: any) => {
  entity.moving.acceleration = exts.acceleration;
  entity.moving.deceleration = exts.deceleration;
  entity.moving.reverseAcceleration = exts.reverse_acceleration;
  entity.moving.reverseDeceleration = exts.reverse_deceleration;
  entity.moving.rotationRate = exts.rotation_rate;
  entity.moving.speedScalingTable.defaultSpeed = exts.speed_scaling_table.default_speed;
  entity.moving.speedScalingTable.maxSpeed = exts.speed_scaling_table.max_speed;
  entity.moving.speedScalingTable.minSpeed = exts.speed_scaling_table.min_speed;
  entity.moving.speedScalingTable.reverseMaxSpeed = exts.speed_scaling_table.reverse_max_speed;
};

const mapSight = (entity: Entity, exts: any) => {
  entity.sight.detectCamouflage.global = exts.detect_camouflage.tp_global;
  entity.sight.detectCamouflage.mine = exts.detect_camouflage.tp_mine;
  entity.sight.detectCamouflage.unit = exts.detect_camouflage.tp_unit;

  entity.sight.sightPackage.outerRadius = exts.sight_package.outer_radius;
};

const mapCost = (entity: Entity, exts: any) => {
  entity.cost.manpower = exts.time_cost.cost.manpower;
  entity.cost.fuel = exts.time_cost.cost.fuel;
  entity.cost.time = exts.time_cost.time_seconds;
};

const mapPopulation = (entity: Entity, exts: any) => {
  entity.population.personnelPop = exts.personnel_pop;
};

const mapSimInventoryItem = (entity: Entity, exts: any) => {
  const capacityRequired = exts.simulation_item.capacity_required;
  const category = exts.simulation_item.category;
  const dropOnDeathChance = exts.simulation_item.ownership_attributes.drop_on_death_chance;

  entity.simInventoryItem.capacityRequired = capacityRequired;
  entity.simInventoryItem.category = category;
  entity.simInventoryItem.ownershipAttributes.dropOnDeathChance = dropOnDeathChance;
};

const mapWeapon = (entity: Entity, exts: any) => {
  const weaponRef = exts.weapon.instance_reference;
  const splitedWeaponRef = weaponRef.split('/');
  const weaponId = splitedWeaponRef[splitedWeaponRef.length - 1];
  entity.weapon = weaponId;
};
