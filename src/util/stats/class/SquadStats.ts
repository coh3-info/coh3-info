import EntityStats from './EntityStats';
import { getEntity } from '../../game_data/entity/entitiesController';

import type Squad from '../../../types/game_data/squad';

class SquadStats {
  private readonly data: Squad;
  private readonly loadout: { num: number; entity: EntityStats }[];

  constructor(data: Squad) {
    this.data = data;

    const init: { num: number; entity: EntityStats }[] = [];
    this.loadout = data.loadout.reduce((loadout, loadoutData) => {
      const { num, entityId } = loadoutData;
      const entityData = getEntity(entityId);

      if (entityData === undefined) return loadout;

      return [...loadout, { num, entity: new EntityStats(entityData) }];
    }, init);
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }
}

export default SquadStats;
