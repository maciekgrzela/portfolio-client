import {
  sendContactRequestFailure,
  sendContactRequestInit,
  sendContactRequestSuccess,
} from './contact.slice';
import httpClient from '../../API/httpClient';

export const sendContact = (body) => async (dispatch) => {
  dispatch(sendContactRequestInit());
  try {
    await httpClient.contact.send(body);
    dispatch(sendContactRequestSuccess());
  } catch (e) {
    dispatch(sendContactRequestFailure());
  }
};
