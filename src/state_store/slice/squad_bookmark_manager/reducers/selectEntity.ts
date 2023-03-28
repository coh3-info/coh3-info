import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectEntity: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string; isLeft: boolean }>> = (
  state,
  action
) => {
  const { id, isLeft } = action.payload;
  if (isLeft) {
    if (state.bookmarkOnLeft !== undefined) {
      state.bookmarkOnLeft.selectedEntityId = id;
    }
  } else {
    if (state.bookmarkOnRight !== undefined) {
      state.bookmarkOnRight.selectedEntityId = id;
    }
  }
};

export default selectEntity;
