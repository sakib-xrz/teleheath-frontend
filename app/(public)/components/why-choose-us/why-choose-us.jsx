"use client";

import React from "react";
import Container from "@/components/shared/container";
import { Button } from "antd";
import { Clock, DollarSign, ShieldCheck, UserCheck } from "lucide-react";

const FeatureCard = ({ Icon, title, description }) => (
  <div className="w-full rounded-lg border bg-gray-100 p-5">
    <Icon className="size-12 text-gray-600" />
    <h6 className="mt-5 font-semibold text-gray-600">{title}</h6>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Constant access to healthcare services, ensuring patients can get assistance anytime.",
    },
    {
      icon: UserCheck,
      title: "Certified Doctors",
      description:
        "Assurance of professional and qualified medical practitioners.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Emphasis on privacy and secure handling of user data during consultations.",
    },
  ];

  const highlightedFeature = {
    icon: DollarSign,
    title: "Affordable Consultations",
    description:
      "Cost-effective medical services accessible to a broader audience.",
  };

  return (
    <div className="py-10">
      <Container>
        {/* Header */}
        <header>
          <h4 className="text-center text-2xl font-bold text-gray-600 sm:text-4xl">
            Why <span className="text-primary">Telehealth</span> is The Right
            Choice For You.
          </h4>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-5 py-10">
          {/* Left Section */}
          <div className="col-span-3 flex flex-col gap-5 md:col-span-2">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features
                .slice(0, 2)
                .map(({ icon: Icon, title, description }, index) => (
                  <FeatureCard
                    key={index}
                    Icon={Icon}
                    title={title}
                    description={description}
                  />
                ))}
            </div>
            <div className="w-full">
              {features
                .slice(2)
                .map(({ icon: Icon, title, description }, index) => (
                  <FeatureCard
                    key={index}
                    Icon={Icon}
                    title={title}
                    description={description}
                  />
                ))}
            </div>
          </div>

          {/* Highlighted Section */}
          <div className="col-span-3 md:col-span-1">
            <div className="flex h-full w-full flex-col justify-between gap-5 rounded-lg border bg-primary bg-opacity-25 p-5 sm:gap-10">
              <div>
                <highlightedFeature.icon className="mb-5 size-12 text-gray-600" />
                <h6 className="font-semibold text-gray-600">
                  {highlightedFeature.title}
                </h6>
                <p className="text-gray-600">
                  {highlightedFeature.description}
                </p>
              </div>
              <Button type="primary">Start Free Appointment</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
