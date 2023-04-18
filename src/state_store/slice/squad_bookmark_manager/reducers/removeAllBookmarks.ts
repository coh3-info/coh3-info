import { CaseReducer } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const removeAllBookmarks: CaseReducer<SquadBookmarkManagerInitialState> = (state) => {
  state.bookmarkList = [];
};

export default removeAllBookmarks;
