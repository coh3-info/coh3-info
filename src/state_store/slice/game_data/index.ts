import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Sbps } from '../../../types/game_data/squad';

type GameDataInitialState = {
  sbps: Sbps;
};

const initialState: GameDataInitialState = {
  sbps: {},
};

const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {
    setSbps(state, action: PayloadAction<{ sbps: Sbps }>) {
      state.sbps = action.payload.sbps;
    },
  },
});

export const { setSbps } = gameDataSlice.actions;

export default gameDataSlice.reducer;
