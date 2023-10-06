"use client";
import { getAllBlocks } from "@/services/getAllBlocks.service";
import React, { useEffect, useState } from "react";

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
          <div className=" mt-[160px]">
            {blockData &&
              blockData.map((data) => {
                return <div key={data.id}>{data.address}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
