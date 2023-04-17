import type { Squad } from '../../types/game_data/squad';
import type { Entity } from '../../types/game_data/entity';
import type { SquadStats } from '../../types/stats/squadStats';
import type { WeaponEntity } from '../../types/game_data/entity';
import type { UnitLoadout } from '../../types/game_data/unit';

const calcHitpoints = (entities: (Entity | WeaponEntity)[]) => {
  return 0;
};

const getCost = (squad: Squad, loadout: UnitLoadout, entities: (Entity | WeaponEntity)[]) => {
  const initCost = {
    fuel: 0,
    manpower: 0,
    time: 0,
    population: squad.population.personnelPop,
  };

  const cost = loadout.reduce((acc, loadoutData) => {
    const { num, entityId } = loadoutData;
    const { fuel: accFuel, manpower: accManpower, time: accTime, population: accPopulation } = acc;

    const entity = entities.find((e) => e.id === entityId);
    if (entity === undefined) return acc;

    const { fuel, manpower, time } = entity.cost;
    const population = entity.population.personnelPop;

    return {
      fuel: accFuel + fuel * num,
      manpower: accManpower + manpower * num,
      time: accTime + time * num,
      population: accPopulation + population * num,
    };
  }, initCost);

  return {
    fuel: Math.round(cost.fuel),
    manpower: Math.round(cost.manpower),
    time: Math.round(cost.time),
    population: Math.round(cost.population),
  };
};

export const createSquadStats = (
  squad: Squad,
  loadout: UnitLoadout,
  entities: (Entity | WeaponEntity)[]
): SquadStats => {
  const {
    id,
    name,
    nameKO,
    category,
    race,
    imageUrl,
    captureStrategicPoint: { captureRateMutiplier, revertRateMutiplier },
  } = squad;

  return {
    id,
    name,
    nameKO,
    category,
    race,
    imageUrl,
    captureRate: {
      capture: captureRateMutiplier,
      revert: revertRateMutiplier,
    },
    hitpoints: calcHitpoints(entities),
    cost: getCost(squad, loadout, entities),
  };
};
