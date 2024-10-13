"use client";
import React from "react";
import GradientBg from "../GradientBg";
import { Button } from "antd";
import { CalendarMinus2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGE_STYLE = "h-60 w-24 sm:h-72 sm:w-28 md:h-80 md:w-32";

// Animation variants for fade-in from bottom
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HeroSection = () => {
  return (
    <header className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 py-8 md:flex-row md:items-center md:justify-between">
      <GradientBg isRight={false} isBottom={true} size="size1" />
      <motion.div
        className="z-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        {/* HEADING */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <h1 className="text-2xl font-bold text-teal-900 sm:text-3xl md:text-5xl">
            Stay Connected to your Health, No Matter Where You Are
          </h1>
          <Button variants={fadeInUp} className="w-full md:w-fit">
            <CalendarMinus2 /> Book an appointment
          </Button>
        </motion.div>
        {/* IMAGES */}
        <div className="flex justify-center gap-4 pt-10 md:justify-end">
          {/* image 1 */}
          <motion.div variants={fadeInUp} className={`${IMAGE_STYLE}`}>
            <Image
              className="h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_1.jpg"
              alt="hero image 1"
              width={500}
              height={500}
              loading="lazy"
            />
          </motion.div>
          {/* image 2 */}
          <motion.div
            variants={fadeInUp}
            className={`${IMAGE_STYLE} -mt-12 sm:-mt-16`}
          >
            <Image
              className="h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_2.jpg"
              alt="hero image 2"
              width={500}
              height={500}
              loading="lazy"
            />
          </motion.div>
          {/* image 3 */}
          <motion.div variants={fadeInUp} className={`${IMAGE_STYLE}`}>
            <Image
              className="h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_3.jpg"
              alt="hero image 3"
              width={500}
              height={500}
              loading="lazy"
            />
          </motion.div>
          {/* image 4 */}
          <motion.div
            variants={fadeInUp}
            className={`${IMAGE_STYLE} mt-12 sm:mt-16`}
          >
            <Image
              className="-mb-10 h-full rounded-md object-cover object-center"
              src="/image/hero_section/hero_img_4.jpg"
              alt="hero image 4"
              width={500}
              height={500}
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
