import { combineReducers } from '@reduxjs/toolkit';
import contactSlice from './Contact/contact.slice';
import projectsSlice from './Projects/projects.slice';
import usersSlice from './User/user.slice';

const rootReducer = combineReducers({
  projects: projectsSlice.reducer,
  users: usersSlice.reducer,
  contact: contactSlice.reducer,
});

export default rootReducer;
