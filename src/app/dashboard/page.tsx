"use client";
import Profile from "@/components/common/Profile";
import { Navbar } from "../../components/common/Navbar";
import Add from "../../components/dashboard/Add";
import authenticatedRoute from "../../hooks/authenticatedRoute";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const userdata = {
  id: 1,
  name: "anam",
  verificationstatus: true,
};

const Dashboard = () => {
  const router = useRouter();

  const [hasKyc, setHasKyc] = useState(true);

  useEffect(()=> {
    
  })

  return (
    <>
    <div className="mt-[160px] flex justify-center items-center ">
      {
        hasKyc ?(  <Add/>):(<Profile userDetails={userdata} />)
      }
    
    </div>
    </>
   
  );
};

export default authenticatedRoute(Dashboard);
