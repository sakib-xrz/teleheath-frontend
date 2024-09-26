"use client";

import axiosInstance from "@/helpers/axiosInstance";
import { BASE_URL } from "@/utils/constant";
import { useEffect } from "react";

export default function Dashboard() {
  const getDoctorSchedule = async () => {
    const response = await axiosInstance.get(
      `${BASE_URL}/doctor-schedules/selected`,
    );
    // console.log("response", response);
  };

  useEffect(() => {
    getDoctorSchedule();
  }, []);

  return <div>Dashboard</div>;
}
