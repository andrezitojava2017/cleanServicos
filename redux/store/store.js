import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});
