import axios from 'axios';
const BASE_URL = 'http://localhost:4000/api/';

const API = axios.create({ baseURL: BASE_URL, withCredentials: true });

const api = {
  auth: {
    register: (data) => API.post('/auth/register', data),
    login: (data) => API.post('/auth/login', data),
    forgotPassword: (data) => API.post('/auth/forgotPassword', data),
    resetPassword: (data) => API.post('/auth/', data),
    logout: () => API.get('/auth/logout'),
  },
  clubs: {
    create: (values) => API.post('/club/', values),
    getClub: (page, limit) => API.get(`/club/?page=${page}&limit=${limit}`),
    deleteClub: (id) => API.delete(`/club/${id}`),
  },
  user: {
    changePassword: (data) => API.post('/user/password/change', data),
    edit: (data) => API.put('/user', data),
  },

  universities: {
    list: () => API.get('/university'),
    getUniversity: (id) => API.get(`/university/${id}`),
  },
};

export default api;
