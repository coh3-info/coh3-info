import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { SquadBookmarkManagerInitialState } from '..';

const selectWeapon: CaseReducer<
  SquadBookmarkManagerInitialState,
  PayloadAction<{ id: string; position: 'left' | 'right' }>
> = (state, action) => {
  const { id: weaponId, position } = action.payload;
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
    bookmark.selectedWeaponId = weaponId;
  }
};

export default selectWeapon;
