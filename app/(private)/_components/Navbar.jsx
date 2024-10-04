"use client";

import { Avatar, Drawer, Dropdown, Skeleton, Menu as AntMenu } from "antd";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import logo from "@/public/logo/telehealth-logo.png";
import { useGetMeQuery } from "@/redux/api/userApi";
import UserProfile from "./UserProfile";
import UserProfileBox from "./UserProfileBox";
import {
  generateProfileDropdownOptions,
  getSidebarItems,
  getUserRoleForRoute,
} from "@/utils/constant";
import { getUserInfo } from "@/utils/auth";

export default function PrivateNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const { data: user, isLoading } = useGetMeQuery();
  const authUser = getUserInfo();

  const role = getUserRoleForRoute(user);
  const items = generateProfileDropdownOptions(role);
  const sidebarItems = getSidebarItems(authUser?.role);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
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

          {/* For small screens */}
          <div className="hidden items-center gap-3 max-sm:flex">
            {/* User profile dropdown for small screens */}
            <div>
              {isLoading ? (
                <Skeleton.Avatar active size="small" />
              ) : (
                <Dropdown
                  menu={{
                    items,
                    selectedKeys: [pathname],
                  }}
                  placement="bottomRight"
                  className="!cursor-pointer"
                >
                  <Avatar src={user?.profilePhoto} size="small" />
                </Dropdown>
              )}
            </div>

            {/* Menu button for small screens */}
            <div>
              <Menu
                className="cursor-pointer text-primary"
                onClick={showDrawer}
              />
            </div>

            {/* Sidebar drawer for small screens */}
            <Drawer
              title={<UserProfileBox user={user} />}
              placement={"right"}
              closable={false}
              open={open}
              key={"right"}
              extra={
                <X onClick={onClose} className="cursor-pointer text-primary" />
              }
            >
              <AntMenu
                selectedKeys={[pathname]}
                mode="inline"
                items={sidebarItems}
                style={{ border: "none" }}
                onClick={({ key }) => {
                  router.push(key);
                  onClose();
                }}
              />
            </Drawer>
          </div>

          {/* For large screens */}
          <UserProfile user={user} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
