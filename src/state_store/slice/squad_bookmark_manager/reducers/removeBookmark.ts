import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const removeBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string }>> = (
  state,
  action
) => {
  const { id } = action.payload;
  const { bookmarkList, bookmarkIdOnLeft, bookmarkIdOnRight } = state;
  const bookmarkListWithoutBookmarkOfId = bookmarkList.filter((bookmark) => {
    return bookmark.id !== id;
  });

  state.bookmarkList = bookmarkListWithoutBookmarkOfId;

  if (bookmarkIdOnLeft === id) {
    state.bookmarkIdOnLeft = '';
  } else if (bookmarkIdOnRight === id) {
    state.bookmarkIdOnRight = '';
  }
};

export default removeBookmark;
