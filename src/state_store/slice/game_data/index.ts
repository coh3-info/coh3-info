import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ebps } from '../../../types/game_data/entity';

import type { Sbps } from '../../../types/game_data/squad';
import { Weapons } from '../../../types/game_data/weapon';

type GameDataInitialState = {
  sbps: Sbps;
  ebps: Ebps;
  weapons: Weapons;
  isDoneSbps: boolean;
  isDoneEbps: boolean;
  isDoneWeapons: boolean;
  isDoneAll: boolean;
};

const initialState: GameDataInitialState = {
  sbps: {},
  ebps: {},
  weapons: {},
  isDoneSbps: false,
  isDoneEbps: false,
  isDoneWeapons: false,
  isDoneAll: false,
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
    doneSbps(state) {
      state.isDoneSbps = true;
    },
    doneEbps(state) {
      state.isDoneEbps = true;
    },
    doneWeapons(state) {
      state.isDoneWeapons = true;
    },
    doneAll(state) {
      state.isDoneAll = true;
    },
  },
});

export const { setSbps, setEbps, setWeapons, doneSbps, doneEbps, doneWeapons, doneAll } = gameDataSlice.actions;

export default gameDataSlice.reducer;
