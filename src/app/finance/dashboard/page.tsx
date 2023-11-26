"use client";
import UserBlocks from "../../../components/common/UserBlocks";
import Image from "next/image";
import financeAuthenticatedRoute from "../../../hooks/financeAuthenticatedRoute";
import React, { useEffect, useState } from "react";
import { getFIBlocks } from "../../../services/financeDashboard.service";
import InputGroup from "@/components/common/InputGroup";
import SearchBar from "@/components/common/SearchBar";
import Button from "@/components/common/Button";
import { getKycFi } from "@/services/getKycFi.service";
import FiUserBlock from "@/components/common/FiUserBlock";
import { Navbar } from "@/components/common/Navbar";

const Dashboard = () => {
  const [blockData, setBlockData] = useState<any>([]);
  const [institutionData, setInstitutionData] = useState<any>();
  const [searchData, setsearchData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFIBlocks();
        setBlockData(data.blockchain);
      } catch (err) {
        console.log("Error in Dashboard:", err);
      }
    };
    fetchData();
  }, [searchData]);

  useEffect(() => {
    setInstitutionData(blockData && blockData[0]);
  }, [blockData]);

  const handleKYCAdd = async () => {
    getKycFi(searchData)
      .then((res) => {
        setBlockData(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <Navbar />
    <div className="mt-32 ">
      <div className="  w-full flex justify-center items-center   ">
        <div className=" w-full max-w-[1240px] flex justify-center items-center ">
          <div className="flex flex-col justify-center items-center w-full mt-3 mb-8    ">
            {institutionData && (
              <div className="flex flex-col justify-center items-center mb-4 text-white">
                <div className="overflow-hidden border-4 border-blue-500">
                  <Image
                    src={institutionData.data.profilePictureUrl}
                    alt="Your Image Alt Text"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl mt-5 font-bold flex">
                  Welcome {institutionData.data.name}
                </h3>
                <div className="my-5 flex flex-col gap-2 flex-grow">
                  <SearchBar setsearchData={setsearchData} />{" "}
                  <Button
                    name={"Add"}
                    className="py-2"
                    onClick={() => handleKYCAdd()}
                  />
                </div>
              </div>
            )}
            <div className="flex w-full justify-center items-center">
              {blockData &&
                blockData.map((block: any, index: number) => {
                  if (index !== 0) {
                    return block && <FiUserBlock key={index} data={block} />;
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default financeAuthenticatedRoute(Dashboard);
