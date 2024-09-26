"use client";

import { Avatar, Dropdown, Skeleton } from "antd";
import { KeyRound, LogOut, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserProfile({ user, isLoading }) {
  const pathname = usePathname();
  const role = `${user?.role === "SUPER_ADMIN" ? "super-admin" : user?.role?.toLowerCase()}`;
  const items = [
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
        <Link
          href="/dashboard/change-password"
          className="flex items-center gap-2"
        >
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

  const selected = items.find((item) => item.key === pathname)?.key;

  return (
    <>
      {isLoading ? (
        <div className="flex w-40 cursor-pointer items-center gap-2 rounded-md border p-1 px-2">
          <Skeleton.Avatar active />
          <div className="space-y-1 pr-2">
            <p className="h-3.5 w-16 animate-pulse rounded-sm bg-gray-200"></p>
            <p className="h-2.5 w-24 animate-pulse rounded-sm bg-gray-200"></p>
          </div>
        </div>
      ) : (
        <Dropdown
          menu={{
            items,
            selectable: true,
            autoFocus: true,
            defaultSelectedKeys: [selected],
          }}
          placement="bottomRight"
          className="max-sm:hidden"
        >
          <div
            className="flex cursor-pointer items-center gap-2 rounded-md border p-1"
            onClick={(e) => e.preventDefault()}
          >
            <Avatar src={user?.profilePhoto} />
            <div className="pr-2">
              <p className="text-start text-xs font-semibold text-gray-700">
                {user?.name}
              </p>
              <p className="text-start text-xs font-medium text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>
        </Dropdown>
      )}
    </>
  );
}
