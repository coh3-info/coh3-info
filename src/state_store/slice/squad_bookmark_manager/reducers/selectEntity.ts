import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectEntity: CaseReducer<
  SquadBookmarkManagerInitialState,
  PayloadAction<{ id: string; position: 'left' | 'right' }>
> = (state, action) => {
  const { id, position } = action.payload;
  switch (position) {
    case 'left':
      if (state.bookmarkOnLeft !== undefined) {
        state.bookmarkOnLeft.selectedEntityId = id;
      }
      break;
    case 'right':
      if (state.bookmarkOnRight !== undefined) {
        state.bookmarkOnRight.selectedEntityId = id;
      }
      break;
  }
};

export default selectEntity;
