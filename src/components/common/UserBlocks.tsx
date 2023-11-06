"use client";
import React from 'react'
import type { BlockData } from '@/app/admin/dashboard/page'
import Image from 'next/image';
import profilepic from "/public/mypic.jpg";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
  

const UserBlocks = ({data}:{data:BlockData}) => {
    const router = useRouter();
    console.log("user" , data)
    const{ address,citizenshipImageUrl, dob,  email, firstname, id,lastname, phonenumber,  profilePictureUrl} = data
    const senddata=(data:BlockData)=>{
        console.log(data);
     
   
    }
  return (
    <>
    <div className="bg-gray-800 p-4 rounded-lg text-white shadow-lg w-[80%] md:w-1/2 lg:w-1/3 mx-2 my-4">
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500">
        <Image
                  src={profilepic}
                  alt="Your Image Alt Text"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
        </div>
      </div>
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{firstname} {lastname}</h3>
        <p className="text-gray-400">{email}</p>
      </div>
      <div className="flex justify-center">
      <Link
  href={{
    pathname: '/admin/dashboard/data.id',
    query: data.id
  }}
>
        <button className=" bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] text-white px-4 py-2 rounded-full hover:bg-blue-700" onClick={()=>{senddata(data)}}>
          View Details
        </button>
        </Link>
      </div>
    </div>
    </>
   
    
    
  )
}

export default UserBlocks