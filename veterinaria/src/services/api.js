import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Cambia si usas otra IP o puerto
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
