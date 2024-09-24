"use client";

import { Input } from "antd";
import FormikErrorBox from "../shared/FormikErrorBox";
import Label from "../shared/Label";

export default function FormInput({
  label,
  name,
  required,
  placeholder,
  formik,
  type = "text",
  ...props
}) {
  return (
    <div className="space-y-1">
      {label && (
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      )}

      {type === "password" ? (
        <Input.Password
          name={name}
          placeholder={placeholder}
          {...formik.getFieldProps(name)}
          {...props}
        />
      ) : (
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          {...formik.getFieldProps(name)}
          {...props}
        />
      )}

      <FormikErrorBox formik={formik} name={name} />
    </div>
  );
}
