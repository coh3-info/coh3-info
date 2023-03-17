import { configureStore } from '@reduxjs/toolkit';
import squadBookmarkReducer from './features/squadBookmarkSlice';

const store = configureStore({
  reducer: {
    squadBookmark: squadBookmarkReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
