import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectWeapon: CaseReducer<
  SquadBookmarkManagerInitialState,
  PayloadAction<{ id: string; position: 'left' | 'right' }>
> = (state, action) => {
  const { id: weaponId, position } = action.payload;
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
    bookmark.selectedWeaponId = weaponId;
  }
};

export default selectWeapon;
