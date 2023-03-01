import axiosApi from "./axiosConfi";

export const loginRequest = async ({ username, password }) => {
  //DEL INCRESO DEL LOGIN AL ABOUT
  return axiosApi.patch("/api/usuarios", {
    username,
    password,
  });
};