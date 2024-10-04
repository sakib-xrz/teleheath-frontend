/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import removeAccessToken from "@/actions/removeAccessToken";
import Logo from "@/components/icon/Logo";
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

  return (
    <div className="flex h-screen animate-pulse items-center justify-center gap-2">
      <Logo className={"size-6"} />
      <p className="text-xl font-bold text-primary">Logging out...</p>
    </div>
  );
}
