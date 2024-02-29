import axios from 'axios';
const apiUrl = import.meta.env.API_URL;

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
