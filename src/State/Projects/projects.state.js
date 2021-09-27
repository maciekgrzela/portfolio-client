import { StatusType } from '../StatusType';

export const projectsInitialState = {
  status: {
    createProject: StatusType.INITIAL,
    editProject: StatusType.INITIAL,
    getAllProjects: StatusType.INITIAL,
  },
  projects: [],
  project: null,
};
