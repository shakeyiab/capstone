import axios from 'axios';

// Base URL of the backend
const API = axios.create({
  baseURL: 'http://localhost:5000', // Adjust this to your backend URL
});

export const fetchMessage = () => API.get('/api/message');
