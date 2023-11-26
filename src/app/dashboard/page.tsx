"use client";
import Profile from "@/components/common/Profile";
import Add from "../../components/dashboard/Add";
import authenticatedRoute from "../../hooks/authenticatedRoute";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getKyc } from "@/services/getKyc.service";
import { BlockData } from "../admin/dashboard/page";
import { Navbar } from "@/components/common/Navbar";

const Dashboard = () => {
  const [hasKyc, setHasKyc] = useState(true);
  const [data, setData] = useState<BlockData | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getKyc();
      console.log(res);

      if (!res?.data?.profilePictureUrl) {
        setHasKyc(false);
        console.log("unsecessfull");
      } else {
        console.log(res);
        setHasKyc(true);
        setData(res.data);
        console.log("data succesfully set");

      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
      <div className="mt-[160px] flex justify-center items-center ">
        {/* {! hasKyc ? <Add /> :  data && <Profile userDetails={data!} />} */}
        {/* {hasKyc ? data ?  <Profile userDetails={data} />: <h1>loading</h1> : <Add />} */}
        {hasKyc ? data && data.profilePictureUrl ? <Profile userDetails={data} /> : <h1>loading</h1> : <Add />}

      </div>
    </>
  );
};

export default authenticatedRoute(Dashboard);
