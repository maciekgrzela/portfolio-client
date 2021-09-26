import { createSlice } from '@reduxjs/toolkit';
import { StatusType } from '../StatusType';
import { usersInitialState } from './user.state';

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getAllUsersInfoInit: (state) => {
      state.status.getAllUsersInfo = StatusType.LOADING;
    },
    getAllUsersInfoSuccess: (state, action) => {
      state.status.getAllUsersInfo = StatusType.SUCCESS;
      state.info = action.payload;
    },
    getAllUsersInfoFailure: (state) => {
      state.status.getAllUsersInfo = StatusType.FAILED;
    },
  },
});

export const {
  getAllUsersInfoInit,
  getAllUsersInfoSuccess,
  getAllUsersInfoFailure,
} = usersSlice.actions;

export default usersSlice;
