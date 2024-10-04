/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { logout } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const logOut = async () => {
    await logout();
    router.push("/login");
  };

  logOut();

  return null;
}
