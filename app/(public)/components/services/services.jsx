import Container from "@/components/shared/container";
import {
  ClipboardPaste,
  SquarePlay,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

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
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <div className="rounded-full bg-gray-100 p-3 text-gray-500">
                    <Stethoscope className="size-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    General Consultation
                  </h4>
                </div>
                <p className="text-gray-500">
                  Get expert advice on general health concerns with our trusted
                  professionals, available anytime for your primary care needs.
                </p>
              </div>
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <div className="rounded-full bg-gray-100 p-3 text-gray-500">
                    <UserCheck className="size-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Specialist Doctors
                  </h4>
                </div>
                <p className="text-gray-500">
                  Connect with specialists across various fields for expert
                  medical consultation tailored to your specific needs.
                </p>
              </div>
            </div>
            {/* MIDDLE */}
            <div className="flex flex-col justify-center">
              <Image
                src="/image/services/service.png.webp"
                alt="Service image"
                width={6000}
                height={600}
                loading="lazy"
              />
            </div>
            {/* RIGHT */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <div className="rounded-full bg-gray-100 p-3 text-gray-500">
                    <ClipboardPaste className="size-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Online Prescription
                  </h4>
                </div>
                <p className="text-gray-500">
                  Receive your prescriptions directly online after
                  consultations, making it easy to access your necessary
                  medications.
                </p>
              </div>
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <div className="rounded-full bg-gray-100 p-3 text-gray-500">
                    <SquarePlay className="size-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Video Calling
                  </h4>
                </div>
                <p className="text-gray-500">
                  Engage in real-time, face-to-face video consultations with our
                  doctors from the comfort of your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
