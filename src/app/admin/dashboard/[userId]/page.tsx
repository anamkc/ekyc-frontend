"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import adminAuthenticatedRoute from "@/hooks/adminAuthenticatedRoute";
import kycLanding from "/public/adminKycImg.png";
import singleUser from "@/services/singleUser.service"
import { BlockData } from "../page";
import Profile from "@/components/common/Profile";
import IndividualProfile from "@/components/common/IndividualProfile";

const Users = () => {
  const router = useRouter();
   const[individualUser , setindividualUser] = useState<BlockData | undefined>()
  const searchParams = useSearchParams();
   const Id = searchParams.get("userId") || '';
  const [userId , setuserId] = useState<string>(Id) 
  console.log(Id);
  
  useEffect(() => {
    const fetchData = async () => {
      singleUser(userId).then((res)=> {
        console.log(res.data)
        setindividualUser(res.data)

      }). catch((err: any) => console.log(err));
    };
    fetchData();
  }, []);


  return (
    <div className="mt-[110px]">
      <div className=" relative overflow-hidden">
        <div>
        
          <div className="w-full flex justify-center items-center">
            {/* Assuming Profile component needs userDetails as a prop */}
            {/* <Profile userDetails={userDetails} /> */}
              {individualUser &&  <IndividualProfile userDetails={individualUser} /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default adminAuthenticatedRoute(Users);
