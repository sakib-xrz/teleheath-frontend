import React from "react";
import GradientBg from "../GradientBg";
import { Button } from "antd";
import { CalendarMinus2 } from "lucide-react";
import Image from "next/image";

const IMAGE_STYLE = "h-80 w-32";

const HeroSection = () => {
  return (
    <header className="mx-auto flex h-screen max-w-7xl items-center px-4">
      <GradientBg isRight={false} isBottom={true} size="size1" />
      <div className="z-10 grid grid-cols-1 gap-3 md:grid-cols-2">
        {/* HEADING */}
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl font-bold text-teal-900">
            Stay Connected to your Health, No Matter Where You Are
          </h1>
          <Button className="w-fit">
            <CalendarMinus2 /> Book an appointment
          </Button>
        </div>
        {/* IMAGES */}
        <div className="flex justify-end gap-2">
          {/* image 1 */}
          <div className={`${IMAGE_STYLE}`}>
            <Image
              className="h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_1.jpg"
              alt="hero image 1"
              width={500}
              height={500}
            />
          </div>
          {/* image 2 */}
          <div className={`${IMAGE_STYLE} -mt-16`}>
            <Image
              className="h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_2.jpg"
              alt="hero image 2"
              width={500}
              height={500}
            />
          </div>
          {/* image 3 */}
          <div className={`${IMAGE_STYLE}`}>
            <Image
              className="h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_3.jpg"
              alt="hero image 3"
              width={500}
              height={500}
            />
          </div>
          {/* image 4 */}
          <div className={`${IMAGE_STYLE} mt-16`}>
            <Image
              className="-mb-14 h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_4.jpg"
              alt="hero image 4"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
