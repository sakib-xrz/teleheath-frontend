import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo/telehealth-logo.png";

import { Button } from "antd";

export default function PublicNavbar() {
  return (
    <div className="sticky top-0 z-50 shadow backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="telehealth logo"
              className="max-xs:h-7 max-xs:w-auto xs:h-12 xs:w-auto aspect-auto cursor-pointer"
              quality={100}
              loading="eager"
            />
          </Link>

          {/* small button for mobile */}
          <div className="flex gap-3 items-center xs:hidden">
            <Link href={"/login"}>
              <Button size="small">Sign in</Button>
            </Link>

            <Link href={"/register"}>
              <Button type="primary" size="small">
                Sign up
              </Button>
            </Link>
          </div>

          {/* base button for large device */}
          <div className="xs:flex gap-3 items-center hidden">
            <Link href={"/login"}>
              <Button>Sign in</Button>
            </Link>

            <Link href={"/register"}>
              <Button type="primary">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
