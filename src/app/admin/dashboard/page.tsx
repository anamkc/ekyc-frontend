"use client";
import { getAllBlocks } from "@/services/getAllBlocks.service";
import React, { useEffect, useState } from "react";
import adminAuthenticatedRoute from "@/hooks/adminAuthenticatedRoute";
import UserBlocks from "@/components/common/UserBlocks";
import SearchBar from "@/components/common/SearchBar";
import { data } from "autoprefixer";
import { Navbar } from "@/components/common/Navbar";

export type BlockData = {
  address: string;
  citizenshipImageUrl: string;
  dob: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: string;
  profilePictureUrl: string;
  verified: boolean;
};
const Dashboard = () => {
  const [blockData, setBlockData] = useState<any>([]);
  const [searchData, setsearchData] = useState<string>("");

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

  //   const searchItem = blockData && blockData.length > 0
  //   ? blockData.filter((data:any)=> {

  //    return searchData.toLowerCase() === "" ? blockData.slice(1) : data && data.firstName && data.firstName.toLowerCase().includes(searchData)

  //   }) : [];

  //   console.log(" these are searched data " , searchItem);
  const searchItem =
    blockData && blockData.length > 0
      ? searchData.toLowerCase() === ""
        ? blockData.slice(1)
        : blockData.filter(
            (data: any) =>
              data &&
              data.firstName &&
              data.firstName.toLowerCase().includes(searchData.toLowerCase())
          )
      : [];

  console.log("These are searched data: ", searchItem);

  return (
    <>
    <Navbar />
    <div>
      <div>
        <div className="bg-black mt-[90px] text-white min-h-screen relative overflow-hidden">
          <div className=" w-full  px-6 flex justify-end mt-6">
            <SearchBar setsearchData={setsearchData} />
          </div>
          <div className="  w-full flex justify-center items-center   ">
            <div className=" w-full max-w-[1240px] flex justify-center items-center ">
              <div className="flex flex-col sm:flex-row flex-wrap md:flex-row justify-center  items-center w-full mt-3 mb-8    ">
                {blockData &&
                  searchItem.map((data: BlockData) => {
                    return <UserBlocks key={data.id} data={data} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default adminAuthenticatedRoute(Dashboard);
