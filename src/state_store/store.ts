import { configureStore } from '@reduxjs/toolkit';
import squadBookmarkManagerReducer from './slice/squad_bookmark_manager';

const store = configureStore({
  reducer: {
    squadBookmarkManager: squadBookmarkManagerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
