"use server";

import { REFRESH_TOKEN_KEY } from "@/utils/constant";
import { cookies } from "next/headers";

const removeRefreshToken = async () => {
  cookies().delete(REFRESH_TOKEN_KEY);
};

export default removeRefreshToken;
