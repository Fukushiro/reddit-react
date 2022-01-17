import axios from 'axios';
const baseUrl: string = 'http://localhost:8000';
const apiReddit = axios.create({
  baseURL: baseUrl,
});

export { apiReddit };
