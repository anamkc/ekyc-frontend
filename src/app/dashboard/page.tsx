"use client";
import Profile from "@/components/common/Profile";
import Add from "../../components/dashboard/Add";
import authenticatedRoute from "../../hooks/authenticatedRoute";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getKyc } from "@/services/getKyc.service";
import { BlockData } from "../admin/dashboard/page";



const Dashboard = () => {

  const [hasKyc, setHasKyc] = useState(true);
  const [data, setData] = useState<BlockData | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getKyc();
      if(!res.profilePictureUrl){
        setHasKyc(false)
      } else {
        console.log(res);
        setHasKyc(true)
        setData(res);
        
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-[160px] flex justify-center items-center ">
        {/* {! hasKyc ? <Add /> :  data && <Profile userDetails={data!} />} */}
        {data && <Profile userDetails={data}/>}
      </div>
    </>
  );
};

export default authenticatedRoute(Dashboard);
