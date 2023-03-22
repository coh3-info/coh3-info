import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectEntity: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string; isLeft: boolean }>> = (
  state,
  action
) => {
  const { id, isLeft } = action.payload;
  if (isLeft) {
    if (state.selectedBookmarkOnLeft !== undefined) {
      state.selectedBookmarkOnLeft.selectedEntityId = id;
    }
  } else {
    if (state.selectedBookmarkOnRight !== undefined) {
      state.selectedBookmarkOnRight.selectedEntityId = id;
    }
  }
};

export default selectEntity;
