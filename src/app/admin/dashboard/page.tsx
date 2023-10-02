"use client";
import React from "react";
import { Navbar } from "@/components/common/Navbar";
import Table from "@/components/Table";

export type UserDataProps = {
    id: number;
  name: string;
  verificationstatus: boolean;
};

export const userdata = [
  {
    id: 1,
    name: "anam",
    verificationstatus: true,
  },
  {
    id: 2,
    name: "pratik",
    verificationstatus: false,
  },
];

const dashboard = () => {
  return (
    <div>
      <div>
        <div className="bg-black h-screen relative overflow-hidden">
          <div className=" mt-[160px]">
            <Table userdata={userdata} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
