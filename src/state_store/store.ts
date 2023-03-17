import { configureStore } from '@reduxjs/toolkit';
import squadSelectorReducer from './features/squadSelectorSlice';

const store = configureStore({
  reducer: {
    squadSelector: squadSelectorReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
