import { fetchWeapons } from '../common/fetchData';
import { traverseData } from '../common/traversingData';
import { createInitWeapon } from '../../init_data_creator/initDataCreator';

import type Weapon from '../../../../types/game_data/weapon';
import type { Weapons } from '../../../../types/game_data/weapon';

const mapWeapons = async (): Promise<Weapons> => {
  const mappedWeapons: Weapons = {};
  const weapons = await fetchWeapons();

  for (const race in weapons) {
    if (
      race === 'afrika_korps' ||
      race === 'american' ||
      race === 'british_africa' ||
      race === 'british' ||
      race === 'german'
    ) {
      const data = weapons[race];

      traverseData(data, race, (file, fileName) => {
        const weapon = mapWeapon(fileName, file);
        mappedWeapons[fileName] = weapon;
      });
    }
  }

  return mappedWeapons;
};

export default mapWeapons;

const mapWeapon = (weaponId: string, file: any): Weapon => {
  const weapon = createInitWeapon(weaponId);
  const weaponBag = file.weapon_bag;
  if (weaponBag === undefined) return weapon;

  const {
    accuracy,
    aim,
    area_effect,
    burst,
    cooldown,
    damage,
    default_attack_type,
    deflection,
    fire,
    moving,
    penetration,
    range,
    reload,
    scatter,
    setup,
    suppression,
    teardown,
    tracking,
  } = weaponBag;

  if (accuracy !== undefined) {
    weapon.accuracy.near = accuracy.near;
    weapon.accuracy.mid = accuracy.mid;
    weapon.accuracy.far = accuracy.far;
  }

  if (aim !== undefined) {
    if (aim.aim_time_multiplier !== undefined) {
      weapon.aim.aimTimeMultiplier.near = aim.aim_time_multiplier.near;
      weapon.aim.aimTimeMultiplier.mid = aim.aim_time_multiplier.mid;
      weapon.aim.aimTimeMultiplier.far = aim.aim_time_multiplier.far;
    }

    if (aim.fire_aim_time !== undefined) {
      weapon.aim.fireAimTime.min = aim.fire_aim_time.min;
      weapon.aim.fireAimTime.max = aim.fire_aim_time.max;
    }
    if (aim.ready_aim_time !== undefined) {
      weapon.aim.readyAimTime.min = aim.ready_aim_time.min;
      weapon.aim.readyAimTime.max = aim.ready_aim_time.max;
    }
  }

  if (area_effect !== undefined) {
    weapon.areaEffect.accuracy.near = area_effect.accuracy.near;
    weapon.areaEffect.accuracy.mid = area_effect.accuracy.mid;
    weapon.areaEffect.accuracy.far = area_effect.accuracy.far;

    weapon.areaEffect.penetration.near = area_effect.aoe_penetration.near;
    weapon.areaEffect.penetration.mid = area_effect.aoe_penetration.mid;
    weapon.areaEffect.penetration.far = area_effect.aoe_penetration.far;

    const splitedTemplateReferenceValue = area_effect.area_info.template_reference.value.split('\\');
    const areaType = splitedTemplateReferenceValue[splitedTemplateReferenceValue.length - 1];
    switch (areaType) {
      case 'point_area_option':
        weapon.areaEffect.areaInfo.areaType = 'none';
        break;
      case 'circle_area_option':
        const circleAreaInfo = {
          areaType: 'circle' as const,
          radius: area_effect.area_info.outer_radius,
        };

        weapon.areaEffect.areaInfo = circleAreaInfo;
        break;
      case 'rectangle_area_option':
        const rectangleAreaInfo = {
          areaType: 'rectangle' as const,
          width: area_effect.area_info.width,
          length: area_effect.area_info.outer_length,
        };

        weapon.areaEffect.areaInfo = rectangleAreaInfo;
        break;
    }

    weapon.areaEffect.damageMultiplier.near = area_effect.damage.near;
    weapon.areaEffect.damageMultiplier.mid = area_effect.damage.mid;
    weapon.areaEffect.damageMultiplier.far = area_effect.damage.far;

    weapon.areaEffect.maxMember = area_effect.damage_max_members_per_squad;

    weapon.areaEffect.distance.near = area_effect.distance.near;
    weapon.areaEffect.distance.mid = area_effect.distance.mid;
    weapon.areaEffect.distance.far = area_effect.distance.far;
  }

  if (burst !== undefined) {
    weapon.burst.canBurst = burst.can_burst === 'True' ? true : false;

    weapon.burst.duration.min = burst.duration.min;
    weapon.burst.duration.max = burst.duration.max;

    weapon.burst.durationMultiplier.near = burst.duration_multiplier.near;
    weapon.burst.durationMultiplier.mid = burst.duration_multiplier.mid;
    weapon.burst.durationMultiplier.far = burst.duration_multiplier.far;

    weapon.burst.rateOfFire.min = burst.rate_of_fire.min;
    weapon.burst.rateOfFire.max = burst.rate_of_fire.max;

    weapon.burst.rateOfFireMultiplier.near = burst.rate_of_fire_multiplier.near;
    weapon.burst.rateOfFireMultiplier.mid = burst.rate_of_fire_multiplier.mid;
    weapon.burst.rateOfFireMultiplier.far = burst.rate_of_fire_multiplier.far;
  }

  if (cooldown !== undefined) {
    weapon.cooldown.duration.min = cooldown.duration.min;
    weapon.cooldown.duration.max = cooldown.duration.max;

    weapon.cooldown.durationMultiplier.near = cooldown.duration_multiplier.near;
    weapon.cooldown.durationMultiplier.mid = cooldown.duration_multiplier.mid;
    weapon.cooldown.durationMultiplier.far = cooldown.duration_multiplier.far;
  }

  if (damage !== undefined) {
    weapon.damage.min = damage.min;
    weapon.damage.max = damage.max;

    weapon.damage.damageType = damage.damage_type;
  }

  if (default_attack_type !== undefined) {
    weapon.defaultAttackType = default_attack_type;
  }

  if (deflection !== undefined) {
    weapon.deflection.deflectionDamageMultiplier = deflection.deflection_damage_multiplier;
    weapon.deflection.hasDeflectionDamage = deflection.has_deflection_damage;
  }

  if (fire !== undefined) {
    weapon.fire.windUp = fire.wind_up;
    weapon.fire.windDown = fire.wind_down;
  }

  if (moving !== undefined) {
    weapon.moving.canFireWhileMoving = moving.can_fire_while_moving === 'True' ? true : false;
    weapon.moving.accuracyMultiplier = moving.accuracy_multiplier;
    weapon.moving.cooldownMultiplier = moving.cooldown_multiplier;
    weapon.moving.burstMultiplier = moving.burst_multiplier;
  }

  if (penetration !== undefined) {
    weapon.penetration.near = penetration.near;
    weapon.penetration.mid = penetration.mid;
    weapon.penetration.far = penetration.far;
  }

  if (range !== undefined) {
    weapon.range.min = range.min;
    weapon.range.max = range.max;

    weapon.range.distance.near = range.distance.near;
    weapon.range.distance.mid = range.distance.mid;
    weapon.range.distance.far = range.distance.far;
  }

  if (reload !== undefined) {
    weapon.reload.duration.min = reload.duration.min;
    weapon.reload.duration.max = reload.duration.max;

    if (reload.duration_multiplier !== undefined) {
      weapon.reload.durationMultiplier.near = reload.duration_multiplier.near;
      weapon.reload.durationMultiplier.mid = reload.duration_multiplier.mid;
      weapon.reload.durationMultiplier.far = reload.duration_multiplier.far;
    }

    if (reload.frequency !== undefined) {
      weapon.reload.frequency.min = reload.frequency.min;
      weapon.reload.frequency.max = reload.frequency.max;
    }
  }

  if (scatter !== undefined) {
    weapon.scatter.angle = scatter.angle_scatter;
    weapon.scatter.distanceMax = scatter.distance_scatter_max;
    weapon.scatter.distanceOffset = scatter.distance_scatter_offset;
    weapon.scatter.distanceRatio = scatter.distance_scatter_ratio;
    weapon.scatter.fowAngleMultiplier = scatter.fow_angle_multiplier;
    weapon.scatter.fowDistanceMultiplier = scatter.fow_distance_multiplier;
    weapon.scatter.movementAngleMultiplier = scatter.movement_scatter_angle_multiplier;
    weapon.scatter.movementDistanceMultiplier = scatter.movement_scatter_distance_multiplier;
  }

  if (setup !== undefined) {
    weapon.setup.duration = setup.duration;
  }

  if (suppression !== undefined) {
    weapon.suppression.amount = suppression.amount;
    weapon.suppression.nearbyRadius = suppression.nearby_suppression_radius;
    weapon.suppression.nearbyMultiplier = suppression.nearby_suppression_multiplier;
  }

  if (teardown !== undefined) {
    weapon.teardown.duration = teardown.duration;
  }

  if (tracking !== undefined) {
    weapon.tracking.maxLeftAngle = tracking.normal.max_left;
    weapon.tracking.maxRightAngle = tracking.normal.max_right;
    weapon.tracking.speedHorizontal = tracking.normal.speed_horizontal;
  }

  return weapon;
};
