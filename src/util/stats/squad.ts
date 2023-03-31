import Unit from '../../types/game_data/unit';

export const getSquadResource = (unit: Unit) => {
  const initResource = {
    fuel: 0,
    manpower: 0,
    time: 0,
    pop: unit.squad.population.personnelPop,
  };

  const resource = unit.loadout.reduce((resource, loadoutData) => {
    const { num, entity } = loadoutData;
    const { fuel, manpower, time } = entity.cost;
    let pop = 0;

    if (entity.category !== 'weapon') {
      pop = entity.population.personnelPop;
    }

    return {
      fuel: resource.fuel + fuel * num,
      manpower: resource.manpower + manpower * num,
      time: resource.time + time * num,
      pop: resource.pop + pop * num,
    };
  }, initResource);

  return {
    fuel: Math.round(resource.fuel),
    manpower: Math.round(resource.manpower),
    time: Math.round(resource.time),
    pop: Math.round(resource.pop),
  };
};
