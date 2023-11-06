"use client";
import React, { useEffect, useState } from "react";
import kycLanding from "/public/adminKycImg.png";
import Image from "next/image";
import Profile from "@/components/common/Profile";
import adminAuthenticatedRoute from "@/hooks/adminAuthenticatedRoute";

const Users = ({ params }: { params: { userId: string } }) => {
  const [userId, setUserId] = useState(params.userId);
  // const [userDetails, setUserDetails] = useState(userData[Number(userId) - 1]);
  // console.log(userData);
  // console.log(userDetails);
  return (
    <div>
      <div>
        <div className="bg-black  relative overflow-hidden">
          <div className=" ">
            <div className="w-full flex justify-center h-[300px] md:h-[400px] lg:h-[540px]   p-2  ">
              <Image
                src={kycLanding}
                alt="Your Image Alt Text"
                width={1500}
                height={250}
              />
            </div>
            <div className="w-full flex justify-center items-center ">
              {/* <Profile userDetails={userDetails} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default adminAuthenticatedRoute(Users);
