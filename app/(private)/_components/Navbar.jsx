"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo/telehealth-logo.png";
import { useGetMeQuery } from "@/redux/api/userApi";
import UserProfile from "./UserProfile";
import { Menu, KeyRound, LogOut, UsersRound, X } from "lucide-react";
import { Avatar, Drawer, Dropdown, Skeleton } from "antd";
import { useState } from "react";
import UserProfileBox from "./UserProfileBox";

export default function PrivateNavbar() {
  const { data: user, isLoading } = useGetMeQuery();
  const [open, setOpen] = useState(false);

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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="supports-[backdrop-filter]:bg-background/40 sticky top-0 z-50 shadow backdrop-blur">
      <div className="py-2 pl-4 pr-6 sm:px-8">
        <div className="flex items-center justify-between gap-2 xs:gap-5">
          <Link href={isLoading ? "#" : `/dashboard/${role}`}>
            <Image
              src={logo}
              alt="telehealth logo"
              className="w-auto cursor-pointer max-xs:h-5 xs:h-8 sm:h-10"
              quality={100}
              loading="eager"
            />
          </Link>

          <div className="hidden items-center gap-3 max-sm:flex">
            <div>
              {isLoading ? (
                <Skeleton.Avatar active size="small" />
              ) : (
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                  className="!cursor-pointer"
                >
                  <Avatar src={user?.profilePhoto} size="small" />
                </Dropdown>
              )}
            </div>
            <div>
              <Menu
                className="cursor-pointer text-primary"
                onClick={showDrawer}
              />
            </div>

            <Drawer
              title={<UserProfileBox user={user} />}
              placement={"right"}
              closable={false}
              open={open}
              key={"right"}
              extra={
                <X onClick={onClose} className="cursor-pointer text-primary" />
              }
            ></Drawer>
          </div>
          <UserProfile user={user} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
