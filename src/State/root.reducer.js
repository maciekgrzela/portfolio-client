import { combineReducers } from '@reduxjs/toolkit';
import projectsSlice from './Projects/projects.slice';
import usersSlice from './User/user.slice';

const rootReducer = combineReducers({
  projects: projectsSlice.reducer,
  users: usersSlice.reducer,
});

export default rootReducer;
