import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string; isLeft: boolean }>> = (
  state,
  action
) => {
  const { id, isLeft } = action.payload;
  const bookmark = state.bookmarkList.find((bookmark) => {
    return bookmark.id === id;
  });

  if (bookmark === undefined) {
    console.error('해당 id의 bookmark가 존재하지 않습니다.');
  } else if (isLeft) {
    state.selectedBookmarkOnLeft = bookmark;
  } else {
    state.selectedBookmarkOnRight = bookmark;
  }
};

export default selectBookmark;
