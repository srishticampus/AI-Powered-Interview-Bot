import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/ai_bot_api/",
});

export const BACKEND_URL = "http://127.0.0.1:8000"
