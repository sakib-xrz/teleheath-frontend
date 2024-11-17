import Container from "@/components/shared/container";
import {
  ClipboardPaste,
  SquarePlay,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const servicesData = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description:
      "Get expert advice on general health concerns with our trusted professionals, available anytime for your primary care needs.",
  },
  {
    icon: UserCheck,
    title: "Specialist Doctors",
    description:
      "Connect with specialists across various fields for expert medical consultation tailored to your specific needs.",
  },
  {
    icon: ClipboardPaste,
    title: "Online Prescription",
    description:
      "Receive your prescriptions directly online after consultations, making it easy to access your necessary medications.",
  },
  {
    icon: SquarePlay,
    title: "Video Calling",
    description:
      "Engage in real-time, face-to-face video consultations with our doctors from the comfort of your home.",
  },
];

const ServiceItem = ({ Icon, title, description }) => (
  <div>
    <div className="mb-5 flex items-center gap-2">
      <div className="rounded-full bg-gray-100 p-3 text-gray-500">
        <Icon className="size-12" />
      </div>
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-500">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="bg-gray-50 py-10">
      <Container>
        <h4 className="text-center text-2xl font-bold text-gray-600 sm:text-4xl">
          Our Services
        </h4>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
            {/* LEFT */}
            <div className="flex flex-col justify-between">
              {servicesData.slice(0, 2).map((service, index) => (
                <ServiceItem
                  key={index}
                  Icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            {/* MIDDLE */}
            <div className="flex flex-col justify-center">
              <Image
                src="/image/services/service.png.webp"
                alt="Service image"
                width={600}
                height={600}
                loading="lazy"
                className="rounded-md"
              />
            </div>
            {/* RIGHT */}
            <div className="flex flex-col justify-between">
              {servicesData.slice(2).map((service, index) => (
                <ServiceItem
                  key={index}
                  Icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
