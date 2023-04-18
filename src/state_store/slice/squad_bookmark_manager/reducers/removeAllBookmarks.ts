import { CaseReducer } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const removeAllBookmarks: CaseReducer<SquadBookmarkManagerInitialState> = (state) => {
  state.bookmarkList = [];
  state.bookmarkIdOnLeft = '';
  state.bookmarkIdOnRight = '';
};

export default removeAllBookmarks;
