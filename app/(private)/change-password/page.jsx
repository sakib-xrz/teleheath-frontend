"use client";

import * as Yup from "yup";
import { Button, Card } from "antd";
import FormInput from "@/components/form/FormInput";
import { useFormik } from "formik";
import { useState } from "react";

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      retypeNewPassword: "",
    },

    // check if the old password and new password are not the same
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Old password is required"),
      newPassword: Yup.string()
        .required("New password is required")
        .min(6, "Password must be at least 6 characters")
        .notOneOf(
          [Yup.ref("oldPassword"), null],
          "New password must be different from old password",
        ),
      retypeNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Retype new password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex min-h-[calc(100vh-3.1rem)] justify-center sm:min-h-[calc(100vh-4.1rem)] lg:items-center">
      <Card>
        <p className="mb-5 text-2xl font-semibold max-lg:mt-5 max-lg:text-center md:text-3xl">
          Change your password
        </p>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <div className="space-y-2">
            <FormInput
              label="Old Password"
              name="oldPassword"
              placeholder="Enter your old password"
              type="password"
              formik={formik}
              required
            />
            <FormInput
              label="New Password"
              name="newPassword"
              placeholder="Enter your new password"
              type="password"
              formik={formik}
              required
            />
            <FormInput
              label="Retype New Password"
              name="retypeNewPassword"
              placeholder="Retype your new password"
              type="password"
              formik={formik}
              required
            />
          </div>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Change password
          </Button>
        </form>
      </Card>
    </div>
  );
}
