import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const removeBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string }>> = (
  state,
  action
) => {
  const { id } = action.payload;
  const bookmarkListWithoutBookmarkOfId = state.bookmarkList.filter((bookmark) => {
    return bookmark.id !== id;
  });

  if (state.bookmarkIdOnLeft === id) {
    state.bookmarkIdOnLeft = '';
  } else if (state.bookmarkIdOnRight === id) {
    state.bookmarkIdOnRight = '';
  }

  state.bookmarkList = bookmarkListWithoutBookmarkOfId;
};

export default removeBookmark;
