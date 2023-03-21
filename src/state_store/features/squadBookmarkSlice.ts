import { createSlice } from '@reduxjs/toolkit';
import Squad from '../../types/game_data/squad';

import type { PayloadAction } from '@reduxjs/toolkit';

export type Bookmark = {
  id: string;
  squad: Squad;
  selectedEntityUniqueName: string;
};

type InitialState = {
  selectedBookmarkOnLeft: Bookmark | undefined;
  selectedBookmarkOnRight: Bookmark | undefined;
  bookmarkList: Bookmark[];
};

const initialState: InitialState = {
  selectedBookmarkOnLeft: undefined,
  selectedBookmarkOnRight: undefined,
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
        selectedEntityUniqueName: action.payload.squad.entities[0]?.entity.uniqueName,
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

    selectEntity: (state, action: PayloadAction<{ uniqueName: string; isLeft: boolean }>) => {
      const { uniqueName, isLeft } = action.payload;
      if (isLeft) {
        if (state.selectedBookmarkOnLeft !== undefined) {
          state.selectedBookmarkOnLeft.selectedEntityUniqueName = uniqueName;
        }
      } else {
        if (state.selectedBookmarkOnRight !== undefined) {
          state.selectedBookmarkOnRight.selectedEntityUniqueName = uniqueName;
        }
      }
    },
  },
});

export const { addBookmark, removeBookmark, selectBookmark, selectEntity } = squadBookmarkManagerSlice.actions;

export default squadBookmarkManagerSlice.reducer;
