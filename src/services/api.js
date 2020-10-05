import axios from "axios";

const api = axios.create({
  // put here your localhost ip
  baseURL: "http://192.168.1.104:3333",
});

export default api;
