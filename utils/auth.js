import { jwtDecode } from "jwt-decode";
import { AUTH_TOKEN_KEY } from "./constant";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "./localStorage";

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