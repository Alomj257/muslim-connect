import Axios from "../Axios";

export const registerUserService = async (data) =>
  await Axios.post("/auth/register", data);
export const loginService = async (data) =>
  await Axios.post("/auth/login", data);
