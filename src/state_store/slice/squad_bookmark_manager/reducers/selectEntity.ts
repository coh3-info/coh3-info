import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectEntity: CaseReducer<
  SquadBookmarkManagerInitialState,
  PayloadAction<{ id: string; position: 'left' | 'right' }>
> = (state, action) => {
  const { id: entityId, position } = action.payload;
  const { bookmarkList, bookmarkIdOnLeft, bookmarkIdOnRight } = state;

  let bookmark;
  switch (position) {
    case 'left':
      bookmark = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnLeft);
      break;
    case 'right':
      bookmark = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnRight);
      break;
  }

  if (bookmark !== undefined) {
    bookmark.selectedEntityId = entityId;
  }
};

export default selectEntity;
