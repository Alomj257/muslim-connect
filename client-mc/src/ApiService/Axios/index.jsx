import axios from "axios";

const Axios = axios.create({ baseURL: "" });
export const baseUrl = "http://localhost:7000/api";
export default Axios;
