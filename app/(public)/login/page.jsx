"use client";

import Image from "next/image";
import loginIllustration from "@/public/image/login-illustration.png";
import Container from "@/components/shared/Container";
import PublicNavbar from "@/components/public/Navbar";
import { Button, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import Label from "@/components/shared/Label";
import Link from "next/link";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
  });
  return (
    <Container className="py-0 lg:py-0">
      <div className="lg:min-h-[calc(100vh-80px)] flex lg:items-center justify-evenly gap-5 text-base">
        <div className="hidden lg:block w-7/12">
          <Image src={loginIllustration} alt="telehealth login" />
        </div>
        <div className="lg:w-5/12">
          <p className="mb-5 max-lg:text-center max-lg:mt-10 lg:mb-8 font-semibold text-2xl md:text-3xl">
            Sign in to your account
          </p>
          <form className="space-y-5 lg:mr-14">
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email" required>
                  Email
                </Label>
                <Input
                  name="email"
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" required>
                  Password
                </Label>
                <Input.Password
                  name="password"
                  placeholder="Enter your password"
                  {...formik.getFieldProps("password")}
                />
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary font-medium text-right hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
            <Button type="primary" block>
              Sign in
            </Button>
          </form>

          <div className="mt-5 text-center">
            <p>{`Don't have an account?`} </p>
            <Link href="/register">
              <Button type="link" className="text-primary">
                Create New Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
