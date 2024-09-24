"use client";

import Image from "next/image";
import loginIllustration from "@/public/image/login-illustration.png";
import Container from "@/components/shared/Container";
import { Button, DatePicker, Input } from "antd";
import Label from "@/components/shared/Label";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormikErrorBox from "@/components/shared/FormikErrorBox";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import FormInput from "@/components/form/FormInput";

dayjs.extend(weekday);
dayjs.extend(localeData);

export default function Login() {
  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "sakibxrz21@gmail.com",
      password: "Sakib@123",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
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
          <form className="space-y-5 lg:mr-14" onSubmit={formik.handleSubmit}>
            <div className="space-y-2">
              <FormInput
                label="Email"
                name="email"
                placeholder="Enter your email"
                formik={formik}
                required
              />

              <FormInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
                formik={formik}
                required
              />
            </div>
            <Button type="primary" htmlType="submit" block>
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
