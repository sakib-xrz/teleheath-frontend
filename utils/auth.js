import { jwtDecode } from "jwt-decode";
import { AUTH_TOKEN_KEY, BASE_URL } from "./constant";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "./localStorage";
import axiosInstance from "@/helpers/axiosInstance";

export const storeUserInfo = (token) => {
  return setToLocalStorage(AUTH_TOKEN_KEY, token);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(AUTH_TOKEN_KEY);

  if (accessToken) {
    const userData = jwtDecode(accessToken);
    return userData;
  } else {
    return null;
  }
};

export const isUserLoggedIn = () => {
  const accessToken = getFromLocalStorage(AUTH_TOKEN_KEY);

  if (accessToken) {
    return true;
  } else {
    return false;
  }
};

export const removeUserInfo = () => {
  return removeFromLocalStorage(AUTH_TOKEN_KEY);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${BASE_URL}/auth/refresh-token`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
