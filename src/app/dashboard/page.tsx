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

  const [hasKyc, setHasKyc] = useState(true);
  const [data, setData] = useState();

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const data = await getKyc();
        console.log("data is ", data)
        if(data === "404"){
          setHasKyc(false);
        } else {
          setHasKyc(true);
          setData(data)
        }
      } catch (err) {
        console.log("Error in Dashboard:", err);
      }
    };
    fetchData();
  }, [hasKyc])

  return (
    <>
    <div className="mt-[160px] flex justify-center items-center ">
      {
        !hasKyc ?(  <Add/>):(<Profile userDetails={userdata} />)
      }
    </div>
    </>
   
  );
};

export default authenticatedRoute(Dashboard);
