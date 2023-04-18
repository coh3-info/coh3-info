import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string; isLeft: boolean }>> = (
  state,
  action
) => {
  const { id, isLeft } = action.payload;

  if (isLeft) {
    state.bookmarkIdOnLeft = id;
  } else {
    state.bookmarkIdOnRight = id;
  }
};

export default selectBookmark;
