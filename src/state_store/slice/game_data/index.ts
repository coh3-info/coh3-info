import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ebps } from '../../../types/game_data/entity';

import type { Sbps } from '../../../types/game_data/squad';
import { Weapons } from '../../../types/game_data/weapon';

type GameDataInitialState = {
  sbps: Sbps;
  ebps: Ebps;
  weapons: Weapons;
};

const initialState: GameDataInitialState = {
  sbps: {},
  ebps: {},
  weapons: {},
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
    setWeapons(state, action: PayloadAction<{ weapons: Weapons }>) {
      state.weapons = action.payload.weapons;
    },
  },
});

export const { setSbps, setEbps, setWeapons } = gameDataSlice.actions;

export default gameDataSlice.reducer;
