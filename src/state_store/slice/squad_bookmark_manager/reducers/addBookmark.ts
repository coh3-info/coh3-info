import type { PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import type { SquadBookmark } from '../../../../types/bookmark/bookmark';
import type { SquadBookmarkManagerInitialState } from '..';
import type Unit from '../../../../types/game_data/unit';

interface Payload {
  unit: Unit;
}

const addBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<Payload>> = (state, action) => {
  const { unit } = action.payload;

  const newBookmark: SquadBookmark = {
    id: `${Date.now()}${state.bookmarkList.length}`,
    unit,
    selectedEntityId: '',
    selectedWeaponId: '',
  };

  if (state.bookmarkList.length === 0) {
    state.bookmarkOnLeft = newBookmark;
  }

  if (state.bookmarkList.length === 1) {
    state.bookmarkOnRight = newBookmark;
  }

  state.bookmarkList = [...state.bookmarkList, newBookmark];
};

export default addBookmark;
