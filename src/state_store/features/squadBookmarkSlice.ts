import { createSlice } from '@reduxjs/toolkit';
import Squad from '../../game_data/types/Squad';

import tempSquadRiflemenUS from '../../game_data/data/sbps/american/infantry/riflemen_us';
import tempSquadShermenUS from '../../game_data/data/sbps/american/vehicles/sherman_us';

export type Bookmark = {
  squad: Squad;
};

type InitialState = {
  selectedBookmarkOnLeft: Bookmark;
  selectedBookmarkOnRight: Bookmark;
  bookmarkList: Bookmark[];
};

const initialState: InitialState = {
  selectedBookmarkOnLeft: { squad: tempSquadRiflemenUS },
  selectedBookmarkOnRight: { squad: tempSquadShermenUS },
  bookmarkList: [],
};

export const squadBookmarkManagerSlice = createSlice({
  name: 'squadBookmarkManager',
  initialState,
  reducers: {
    addSquad: (state, action) => {
      state.bookmarkList = [...state.bookmarkList, action.payload];
    },
  },
});

export const { addSquad } = squadBookmarkManagerSlice.actions;

export default squadBookmarkManagerSlice.reducer;
