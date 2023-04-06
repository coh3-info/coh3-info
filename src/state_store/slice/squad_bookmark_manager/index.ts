import { createSlice } from '@reduxjs/toolkit';
import _addBookmark from './reducers/addBookmark';
import _removeBookmark from './reducers/removeBookmark';
import _selectBookmark from './reducers/selectBookmark';
import _selectEntity from './reducers/selectEntity';
import _selectWeapon from './reducers/selectWeapon';

import type { SquadBookmark } from '../../../types/bookmark/bookmark';

export type SquadBookmarkManagerInitialState = {
  bookmarkOnLeft: SquadBookmark | undefined;
  bookmarkOnRight: SquadBookmark | undefined;
  bookmarkList: SquadBookmark[];
};

const initialState: SquadBookmarkManagerInitialState = {
  bookmarkOnLeft: undefined,
  bookmarkOnRight: undefined,
  bookmarkList: [],
};

export const squadBookmarkManagerSlice = createSlice({
  name: 'squadBookmarkManager',
  initialState,
  reducers: {
    addBookmark: _addBookmark,
    removeBookmark: _removeBookmark,
    selectBookmark: _selectBookmark,
    selectEntity: _selectEntity,
    selectWeapon: _selectWeapon,
  },
});

export const { addBookmark, removeBookmark, selectBookmark, selectEntity, selectWeapon } =
  squadBookmarkManagerSlice.actions;

export default squadBookmarkManagerSlice.reducer;
