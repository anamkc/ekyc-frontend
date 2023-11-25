"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const IndividualProfile = ({ userDetails }: { userDetails: any }) => {
  console.log(userDetails);
  const [user, setUser] = React.useState(userDetails);
  

  

  return (
    // <div>
    //   <div className="flex items-center mb-10">
    //     <div className="mr-4 w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-blue-500">
    //       {user && (
    //         <Image
    //           src={user.profilePictureUrl}
    //           alt={`${user.firstName} ${user.lastName}'s Profile Picture`}
    //           width={202}
    //           height={202}
    //           className="rounded-full object-cover w-full h-full"
    //         />
    //       )}
    //     </div>
    //     <div>
    //       <p className="text-2xl font-semibold text-gray-800 dark:text-white">
    //         {user && `${user.firstName} ${user.lastName}`}
    //       </p>
    //       <p className="text-gray-600 dark:text-gray-300">{user && user.email}</p>
    //       <p className="text-gray-600 dark:text-gray-300">{user && user.phoneNumber}</p>
    //       <p className="text-gray-600 dark:text-gray-300">{user && user.address}</p>
    //     </div>
    //   </div>
    //   <div>
    //     <h5 className="mb-4 text-2xl font-medium text-gray-700 dark:text-gray-30
    //     0">
    //       citizenship image
    //     </h5>
    //   </div>
      
    //     <div className="mt-4">
    //       {user && <Image
    //         src={user.citizenshipImageUrl}
    //         alt={`${user.firstName} ${user.lastName}'s Citizenship Image`}
    //         width={300}
    //         height={150}
    //         className="rounded-md"
    //       /> }
    //     </div>
     
    // </div>
    <div className="max-w-[1240px] w-full flex justify-center items-center ">
      <div className="flex justify-center items-center w-full mt-3 mb-8    ">
        <div className=" w-[90%]  flex flex-col item-center justify-center  ">
          <div className=" w-full flex flex-col justify-center items-center lg:justify-start lg:items-start transition-all ">
            <div className=" w-48 h-48 rounded-full border-2 border-primary-purple flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={user.profilePictureUrl}
                  alt="Your Image Alt Text"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col mt-2 lg:flex-row lg:justify-between lg:w-full  ">
              <h1 className="text-white mt-4 text-center lg:ml-6 ml-2 ">
              {user.firstName} {user.lastName} 
              </h1>
              <div className="flex justify-center lg:justify-end">
                <button className="ml-4 cursor_pointer px-4 text-xl text-white lg:text-xl mb-3  bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] py-2 mt-2   rounded-3xl ">
                  verify user
                </button>
              </div>
            </div>
          </div>

          <div className=" text-white flex flex-col lg:flex-row items-center justify-center lg:justify-start   ">
            <div className=" w-[700px] flex justify-center items-center ">
            <div className="  lg:border-r-2 lg:border-white  lg:pr-[80px] ">
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider ">
                Email: {user.email}
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                phone: {user.phoneNumber}
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                Date of Birth : {user.dob}
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                Gender:Male
              </h1>
              <h1 className="text-[16px] sm:text-xl leading-10 tracking-wider text-center lg:text-start">
                Address: {user.address}
              </h1>
            </div>
            </div>
           
            <div className="flex justify-center items-center w-full mt-5 lg:mt-0 ">
              <div className=" h-[170px] w-[290px] sm:w-[400px] border-2 border-t-white">
              <div className="w-full h-full  overflow-hidden border-4 border-blue-500">
            <Image
              src={user.citizenshipImageUrl}
              alt="Your Image Alt Text"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
};

export default IndividualProfile;
