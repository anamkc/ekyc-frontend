"use client";
import adminAuthenticatedRoute from "@/hooks/adminAuthenticatedRoute";
import { getAllBlocks } from "@/services/getAllBlocks.service";
import React, { useEffect, useState } from "react";
import adminAuthenticatedRoute from "@/hooks/adminAuthenticatedRoute";
import UserBlocks from "@/components/common/UserBlocks";

export type BlockData = {
  address: string;
  citizenshipImageUrl: string;
  dob: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  phonenumber: string;
  profilePictureUrl: string;
}
const Dashboard = () => {
  const [blockData, setBlockData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllBlocks();
        console.log(data.allBlockData);
        
        setBlockData(data.allBlockData);
      } catch (err) {
        console.log("Error in Dashboard:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className="bg-black text-white h-screen relative overflow-hidden">
          <h1>hello world</h1>
          <div className=" mt-[110px] w-full flex justify-center items-center   ">
          <div className=" w-full max-w-[1240px] flex justify-center items-center ">
        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-3 mb-8    ">
        {blockData &&
              blockData.slice(1).map((data: BlockData) => {
                return (
                 <UserBlocks data={data}/>
                  
                );
              })}
        </div>
 
    </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default adminAuthenticatedRoute(Dashboard);
