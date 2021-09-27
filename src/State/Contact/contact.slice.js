import { createSlice } from '@reduxjs/toolkit';
import { StatusType } from '../StatusType';
import { contactInitialState } from './contact.state';

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    sendContactRequestInit: (state) => {
      state.status.sendContactRequest = StatusType.LOADING;
    },
    sendContactRequestSuccess: (state) => {
      state.status.sendContactRequest = StatusType.SUCCESS;
    },
    sendContactRequestFailure: (state) => {
      state.status.sendContactRequest = StatusType.FAILED;
    },
  },
});

export const {
  sendContactRequestInit,
  sendContactRequestSuccess,
  sendContactRequestFailure,
} = contactSlice.actions;

export default contactSlice;
