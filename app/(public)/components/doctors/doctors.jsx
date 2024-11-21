import Container from "@/components/shared/container";
import React from "react";
import DoctorProfileCard from "./doctor-profile-card";
import { Button } from "antd";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Jane Doe",
      specialty: "Cardiologist",
      degrees: "MBBS, MD (Cardiology)",
      experience: "12 years",
      rating: 4.9,
      reviews: 230,
      availability: "Available Now",
      consultationFee: "$50",
      languages: ["English", "Hindi", "Spanish"],
      clinicLocation: "New Delhi, India",
      profilePicture: "/image/doctors/1.png.webp",
      contact: {
        email: "janedoe@hospital.com",
        phone: "+91-1234567890",
      },
    },
    {
      id: 2,
      name: "Dr. John Smith",
      specialty: "Dermatologist",
      degrees: "MBBS, MD (Dermatology)",
      experience: "8 years",
      rating: 4.7,
      reviews: 180,
      availability: "Available Tomorrow",
      consultationFee: "$45",
      languages: ["English", "French"],
      clinicLocation: "London, UK",
      profilePicture: "/image/doctors/2.png.webp",
      contact: {
        email: "johnsmith@clinic.com",
        phone: "+44-1234567890",
      },
    },
    {
      id: 3,
      name: "Dr. Sarah Lee",
      specialty: "Pediatrician",
      degrees: "MBBS, MD (Pediatrics)",
      experience: "10 years",
      rating: 4.8,
      reviews: 200,
      availability: "Available Now",
      consultationFee: "$55",
      languages: ["English", "Mandarin"],
      clinicLocation: "Shanghai, China",
      profilePicture: "/image/doctors/3.png.webp",
      contact: {
        email: "sarahlee@hospital.com",
        phone: "+86-1234567890",
      },
    },
    {
      id: 4,
      name: "Dr. Ahmed Khan",
      specialty: "Orthopedic Surgeon",
      degrees: "MBBS, MS (Orthopedics)",
      experience: "15 years",
      rating: 4.6,
      reviews: 300,
      availability: "Available Next Week",
      consultationFee: "$70",
      languages: ["English", "Arabic"],
      clinicLocation: "Dubai, UAE",
      profilePicture: "/image/doctors/4.png.webp",
      contact: {
        email: "ahmedkhan@orthocare.com",
        phone: "+971-1234567890",
      },
    },
    {
      id: 5,
      name: "Dr. Maria Gonzalez",
      specialty: "Neurologist",
      degrees: "MBBS, DM (Neurology)",
      experience: "9 years",
      rating: 4.8,
      reviews: 210,
      availability: "Available Now",
      consultationFee: "$65",
      languages: ["English", "Spanish"],
      clinicLocation: "Mexico City, Mexico",
      profilePicture: "/image/doctors/5.png.webp",
      contact: {
        email: "mariagonzalez@neuroclinic.com",
        phone: "+52-1234567890",
      },
    },
    {
      id: 6,
      name: "Dr. Emily White",
      specialty: "Psychiatrist",
      degrees: "MBBS, MD (Psychiatry)",
      experience: "6 years",
      rating: 4.5,
      reviews: 150,
      availability: "Available Next Week",
      consultationFee: "$40",
      languages: ["English", "German"],
      clinicLocation: "Berlin, Germany",
      profilePicture: "/image/doctors/6.png.webp",
      contact: {
        email: "emilywhite@mentalhealth.com",
        phone: "+49-1234567890",
      },
    },
  ];

  return (
    <div>
      <Container>
        <header className="flex items-center justify-between py-10">
          {" "}
          <h4 className="text-left text-2xl font-bold text-gray-600 sm:text-4xl">
            See our <span className="text-primary">Top</span> Doctors.
          </h4>
          <Button>See all doctors</Button>
        </header>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {doctors?.map((doctor) => (
            <DoctorProfileCard key={doctor?.id} doctor={doctor} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Doctors;
