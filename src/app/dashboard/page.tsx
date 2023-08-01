"use client";
import Button from "@/components/common/Button";
import { Navbar } from "@/components/common/Navbar";

import Add from "@/components/dashboard/Add";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="mt-[160px]">
      <Navbar/>
      <Add/>
    </div>
  );
};

export default Dashboard;
