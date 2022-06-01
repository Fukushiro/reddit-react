import axios from "axios";
export const baseUrl: string = "http://localhost:8000";
const apiReddit = axios.create({
  baseURL: baseUrl,
});

export { apiReddit };
