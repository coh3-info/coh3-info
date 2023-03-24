import _entities from './entities';

const entities = new Map(
  _entities.map((entity) => {
    return [entity.id, entity];
  })
);

export const getEntity = (id: string | undefined) => {
  const entity = entities.get(id ?? '');

  if (entity === undefined) {
    console.error(new Error(`해당id의 entity를 찾을 수 없습니다. entity id: ${id}`));
    return undefined;
  }

  return entity;
};

export const getWeaponsForEntity = (entityId: string) => {
  const entity = getEntity(entityId);

  if (entity === undefined) return [];

  return entity.weapons;
};
