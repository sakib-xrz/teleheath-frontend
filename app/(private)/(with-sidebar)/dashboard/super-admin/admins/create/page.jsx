"use client";

import FormInput from "@/components/form/FormInput";
import Label from "@/components/shared/Label";
import Title from "@/components/shared/Title";
import { Breadcrumb, Button, Upload } from "antd";
const { Dragger } = Upload;
import { useFormik } from "formik";
import { ImageUp } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: <Link href="/dashboard/super-admin">Dashboard</Link>,
  },
  {
    title: <Link href="/dashboard/super-admin/admins">Admins List</Link>,
  },
  {
    title: "Create Admin",
  },
];

export default function CreateAdmin() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contactNumber: "",
      file: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="space-y-5 lg:space-y-10">
      <Breadcrumb items={items} />
      <div className="sm:rounded-md sm:bg-white sm:p-6 sm:shadow lg:mx-auto lg:w-8/12 lg:space-y-3 lg:p-8">
        <Title title={"Create Admin"} />
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <FormInput
              label="Name"
              name="name"
              placeholder="Enter admin name"
              formik={formik}
              required
            />

            <FormInput
              label="Email"
              name="email"
              placeholder="Enter admin email"
              formik={formik}
              required
            />

            <FormInput
              label="Password"
              name="password"
              placeholder="Enter admin password"
              formik={formik}
              type="password"
              required
            />

            <FormInput
              label="Contact Number"
              name="contactNumber"
              placeholder="Enter admin contact number"
              formik={formik}
              type="tel"
              required
            />

            <div className="space-y-1">
              <Label htmlFor={"file"}>Profile Picture</Label>
              <Dragger
                maxCount={1}
                multiple={false}
                accept=".jpg,.jpeg,.png"
                onChange={({ file }) => {
                  formik.setFieldValue("file", file?.originFileObj);
                }}
              >
                <p className="flex justify-center">
                  <ImageUp className="size-8 opacity-70" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support only .jpg, .jpeg, .png file format.
                </p>
              </Dragger>
            </div>
          </div>

          <Button type="primary" htmlType="submit" className="w-full">
            Create Admin
          </Button>
        </form>
      </div>
    </div>
  );
}
