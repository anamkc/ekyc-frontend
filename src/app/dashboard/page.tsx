"use client";
import Profile from "@/components/common/Profile";
import Add from "../../components/dashboard/Add";
import authenticatedRoute from "../../hooks/authenticatedRoute";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getKyc } from "@/services/getKyc.service";

const userdata = {
  id: 1,
  name: "anam",
  verificationstatus: true,
};

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    getKyc();
  }, [])

  const [hasKyc, setHasKyc] = useState(true);

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
