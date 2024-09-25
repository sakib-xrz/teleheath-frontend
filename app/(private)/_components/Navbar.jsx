"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo/telehealth-logo.png";
import { useGetMeQuery } from "@/redux/api/userApi";
import UserProfile from "./UserProfile";

export default function PrivateNavbar() {
  const { data, isLoading } = useGetMeQuery();

  return (
    <div className="supports-[backdrop-filter]:bg-background/40 sticky top-0 z-50 shadow backdrop-blur">
      <div className="px-4 py-2 lg:px-8">
        <div className="flex items-center justify-between gap-2 xs:gap-5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="telehealth logo"
              className="w-auto cursor-pointer max-xs:h-5 xs:h-8 sm:h-10"
              quality={100}
              loading="eager"
            />
          </Link>

          <UserProfile user={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
