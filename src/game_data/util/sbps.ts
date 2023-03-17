import type Squad from '../types/Squad';

export const getEntities = (squad: Squad) => {
  return squad.entities.map((e) => {
    return e.entity;
  });
};
