import { getSquad } from '../../../../util/game_data/squad/squadsController';
import { getEntity } from '../../../../util/game_data/entity/entitiesController';

import type { PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import type { SquadBookmark } from '../../../../types/bookmark/bookmark';
import type { SquadBookmarkManagerInitialState } from '..';

const addBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ squadId: string }>> = (
  state,
  action
) => {
  const { squadId } = action.payload;
  const squad = getSquad(squadId);

  const entityId = squad?.loadout[0].entityId;
  const entity = getEntity(entityId || '');

  const weaponId = entity?.weapons[0];

  const newBookmark: SquadBookmark = {
    id: `${Date.now()}${state.bookmarkList.length}`,
    squadId,
    selectedEntityId: entityId || '',
    selectedWeaponId: weaponId || '',
  };

  if (state.bookmarkList.length === 0) {
    state.selectedBookmarkOnLeft = newBookmark;
  }

  if (state.bookmarkList.length === 1) {
    state.selectedBookmarkOnRight = newBookmark;
  }

  state.bookmarkList = [...state.bookmarkList, newBookmark];
};

export default addBookmark;
