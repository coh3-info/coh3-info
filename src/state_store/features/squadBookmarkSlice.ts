import { createSlice } from '@reduxjs/toolkit';

type SquadInSelector = {
  uniqueName: string;
  name: string;
};

type InitialState = {
  squadList: SquadInSelector[];
};

const initialState: InitialState = {
  squadList: [],
};

export const squadBookmarkManagerSlice = createSlice({
  name: 'squadBookmarkManager',
  initialState,
  reducers: {
    addSquad: (state, action) => {
      state.squadList = [...state.squadList, action.payload];
    },
  },
});

export const { addSquad } = squadBookmarkManagerSlice.actions;

export default squadBookmarkManagerSlice.reducer;
