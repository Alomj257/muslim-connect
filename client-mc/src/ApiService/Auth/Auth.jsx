import Axios from "../Axios";

export const registerUserService = async (data) =>
  await Axios.post("/auth/register", data);
export const loginService = async (data) =>
  await Axios.post("/auth/login", data);
//  forget
export const sendOtpService = async (data) =>
  await Axios.post("/auth/users/forget", data);
export const verifyOtpService = async (data) =>
  await Axios.post("/auth/users/verify", data);
export const setPasswordService = async (data) =>
  await Axios.post("/auth/users/update/password", data);
export const makePayment = async (data) =>
  await Axios.post("/sessions/gig/session/", data);
