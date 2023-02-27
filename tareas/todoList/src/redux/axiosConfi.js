import axios from "axios";
const axiosApi = axios.create({
  baseURL: "http://localhost:8500",
  // withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
export default axiosApi;
