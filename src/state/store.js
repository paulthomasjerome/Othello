import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './slices/boardSlice.js';

export default configureStore({
  reducer: {
    board: boardReducer,
  },
});
