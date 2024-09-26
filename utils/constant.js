import { KeyRound, LogOut, UsersRound } from "lucide-react";
import Link from "next/link";

export const AUTH_TOKEN_KEY = "AUTH_TOKEN";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const generateProfileDropdownOptions = (role) => {
  return [
    {
      key: `/dashboard/${role}/profile`,
      label: (
        <Link
          href={`/dashboard/${role}/profile`}
          className="flex items-center gap-2"
        >
          <UsersRound className="size-5" /> Profile
        </Link>
      ),
    },
    {
      key: "/dashboard/change-password",
      label: (
        <Link href="/change-password" className="flex items-center gap-2">
          <KeyRound className="size-5" /> Change Password
        </Link>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "/logout",
      label: (
        <Link href="/logout" className="flex items-center gap-2">
          <LogOut className="size-5" /> Logout
        </Link>
      ),
      danger: true,
    },
  ];
};

export const getUserRoleForRoute = (user) => {
  return `${user?.role === "SUPER_ADMIN" ? "super-admin" : user?.role?.toLowerCase()}`;
};
