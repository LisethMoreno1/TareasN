import axiosApi from "./axiosConfi";

export const loginRequest = async ({ username, password }) => {
  return axiosApi.patch("/api/usuarios", {
    username,
    password,
  });
};