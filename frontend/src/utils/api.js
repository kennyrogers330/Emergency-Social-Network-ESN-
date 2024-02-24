import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fse-rw-s24-rw1-backend.onrender.com/api/v1/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
