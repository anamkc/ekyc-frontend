import React from "react";
import profilepic from "/public/mypic.jpg";
import Image from "next/image";
import type { BlockData } from '@/app/admin/dashboard/page'

const Profile = ({ userDetails }: { userDetails: BlockData }) => {
  const {} = userDetails;
  return (
    <div className="max-w-[1240px] w-full flex justify-center items-center ">
      <div className="flex justify-center items-center w-full mt-3 mb-8    ">
        <div className=" w-[90%]  flex flex-col item-center justify-center  ">
          <div className=" w-full flex flex-col justify-center items-center lg:justify-start lg:items-start transition-all ">
            <div className=" w-48 h-48 rounded-full border-2 border-primary-purple flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={profilepic}
                  alt="Your Image Alt Text"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col mt-2 lg:flex-row lg:justify-between lg:w-full  ">
              <h1 className="text-white mt-4 text-center lg:ml-6 ml-2 ">
                
              </h1>
              <div className="flex justify-center lg:justify-end">
                <button className="ml-4 cursor_pointer px-4 text-xl text-white lg:text-xl mb-3  bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] py-2 mt-2   rounded-3xl ">
                  notify user
                </button>
              </div>
            </div>
          </div>

          <div className=" text-white flex flex-col lg:flex-row items-center justify-center lg:justify-start   ">
            <div className=" w-[500px] flex justify-center items-center text-center ">
            <div className="  lg:border-r-2 lg:border-white  lg:pr-[80px] ">
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start  ">
                Email:
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                phone:
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                Date of Birth : 
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                Gender:Male
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                Address:
              </h1>
            </div>
            </div>
           
            <div className="flex justify-center items-center w-full mt-5 lg:mt-0 ">
              <div className=" h-[170px] w-[290px] sm:w-[400px] border-2 border-t-white">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
