import { paths } from "../constants";
import { api } from "./axios";

export const AuthApi = {
  isLoggedIn: () => {
    return !!localStorage.getItem("token");
  },
  logOut: () => localStorage.clear(),
  login: (userName, password, fcm) =>
    api.post(paths.auth.login, { userName, password, fcm }),
  signup: (data) => api.post(paths.auth.signup, data),
  getAllUsers: () => api.get("/api/user"),
};
