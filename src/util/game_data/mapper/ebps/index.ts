import { fetchEbps } from '../common/fetchData';
import { traverseData } from '../common/traversingData';
import { createInitEntity, createInitWeaponEntity } from '../../init_data_creator/initDataCreator';

import type { Entity, Ebps, EntityCategory, WeaponEntity } from '../../../../types/game_data/entity';

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
              let entityCategory: EntityCategory = 'normal';
              if (category === 'team_weapons') {
                entityCategory = 'team_weapon';
              } else if (category === 'weapons') {
                entityCategory = 'weapon';
              }

              const entity = mapEntity(fileName, file, { category: entityCategory });
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

interface AdditionalData {
  category: EntityCategory;
}

const mapEntity = (entityId: string, file: any, additionalData: AdditionalData) => {
  let entity: Entity | WeaponEntity;
  if (additionalData.category === 'weapon') {
    entity = createInitWeaponEntity(entityId);
  } else {
    entity = createInitEntity(entityId);
    entity.category = additionalData.category;
  }

  if (file.extensions === undefined) {
    throw new Error(`extensions가 존재하지 않는 객체입니다. id: ${entityId}`);
  }

  for (const extension of file.extensions) {
    const { exts } = extension;
    const templateId = exts.template_reference.value.split('\\')[1];

    if (entity.category === 'weapon') {
      switch (templateId) {
        case 'weapon_ext':
          mapWeapon(entity, exts);
          break;
      }
    }
    switch (templateId) {
      case 'cost_ext':
        mapCost(entity, exts);
        break;

      case 'health_ext':
        mapHealth(entity, exts);
        break;

      case 'sim_inventory_item_ext':
        mapSimInventoryItem(entity, exts);
        break;
      case 'combat_ext':
        mapCombat(entity, exts);
        break;

      case 'moving_ext':
        mapMoving(entity, exts);
        break;

      case 'sight_ext':
        mapSight(entity, exts);
        break;

      case 'population_ext':
        mapPopulation(entity, exts);
        break;
    }
  }
  return entity;
};

const mapCost = (entity: Entity | WeaponEntity, exts: any) => {
  entity.cost.manpower = exts.time_cost.cost.manpower;
  entity.cost.fuel = exts.time_cost.cost.fuel;
  entity.cost.time = exts.time_cost.time_seconds;
};

const mapHealth = (entity: Entity | WeaponEntity, exts: any) => {
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
      side: exts.armor_layout_option.side_armor ?? 0,
      rear: exts.armor_layout_option.rear_armor,
    };
  }

  entity.health.hitpoints = exts.hitpoints;
  entity.health.targetSize = exts.target_size;
};

const mapSimInventoryItem = (entity: Entity | WeaponEntity, exts: any) => {
  const capacityRequired = exts.simulation_item.capacity_required;
  const category = exts.simulation_item.category;
  const dropOnDeathChance = exts.simulation_item.ownership_attributes.drop_on_death_chance;

  entity.simInventoryItem.capacityRequired = capacityRequired;
  entity.simInventoryItem.category = category;
  entity.simInventoryItem.ownershipAttributes.dropOnDeathChance = dropOnDeathChance;
};

const mapCombat = (entity: Entity | WeaponEntity, exts: any) => {
  exts.hardpoints.forEach(({ hardpoint }: any) => {
    const ebpPath =
      hardpoint.weapon_table[0]?.weapon.weapon_entity_attachment.entity_attach_data.ebp.instance_reference;
    if (ebpPath === undefined || ebpPath.length === 0) return;

    const splitedEbpPath = ebpPath.split('/');
    entity.hardpoints.push(splitedEbpPath[splitedEbpPath.length - 1]);
  });
};

const mapMoving = (entity: Entity | WeaponEntity, exts: any) => {
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

const mapSight = (entity: Entity | WeaponEntity, exts: any) => {
  entity.sight.detectCamouflage.global = exts.detect_camouflage.tp_global;
  entity.sight.detectCamouflage.mine = exts.detect_camouflage.tp_mine;
  entity.sight.detectCamouflage.unit = exts.detect_camouflage.tp_unit;

  entity.sight.sightPackage.outerRadius = exts.sight_package.outer_radius;
};

const mapPopulation = (entity: Entity | WeaponEntity, exts: any) => {
  entity.population.personnelPop = exts.personnel_pop;
};

const mapWeapon = (entity: WeaponEntity, exts: any) => {
  const weaponRef = exts.weapon.instance_reference;
  const splitedWeaponRef = weaponRef.split('/');
  const weaponId = splitedWeaponRef[splitedWeaponRef.length - 1];
  entity.weapon = weaponId;
};
