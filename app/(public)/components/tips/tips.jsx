"use client";
import Container from "@/components/shared/container";
import { Button } from "antd";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const healthTips = [
  {
    title: "5 Foods to Boost Your Immunity",
    description:
      "Discover how simple dietary changes can strengthen your immunity.",
    image: "/image/health-tips/food-immunity.jpg",
    link: "#",
  },
  {
    title: "The Importance of Hydration",
    description: "Learn why staying hydrated is key to overall wellness.",
    image: "/image/health-tips/hydration.jpg",
    link: "#",
  },
  {
    title: "10-Minute Home Workouts",
    description: "Quick exercises to keep you fit without hitting the gym.",
    image: "/image/health-tips/home-workout.jpg",
    link: "#",
  },
  {
    title: "Mental Health Tips for Busy Lives",
    description: "Effective ways to manage stress and maintain mental health.",
    image: "/image/health-tips/mental-health.jpg",
    link: "#",
  },
  {
    title: "The Benefits of Quality Sleep",
    description: "Understand why good sleep is essential for your health.",
    image: "/image/health-tips/quality-sleep.jpg",
    link: "#",
  },
  {
    title: "Healthy Eating on a Budget",
    description: "Tips for eating nutritious meals without overspending.",
    image: "/image/health-tips/healthy-food.jpg",
    link: "#",
  },
];

const HealthTips = () => {
  return (
    <div>
      <Container>
        <section className="relative py-16">
          <div className="container mx-auto">
            {/* Section Title */}
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-800">
              Latest Health <span className="text-primary">Tips</span>
            </h2>
            <p className="mb-10 text-center text-gray-600">
              Explore expert advice and tips for a healthier lifestyle.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {healthTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-md shadow-md transition-shadow hover:shadow-lg"
                >
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${tip.image})`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-opacity-60 bg-gradient-to-t from-primary"></div>

                  {/* Content */}
                  <motion.div
                    className="relative flex h-80 flex-col justify-end p-6 text-white"
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    variants={{
                      initial: { y: 0 },
                      hover: {
                        y: -10,
                        transition: { type: "spring", stiffness: 600 },
                      },
                    }}
                  >
                    <h3 className="mb-2 text-lg font-semibold">{tip.title}</h3>
                    <p className="mb-4 text-sm">{tip.description}</p>

                    {/* Animated Button */}
                    <motion.div
                      className="opacity-0"
                      variants={{
                        initial: { opacity: 0, y: 10 },
                        hover: {
                          opacity: 1,
                          y: 0,
                          transition: { type: "spring", stiffness: 300 },
                        },
                      }}
                    >
                      <Link href={tip.link}>
                        <Button size="small">Read More →</Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Explore More Articles Button */}
            <div className="mt-12 text-center">
              <Button size="large" type="primary">
                Explore More Articles <MoveRight className="size-6" />
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HealthTips;
