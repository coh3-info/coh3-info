import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectEntity: CaseReducer<
  SquadBookmarkManagerInitialState,
  PayloadAction<{ id: string; position: 'left' | 'right' }>
> = (state, action) => {
  const { id: entityId, position } = action.payload;

  let bookmark;
  switch (position) {
    case 'left':
      bookmark = state.bookmarkList.find((bookmark) => bookmark.id === state.bookmarkIdOnLeft);
      break;
    case 'right':
      bookmark = state.bookmarkList.find((bookmark) => bookmark.id === state.bookmarkIdOnRight);
      break;
  }

  if (bookmark !== undefined) {
    bookmark.selectedEntityId = entityId;
  }
};

export default selectEntity;
