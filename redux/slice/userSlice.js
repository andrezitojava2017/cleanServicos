import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const {setUserList} = usersSlice.actions;

export default usersSlice.reducer;

export const getUsers = () => dispatch => {
  dispatch(setUserList(['data', 'evento']));
};
