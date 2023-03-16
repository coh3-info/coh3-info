import { configureStore } from '@reduxjs/toolkit';
import selectorReducer from './features/selectorSlice';

const store = configureStore({
  reducer: {
    selector: selectorReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
