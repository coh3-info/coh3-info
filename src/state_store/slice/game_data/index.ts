import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ebps } from '../../../types/game_data/entity';

import type { Sbps } from '../../../types/game_data/squad';

type GameDataInitialState = {
  sbps: Sbps;
  ebps: Ebps;
};

const initialState: GameDataInitialState = {
  sbps: {},
  ebps: {},
};

const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {
    setSbps(state, action: PayloadAction<{ sbps: Sbps }>) {
      state.sbps = action.payload.sbps;
    },
    setEbps(state, action: PayloadAction<{ ebps: Ebps }>) {
      state.ebps = action.payload.ebps;
    },
  },
});

export const { setSbps, setEbps } = gameDataSlice.actions;

export default gameDataSlice.reducer;
