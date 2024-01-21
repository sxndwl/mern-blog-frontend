import axios from "axios";
import { useLocalHost } from "./config";

const instance = axios.create({
  baseURL: useLocalHost ? "http://localhost:4444/" : "/api", // Изменил baseURL
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;
