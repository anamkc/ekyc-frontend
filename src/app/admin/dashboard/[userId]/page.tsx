"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { userdata } from "../page";

const Users = ({ params }: { params: { userId: string } }) => {
  const [userId, setUserId] = useState(params.userId);
  const[userDetails, setUserDetails] = useState(userdata[Number(userId) - 1]);
  console.log(userdata);
  console.log(userDetails)
  return (
    <div>
      <div>
        <div className="bg-black h-screen relative overflow-hidden">
          <div className=" mt-[160px]">
           <div className="flex justify-center items-center w-full h-[350px] ">
             <div className=" w-[75%] h-full flex flex-col  ">

             <div className=" w-48 h-48 rounded-full border-2 border-primary-purple flex items-center justify-center">
       
      </div>
                <div>
               <h1 className="text-white mt-4">
                <span >Name : </span>
                {userDetails.name}
               </h1>

                </div>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
