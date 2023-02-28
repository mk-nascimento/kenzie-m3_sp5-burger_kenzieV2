import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hamburgueria-kenzie-v2.herokuapp.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
