import axios from "axios";

const api = axios.create({
  baseURL: "http://52.23.248.100:5000"
});

export default api;