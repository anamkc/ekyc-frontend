"use client";
import { Navbar } from "../../components/common/Navbar";
import Add from "../../components/dashboard/Add";
import authenticatedRoute from "../../hooks/authenticatedRoute";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="mt-[160px]">
      <Add/>
    </div>
  );
};

export default authenticatedRoute(Dashboard);
