import { Button } from "antd";
import {
  User,
  Stethoscope,
  GraduationCap,
  Clock,
  Star,
  Globe,
  MapPin,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

export default function DoctorProfileCard({ doctor }) {
  const {
    name,
    specialty,
    degrees,
    experience,
    rating,
    reviews,
    availability,
    consultationFee,
    languages,
    clinicLocation,
    profilePicture,
  } = doctor || {};

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition duration-300 hover:cursor-pointer hover:bg-primary hover:bg-opacity-5">
      <div className="flex items-center">
        <Image
          src={profilePicture}
          alt={`${name}'s profile`}
          className="h-20 w-20 rounded-full object-cover"
          height={600}
          width={600}
        />
        <div className="ml-4">
          <h2 className="flex items-center text-lg font-semibold">
            <User className="mr-2 h-5 w-5 text-gray-500" />
            {name}
          </h2>
          <p className="flex items-center text-sm text-gray-600">
            <Stethoscope className="mr-2 h-5 w-5 text-gray-500" />
            {specialty}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <p className="flex items-center text-sm text-gray-800">
          <GraduationCap className="mr-2 h-5 w-5 text-gray-500" />
          <span className="font-medium">Degrees: </span>
          {degrees}
        </p>
        <p className="flex items-center text-sm text-gray-800">
          <Clock className="mr-2 h-5 w-5 text-gray-500" />
          <span className="font-medium">Experience: </span> {experience}
        </p>
        <p className="flex items-center text-sm text-gray-800">
          <Globe className="mr-2 h-5 w-5 text-gray-500" />
          <span className="font-medium">Languages:</span> {languages.join(", ")}
        </p>
        <p className="flex items-center text-sm text-gray-800">
          <MapPin className="mr-2 h-5 w-5 text-gray-500" />
          <span className="font-medium">Location:</span> {clinicLocation}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p
          className={`flex items-center text-sm font-medium ${
            availability === "Available Now"
              ? "text-green-600"
              : "text-gray-500"
          }`}
        >
          <Clock className="mr-2 h-5 w-5" />
          {availability}
        </p>
        <p className="flex items-center text-sm text-gray-800">
          <DollarSign className="mr-2 h-5 w-5 text-gray-500" />
          <span className="font-medium">Fee:</span> {consultationFee}
        </p>
      </div>
      <div className="mt-4 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center text-sm text-gray-800">
          <Star className="mr-2 h-5 w-5 text-yellow-500" />
          <span className="font-medium">Rating:</span> {rating} ({reviews}{" "}
          reviews)
        </div>
        <Button size="small" type="primary" className="w-full sm:w-fit">
          Book Appointment
        </Button>
      </div>
    </div>
  );
}
