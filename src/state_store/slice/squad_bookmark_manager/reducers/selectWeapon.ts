import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectWeapon: CaseReducer<
  SquadBookmarkManagerInitialState,
  PayloadAction<{ id: string; position: 'left' | 'right' }>
> = (state, action) => {
  const { id, position } = action.payload;
  switch (position) {
    case 'left':
      if (state.bookmarkOnLeft !== undefined) {
        state.bookmarkOnLeft.selectedWeaponId = id;
      }
      break;
    case 'right':
      if (state.bookmarkOnRight !== undefined) {
        state.bookmarkOnRight.selectedWeaponId = id;
      }
      break;
  }
};

export default selectWeapon;
