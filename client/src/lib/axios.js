import axios from "axios";

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: "https://tradingjournal-app-fayizpachu.onrender.com/api",

  withCredentials: true,
});
