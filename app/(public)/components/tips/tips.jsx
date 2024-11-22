import Container from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HealthTips = () => {
  return (
    <div>
      <Container>
        <section class="bg-gray-50 py-12">
          <div class="container mx-auto">
            <h2 class="mb-6 text-center text-3xl font-bold">Health Tips</h2>
            <p class="mb-8 text-center text-gray-600">
              Stay informed, stay healthy with our expert advice.
            </p>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div class="rounded-lg bg-white p-4 shadow-md">
                {/* <Image src="/path/to/image1.jpg" alt="Health Tip 1" class="rounded-md mb-4"> */}
                <h3 class="mb-2 text-xl font-semibold">
                  5 Foods to Boost Your Immunity
                </h3>
                <p class="text-gray-600">
                  Discover how simple dietary changes can strengthen your
                  immunity...
                </p>
                <a
                  href="#"
                  class="mt-2 inline-block text-blue-500 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
            <div class="mt-8 text-center">
              <Link
                href="#"
                class="text-lg font-semibold text-blue-600 hover:underline"
              >
                Explore More Articles →
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HealthTips;
