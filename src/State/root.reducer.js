import { combineReducers } from '@reduxjs/toolkit';
import projectsSlice from './Projects/projects.slice';

const rootReducer = combineReducers({
  projects: projectsSlice.reducer,
});

export default rootReducer;
