import type Squad from '../../../../types/game_data/squad';
import type { PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import type { SquadBookmark } from '../../../../types/bookmark/bookmark';
import type { SquadBookmarkManagerInitialState } from '..';

const addBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ squad: Squad }>> = (state, action) => {
  const newBookmark: SquadBookmark = {
    id: `${Date.now()}${state.bookmarkList.length}`,
    squad: action.payload.squad,
    selectedEntityUniqueName: action.payload.squad.entities[0]?.entity.uniqueName,
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
