import { storeUserInfo } from "./auth";
import { BASE_URL } from "./constant";
import setAccessToken from "@/actions/setAccessToken";

const userLogin = async (payload) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const loginResponse = await response.json();

  const { accessToken, needPasswordChange } = loginResponse?.data;

  if (accessToken) {
    storeUserInfo(accessToken);
    setAccessToken(accessToken, { needPasswordChange, redirect: "/dashboard" });
  }

  return loginResponse;
};

export default userLogin;
