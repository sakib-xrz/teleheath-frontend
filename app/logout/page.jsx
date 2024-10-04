/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import removeAccessToken from "@/actions/removeAccessToken";
import { logout, removeUserInfo } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const logOut = async () => {
      await logout();
      await removeAccessToken();
      removeUserInfo();
      router.push("/login");
    };

    logOut();
  }, []);

  return null;
}
