"use client";

import Image from "next/image";
import loginIllustration from "@/public/image/login-illustration.png";
import Container from "@/components/shared/Container";
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
      <div className="flex justify-evenly gap-5 text-base lg:min-h-[calc(100vh-80px)] lg:items-center">
        <div className="hidden w-7/12 lg:block">
          <Image src={loginIllustration} alt="telehealth login" />
        </div>
        <div className="max-xs:w-full xs:w-6/12 lg:w-5/12">
          <p className="mb-5 text-2xl font-semibold max-lg:mt-10 max-lg:text-center md:text-3xl lg:mb-8">
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
                    className="text-right text-sm font-medium text-primary hover:underline"
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

          <div className="mt-5 text-center lg:mr-14">
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
