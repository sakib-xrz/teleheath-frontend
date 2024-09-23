"use client";

import Image from "next/image";
import loginIllustration from "@/public/image/login-illustration.png";
import Container from "@/components/shared/Container";
import { Button, Input } from "antd";
import Label from "@/components/shared/Label";
import Link from "next/link";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const loginSchema = z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email address"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data) => console.log(data);

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
          <form
            className="space-y-5 lg:mr-14"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email" required>
                  Email
                </Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter your email" />
                  )}
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" required>
                  Password
                </Label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="Enter your password"
                    />
                  )}
                />
                <p className="text-red-500">{errors.password?.message}</p>
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
