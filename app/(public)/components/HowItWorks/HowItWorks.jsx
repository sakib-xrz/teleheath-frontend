"use client";
import Container from "@/components/shared/Container";
import { CalendarClock, FileText, MessageCircle, Video } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import HowItWorkStep from "./HowItWorkStep";
import GradientBg from "../GradientBg";
import image1 from "@/public/image/how_it_work/step-one.png";
import image2 from "@/public/image/how_it_work/step-two.png";
import image3 from "@/public/image/how_it_work/step-three.png";
import image4 from "@/public/image/how_it_work/step-four.png";

const steps = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
];

const howItWorksContent = [
  {
    id: 1,
    title: " Appointment Booking",
    description:
      "Select an available date and time that suits your schedule for a virtual consultation with the doctor.",
    icon: CalendarClock,
  },
  {
    id: 2,
    title: "In-person Video calling",
    description:
      "Connect face-to-face with your doctor through a secure video call for personalized care and real-time consultation.",
    icon: Video,
  },
  {
    id: 3,
    title: "Renew prescription",
    description:
      "Request a prescription renewal easily and have it sent directly to your preferred pharmacy for convenience.",
    icon: FileText,
  },
  {
    id: 4,
    title: "Chat with Us",
    description:
      "Get quick assistance through live chat with our support team for any queries or guidance during your telehealth experience.",
    icon: MessageCircle,
  },
];

const HowItWorks = () => {
  const [selectStep, setSelectStep] = useState(0);
  return (
    <div className="pt-10">
      <Container>
        <div className="flex flex-col gap-16">
          {/* HEADER */}
          <div>
            <h2 className="text-center text-2xl font-bold text-gray-600 sm:text-left sm:text-4xl">
              <p>
                Easy <span className="text-primary">Navigation</span> to
              </p>{" "}
              <p>
                Your <span className="text-primary">Doctor</span> with Less
                Interaction
              </p>
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-10">
            <div className="hidden items-center md:col-span-2 md:flex">
              <div>
                <Image
                  src={steps[selectStep].image}
                  height={400}
                  width={400}
                  alt="How it work"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative col-span-5 md:col-span-3">
              <GradientBg isRight={true} isBottom={true} size="size3" />
              <div className="flex flex-col gap-5 backdrop-blur-sm">
                {howItWorksContent.map((step, index) => (
                  <HowItWorkStep
                    key={step.id}
                    onClick={() => setSelectStep(index)}
                    title={step.title}
                    description={step.description}
                    selectStep={selectStep}
                    Icon={step.icon}
                    id={step.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
