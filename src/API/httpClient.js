import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:5001/api';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  const { data, status } = error.response;
  return Promise.reject(error);
});

const responseBody = (res) => res.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  patch: (url) => axios.patch(url).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const projects = {
  getAll: () => requests.get('/projects'),
};

const user = {
  introduce: () => requests.get('/auth/introduce'),
};

const contact = {
  send: (body) => requests.post('/contact', body),
};

const api = {
  projects,
  user,
  contact,
};

export default api;
