import axiosInstance from "@/helpers/axiosInstance";
import { storeUserInfo } from "./auth";
import { BASE_URL } from "./constant";
import setAccessToken from "@/actions/setAccessToken";

const userLogin = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${BASE_URL}/auth/login`,
      payload,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    if (response?.statusCode === 200) {
      const { accessToken, needPasswordChange } = response?.data || {};

      if (accessToken) {
        storeUserInfo(accessToken);
        setAccessToken(accessToken, {
          needPasswordChange,
          redirect: "/dashboard",
        });
      }
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export default userLogin;
