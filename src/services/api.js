import axios from "axios";

const api = axios.create({
  baseURL: "https://upload-api-pqisivofra.now.sh"
});

export default api;