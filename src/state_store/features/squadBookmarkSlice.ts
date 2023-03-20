import { createSlice } from '@reduxjs/toolkit';
import Squad from '../../game_data/types/Squad';

import type { PayloadAction } from '@reduxjs/toolkit';

import tempSquadRiflemenUS from '../../game_data/data/sbps/american/infantry/riflemen_us';
import tempSquadShermenUS from '../../game_data/data/sbps/american/vehicles/sherman_us';

export type Bookmark = {
  id: string;
  squad: Squad;
};

type InitialState = {
  selectedBookmarkOnLeft: Bookmark | null;
  selectedBookmarkOnRight: Bookmark | null;
  bookmarkList: Bookmark[];
};

const initialState: InitialState = {
  selectedBookmarkOnLeft: null,
  selectedBookmarkOnRight: null,
  bookmarkList: [],
};

export const squadBookmarkManagerSlice = createSlice({
  name: 'squadBookmarkManager',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<{ squad: Squad }>) => {
      const newBookmark: Bookmark = {
        id: `${Date.now()}${state.bookmarkList.length}`,
        squad: action.payload.squad,
      };

      if (state.bookmarkList.length === 0) {
        state.selectedBookmarkOnLeft = newBookmark;
      }

      if (state.bookmarkList.length === 1) {
        state.selectedBookmarkOnRight = newBookmark;
      }

      state.bookmarkList = [...state.bookmarkList, newBookmark];
    },

    removeBookmark: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const bookmarkListWithoutBookmarkOfId = state.bookmarkList.filter((bookmark) => {
        return bookmark.id !== id;
      });

      state.bookmarkList = bookmarkListWithoutBookmarkOfId;
    },

    selectBookmark: (state, action: PayloadAction<{ id: string; isLeft: boolean }>) => {
      const { id, isLeft } = action.payload;
      const bookmark = state.bookmarkList.find((bookmark) => {
        return bookmark.id === id;
      });

      if (bookmark === undefined) {
        console.error('해당 id의 bookmark가 존재하지 않습니다.');
      } else if (isLeft) {
        state.selectedBookmarkOnLeft = bookmark;
      } else {
        state.selectedBookmarkOnRight = bookmark;
      }
    },
  },
});

export const { addBookmark, removeBookmark, selectBookmark } = squadBookmarkManagerSlice.actions;

export default squadBookmarkManagerSlice.reducer;
