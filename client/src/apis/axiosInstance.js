import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/ai_bot_api/",
  timeout: 1000,
});
