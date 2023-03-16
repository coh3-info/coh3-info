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

export const selectorSlice = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    addSquad: (state, action) => {
      console.log(action.payload);
      state.squadList = [...state.squadList, action.payload];
    },
  },
});

export const { addSquad } = selectorSlice.actions;

export default selectorSlice.reducer;
