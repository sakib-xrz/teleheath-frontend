"use client";
import Container from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo/telehealth-logo.png";
import { Mail, MapPin, Phone } from "lucide-react";
import FormInput from "@/components/form/form-input";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Button } from "antd";
const infoList = [
  { label: "Appointment", value: "APPOINTMENT" },
  { label: "Our Specialist", value: "OUR_SPECIALIST" },
  {
    label: "Why choose us",
    value: "WHY_CHOOSE_US",
  },
  { label: "Our Services", value: "OUR_SERVICES" },
  { label: "Health Tips", value: "HEALTH TIPS" },
];
const siteLinks = [
  { label: "Home", value: "HOME" },
  { label: "About", value: "ABOUT" },
  { label: "Departments", value: "DEPARTMENTS" },
  { label: "Doctors", value: "DOCTORS" },
  { label: "Blog", value: "BLOG" },
  { label: "Contact", value: "CONTACT" },
];

const newsletterValidationSchema = object({
  email: string()
    .email("valid email is required.")
    .required("Email is required."),
});

const FooterColumn = ({ title = "", items = [] }) => {
  return (
    <>
      <div className="text-center">
        <h4 className="mb-4 text-xl font-semibold">{title}</h4>
        <ul className="space-y-2">
          {items?.map((item, index) => (
            <li key={index}>
              <Link
                href="/appointments"
                className="hover:text-primary hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Footer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: newsletterValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="bg-gray-100 py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* LOGO */}
          <div className="flex flex-col gap-8 border">
            <Link className="block w-fit" href="/">
              <Image
                src={logo}
                alt="telehealth logo"
                className="w-auto cursor-pointer max-xs:h-5 xs:h-8 sm:h-10"
                quality={100}
                loading="eager"
              />
            </Link>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2">
                <span className="rounded-full bg-primary bg-opacity-30 p-2 text-primary">
                  <Phone className="size-5" />
                </span>
                <span className="font-semibold">+880 170 000 0000</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="rounded-full bg-primary bg-opacity-30 p-2 text-primary">
                  <Mail className="size-5" />
                </span>
                <span className="font-semibold">support@teleheath.com.bd</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="rounded-full bg-primary bg-opacity-30 p-2 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span className="font-semibold">Dhaka, Bangladesh</span>
              </p>
            </div>
          </div>
          {/* <div className="block h-full w-[2px] bg-red-300"></div> */}
          {/* Information Section */}
          <FooterColumn title="Information" items={infoList} />
          {/* Site Links Section */}
          <FooterColumn title="Site Links" items={siteLinks} />
          {/* News letter subscription */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">Newsletter</h4>
            <form
              onSubmit={formik.handleSubmit}
              className="flex items-center gap-2"
            >
              <div>
                <FormInput
                  label=""
                  name="email"
                  placeholder="Enter the email"
                  value={formik.values.email}
                  formik={formik}
                />
              </div>
              <Button htmlType="submit" type="primary">
                Subscribe
              </Button>
            </form>
            <div>
              <p className="mt-5 text-sm">
                Subscribe to our newsletter for the latest health tips, expert
                advice, and special offers.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
