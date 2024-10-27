"use client";

import FormInput from "@/components/form/FormInput";
import FormikErrorBox from "@/components/shared/FormikErrorBox";
import Label from "@/components/shared/Label";
import Title from "@/components/shared/Title";
import { GENDER_OPTIONS } from "@/utils/constant";
import { Breadcrumb, Button, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useFormik } from "formik";
import { ImageUp } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const items = [
  {
    title: <Link href="/dashboard/super-admin">Dashboard</Link>,
  },
  {
    title: <Link href="/dashboard/super-admin/doctors">Doctors List</Link>,
  },
  {
    title: "Create Doctor",
  },
];

export default function CreateDoctor() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      experience: null,
      gender: "",
      appointmentFee: null,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      file: null,
    },

    onSubmit: async (values) => {
      const payload = {
        data: {
          name: values.name,
          email: values.email,
          password: values.password,
          contactNumber: values.contactNumber.startsWith("+88")
            ? values.contactNumber
            : `+88${values.contactNumber}`,
        },
        file: values.file,
      };

      const formData = new FormData();

      formData.append("data", JSON.stringify(payload.data));
      formData.append("file", payload.file);

      try {
        await createAdmin(formData).unwrap();
        toast.success("Admin created successfully");
        formik.resetForm();
        router.push("/dashboard/super-admin/doctors");
      } catch (error) {
        toast.error(
          error?.status === 409
            ? "Admin already exists with this email"
            : "Failed to create admin",
        );
      }
    },
  });

  return (
    <div className="space-y-5 lg:space-y-10">
      <Breadcrumb items={items} />
      <div className="sm:rounded-md sm:bg-white sm:p-6 sm:shadow lg:mx-auto lg:w-8/12 lg:space-y-3 lg:p-8">
        <Title title={"Create Doctor"} />
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              <FormInput
                label="Name"
                name="name"
                placeholder="Enter doctor name"
                formik={formik}
                required
              />
              <FormInput
                label="Email"
                name="email"
                placeholder="Enter doctor email"
                formik={formik}
                required
              />
              <FormInput
                label="Password"
                name="password"
                placeholder="Enter doctor password"
                formik={formik}
                type="password"
                required
              />
              <FormInput
                label="Contact Number"
                name="contactNumber"
                placeholder="Enter doctor contact number"
                formik={formik}
                type="tel"
                required
              />
              <FormInput
                label="Address"
                name="address"
                placeholder="Enter doctor address"
                formik={formik}
                required
              />
              <FormInput
                label="Registration Number"
                name="registrationNumber"
                placeholder="Enter doctor registration number"
                formik={formik}
                required
              />
              <FormInput
                label="Experience"
                name="experience"
                placeholder="Enter doctor experience"
                formik={formik}
                type="number"
                required
              />
              <div className="flex flex-col gap-1">
                <Label htmlFor="gender" required={true} className={"py-1"}>
                  Gender
                </Label>
                <Select
                  options={GENDER_OPTIONS}
                  name="gender"
                  placeholder="Select doctor gender"
                  onChange={(value) => {
                    formik.setFieldValue("gender", value);
                  }}
                />
                <FormikErrorBox formik={formik} name="gender" />
              </div>
              <FormInput
                label="Appointment Fee"
                name="appointmentFee"
                placeholder="Enter doctor appointment fee"
                formik={formik}
                type="number"
                required
              />
              <FormInput
                label="Qualification"
                name="qualification"
                placeholder="Enter doctor qualification"
                formik={formik}
                required
              />
              <FormInput
                label="Current Working Place"
                name="currentWorkingPlace"
                placeholder="Enter doctor current working place"
                formik={formik}
              />
              <FormInput
                label="Designation"
                name="designation"
                placeholder="Enter doctor designation"
                formik={formik}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor={"file"}>Profile Picture</Label>
              <Dragger
                maxCount={1}
                multiple={false}
                accept=".jpg,.jpeg,.png"
                onChange={({ file }) => {
                  formik.setFieldValue("file", file?.originFileObj);
                }}
                fileList={formik.values.file ? [formik.values.file] : []}
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

          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            // loading={isLoading}
          >
            Create Admin
          </Button>
        </form>
      </div>
    </div>
  );
}
