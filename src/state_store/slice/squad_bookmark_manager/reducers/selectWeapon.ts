import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectWeapon: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<{ id: string; isLeft: boolean }>> = (
  state,
  action
) => {
  const { id, isLeft } = action.payload;
  if (isLeft) {
    if (state.bookmarkOnRight !== undefined) {
      state.bookmarkOnRight.selectedWeaponId = id;
    }
  } else {
    if (state.bookmarkOnRight !== undefined) {
      state.bookmarkOnRight.selectedWeaponId = id;
    }
  }
};

export default selectWeapon;
