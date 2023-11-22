"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import adminAuthenticatedRoute from "@/hooks/adminAuthenticatedRoute";
import kycLanding from "/public/adminKycImg.png";

const Users = () => {
  const router = useRouter();
   
  const searchParams = useSearchParams();
   const Id = searchParams.get("userId") || '';
  const [userId , setuserId] = useState<string>(Id) 
  console.log(Id);
  

  return (
    <div className="mt-[110px]">
      <div className=" relative overflow-hidden">
        <div>
        
          <div className="w-full flex justify-center items-center">
            {/* Assuming Profile component needs userDetails as a prop */}
            {/* <Profile userDetails={userDetails} /> */}
            <h1>
              Individual Details
            </h1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default adminAuthenticatedRoute(Users);
