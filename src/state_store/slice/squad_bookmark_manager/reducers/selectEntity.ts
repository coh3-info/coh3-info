import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectEntity: CaseReducer<
  SquadBookmarkManagerInitialState,
  PayloadAction<{ uniqueName: string; isLeft: boolean }>
> = (state, action) => {
  const { uniqueName, isLeft } = action.payload;
  if (isLeft) {
    if (state.selectedBookmarkOnLeft !== undefined) {
      state.selectedBookmarkOnLeft.selectedEntityUniqueName = uniqueName;
    }
  } else {
    if (state.selectedBookmarkOnRight !== undefined) {
      state.selectedBookmarkOnRight.selectedEntityUniqueName = uniqueName;
    }
  }
};

export default selectEntity;
