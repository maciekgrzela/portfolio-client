import { createSlice } from '@reduxjs/toolkit';
import { StatusType } from '../StatusType';
import { projectsInitialState } from './projects.state';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectsInitialState,
  reducers: {
    getAllProjectsInit: (state) => {
      state.status.getAllProjects = StatusType.LOADING;
    },
    getAllProjectsSuccess: (state, action) => {
      state.status.getAllProjects = StatusType.SUCCESS;
      state.projects = action.payload;
    },
    getAllProjectsFailure: (state) => {
      state.status.getAllProjects = StatusType.FAILED;
    },
  },
});

export const {
  getAllProjectsInit,
  getAllProjectsSuccess,
  getAllProjectsFailure,
} = projectsSlice.actions;

export default projectsSlice;
