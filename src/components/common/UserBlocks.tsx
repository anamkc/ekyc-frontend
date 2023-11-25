"use client";
import React from "react";
import type { BlockData } from "@/app/admin/dashboard/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { GoUnverified } from "react-icons/go";

const UserBlocks = ({ data }: { data: BlockData }) => {
  const router = useRouter();
  console.log("user", data);
  const {
    address,
    citizenshipImageUrl,
    dob,
    email,
    firstName,
    id,
    lastName,
    phoneNumber,
    profilePictureUrl,
    verified,
  } = data;
  const senddata = (data: BlockData) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg text-white shadow-lg w-[80%]  md:max-w-[40%] lg:w-[30%]  mx-2 my-4">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src={profilePictureUrl}
              alt="Your Image Alt Text"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          
        </div>
        <div className="text-center mb-4">
          <div className="flex justify-center gap-3">
          <h3 className="text-xl font-bold flex">
            {firstName} {lastName} 
          </h3>
          <div className="flex justify-center items-center text-3xl">
          { verified? <MdVerified className=" text-green-700 " /> : <GoUnverified className=" text-red-700" /> }
          </div>
             
            
          </div>
          
          <p className="text-gray-400">{email}</p>
          <p className="text-gray-400">{phoneNumber}</p>
          <p className="text-gray-400">{address}</p>
        </div>
        <div className="flex justify-center">
          <Link
            href={{
              pathname: `/admin/dashboard/userId`,
              query: {
                    userId : data.id,
              },
            }}
          >
            <button
              className=" bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] text-white px-4 py-2 rounded-full hover:bg-blue-700"
              onClick={() => {
                senddata(data);
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserBlocks;
