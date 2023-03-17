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

export const squadSelectorSlice = createSlice({
  name: 'squadSelector',
  initialState,
  reducers: {
    addSquad: (state, action) => {
      state.squadList = [...state.squadList, action.payload];
    },
  },
});

export const { addSquad } = squadSelectorSlice.actions;

export default squadSelectorSlice.reducer;
