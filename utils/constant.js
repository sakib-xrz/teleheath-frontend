import {
  BriefcaseMedical,
  ChartPie,
  KeyRound,
  LogOut,
  UserRoundCog,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
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
      key: "/change-password",
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

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const getSidebarItems = (role) => {
  const SUPER_ADMIN = [
    getItem("Dashboard", "/dashboard/super-admin", <ChartPie />),
    getItem("Admins", "/dashboard/super-admin/admins", <UserRoundCog />),
    getItem("Doctors", "/dashboard/super-admin/doctors", <BriefcaseMedical />),
    getItem("Patients", "/dashboard/super-admin/patients", <UserRoundPlus />),
    getItem("Users", "/dashboard/super-admin/users", <UsersRound />),
  ];

  switch (role) {
    case "SUPER_ADMIN":
      return SUPER_ADMIN;
    // case "ADMIN":
    //   return SUPER_ADMIN.slice(1);
    // case "DOCTOR":
    //   return [
    //     getItem("Dashboard", "/doctor/dashboard", <ChartPie />),
    //     getItem("Patients", "/doctor/patients", <UserRoundPlus />),
    //   ];
    // case "PATIENT":
    //   return [
    //     getItem("Dashboard", "/patient/dashboard", <ChartPie />),
    //     getItem("Doctors", "/patient/doctors", <BriefcaseMedical />),
    //   ];
    default:
      return [];
  }
};
