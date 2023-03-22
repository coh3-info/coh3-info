import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectWeapon: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string; isLeft: boolean }>> = (
  state,
  action
) => {
  const { id, isLeft } = action.payload;
  if (isLeft) {
    if (state.selectedBookmarkOnLeft !== undefined) {
      state.selectedBookmarkOnLeft.selectedWeaponId = id;
    }
  } else {
    if (state.selectedBookmarkOnRight !== undefined) {
      state.selectedBookmarkOnRight.selectedWeaponId = id;
    }
  }
};

export default selectWeapon;
