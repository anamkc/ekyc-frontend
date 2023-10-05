'use client'
import { getAllBlocks } from "@/services/getAllBlocks.service";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [blockData, setBlockData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllBlocks();
        console.log(data.allBlockData)
        setBlockData(JSON.parse(data.allBlockData));
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
            {blockData && blockData.map(data => {
              return data;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
