import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: '',
  },
  reducers: {
    setUserList(state, {payload}) {
      return {...state, list: payload};
    },
  },
});

export const {setUserList} = usersSlice.actions;
export const selectUser = state => state.users;
export default usersSlice.reducer;
