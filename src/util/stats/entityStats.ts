import type Entity from '../../types/game_data/entity';
import type { WeaponEntity } from '../../types/game_data/entity';
import type Squad from '../../types/game_data/squad';
import type EntityStats from '../../types/stats/entityStats';

const calcReinforce = (base: number, multiplier: number): number => {
  return Math.round(base * multiplier);
};

export const createEntityStats = (entity: Entity | WeaponEntity, belongsTo: Squad): EntityStats => {
  const {
    reinforce: { costPercentage, timePercentage },
  } = belongsTo;

  const {
    id,
    category,
    cost: { manpower, time },
    health: { armor, hitpoints, targetSize },
    moving,
    sight: { detectCamouflage, sightPackage },
  } = entity;
  return {
    id,
    category,
    reinforce: {
      manpower: calcReinforce(manpower, costPercentage),
      time: calcReinforce(time, timePercentage),
    },
    armor,
    hitpoints,
    targetSize,
    moving,
    detect: detectCamouflage,
    sightRadius: sightPackage.outerRadius,
  };
};
