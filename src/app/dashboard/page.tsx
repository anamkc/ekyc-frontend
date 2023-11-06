"use client";
import Profile from "@/components/common/Profile";
import Add from "../../components/dashboard/Add";
import authenticatedRoute from "../../hooks/authenticatedRoute";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getKyc } from "@/services/getKyc.service";

const userData = {
  id: 1,
  name: "anam",
  verificationstatus: true,
};

const Dashboard = () => {

  const [hasKyc, setHasKyc] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getKyc();
      console.log(data)
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-[160px] flex justify-center items-center ">
        {hasKyc ? <Add /> : <Profile userDetails={userData} />}
      </div>
    </>
  );
};

export default authenticatedRoute(Dashboard);
