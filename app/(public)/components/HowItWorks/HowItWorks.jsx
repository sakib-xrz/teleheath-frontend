import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src="/image/how_to_work.jpg"
              alt="hero image 1"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-md"
            />
          </div>
          <div>
            <h4 className="text-3xl font-bold">
              Easy navigation to your doctor doctor with less instruction
            </h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            placeat est cumque eius minus incidunt, tempore repudiandae atque
            aliquam perspiciatis voluptatibus? Ea iure ut maxime facilis ipsa
            ipsum. Ea eum dolor velit quam quia sapiente tempora. Aliquam quos
            facilis dolores molestiae ad quas soluta libero blanditiis hic id
            ipsam itaque commodi nam, beatae fuga, maxime, sapiente repellat
            aperiam ipsum fugit vitae eveniet voluptas. Laudantium sequi
            voluptates deleniti, enim quidem ea porro mollitia at. Nostrum,
            eius. Ad accusantium, maiores sit tenetur enim labore nobis nihil
            autem saepe quidem rem, quibusdam, repellendus soluta! Officiis
            ducimus possimus consequatur reprehenderit nobis ratione perferendis
            officia!
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
