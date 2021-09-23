import {
  getAllProjectsFailure,
  getAllProjectsInit,
  getAllProjectsSuccess,
} from './projects.slice';
import httpClient from '../../API/httpClient';

export const getAllProjects = () => async (dispatch) => {
  dispatch(getAllProjectsInit());
  try {
    const projects = await httpClient.projects.getAll();
    dispatch(getAllProjectsSuccess(projects));
  } catch (e) {
    dispatch(getAllProjectsFailure());
  }
};
