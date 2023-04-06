import { configureStore } from '@reduxjs/toolkit';
import squadBookmarkManagerReducer from './slice/squad_bookmark_manager';
import gameDataReducer from './slice/game_data';

const store = configureStore({
  reducer: {
    squadBookmarkManager: squadBookmarkManagerReducer,
    gameData: gameDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
