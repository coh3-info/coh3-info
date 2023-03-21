import type Squad from '../types/game_data/squad';

export const getEntities = (squad: Squad) => {
  return squad.entities.map((entity) => {
    return entity.entity;
  });
};

export const getEntity = (squad: Squad, entityUniqueName: string) => {
  return squad.entities.find((entity) => {
    return entity.entity.uniqueName === entityUniqueName;
  })?.entity;
};