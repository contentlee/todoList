import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

http.interceptors.request.use(<T>(config: T): T => {
  return config;
});

http.interceptors.response.use(<T>(config: T): T => {
  return config;
});
