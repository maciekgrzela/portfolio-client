import httpClient from '../../API/httpClient';
import {
  getAllUsersInfoFailure,
  getAllUsersInfoInit,
  getAllUsersInfoSuccess,
} from './user.slice';

export const introduceUser = () => async (dispatch) => {
  dispatch(getAllUsersInfoInit());
  try {
    const info = await httpClient.user.introduce();
    dispatch(getAllUsersInfoSuccess(info));
  } catch (e) {
    dispatch(getAllUsersInfoFailure());
  }
};
