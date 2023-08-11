import React from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { addKyc } from "@/services/addkyc.service";
export type KycformProps = {
  name: string;
  type: "text" | "email" | "number" | "date" | "file";
  placeholder: string;
  label: string;
};

export type kycDetailProps = {
firstname:string;
lastname:string;
email:string;
phonenumber: number ;
dob : Date;
address1: string;  
citizenshipImage:any;
profilepic:any;


};

const kycinputs: KycformProps[] = [
  {
    name: "firstname",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
  },
  {
    name: "lastname",
    type: "text",
    label: "Last Name",
    placeholder: "Last Name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Email",
  },
  {
    name: "phonenumber",
    type: "number",
    label: "Phonenumber",
    placeholder: "phonenumber",
  },
  {
    name: "dob",
    type: "date",
    label: "Birth Date",
    placeholder: "Dob",
  },
  {
    name: "address",
    type: "text",
    label: "address",
    placeholder: "address",
  },
  {
    name: "citizenshipImage",
    type: "file",
    label: "Citizenship Image",
    placeholder: "Upload your citizenship image",
  },
  {
    name: "profilepic",
    type: "file",
    label: "Profile pic",
    placeholder: "Upload  photos",
  },
];
const Kycform = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
  
    addKyc(data)
    .then((data:any)=>{
      console.log(data)
      if(data.message === "success"){
        console.log("Vayo")
      }
    })
    .catch((err: any) => console.log(err));
  };
  return (
    <div className="w-full md:mx-4 m-auto flex flex-col  items-center md:relative px-7  ">
      <div className=" text-center text-2xl text-[#00d8ff] mb-3 md:fixed top-[95px] left-[20rem]">
        Fill The Kyc Form
      </div>
      <div className="w-full flex flex-col  items-center md:flex-row md:justify-center  lg:justify-end lg:gap-5">
        <div className="lg:fixed lg:flex lg:left-3 lg:top-[230px] md:hidden    ">
          <div className="w-[250px] h-[250px] hidden lg:flex rounded-full bg-gray-500 absolute left-[-70px] top-[-60px] opacity-50 z-10"></div>

          <Image
            src="/kycimages.jpg"
            width={600}
            height={300}
            alt=""
            className=" z-30 relative md:w-[65%] lg:w-[65%] xl:w-[600px] "
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-xl md: mr-8 mb-8 lg:w-[50%]  "
        >
          {kycinputs.map((inputs: KycformProps, index) => {
            const { name, label, placeholder, type } = inputs;
            return (
              <div className="mb-4" key={index}>
                <label
                  htmlFor="name"
                  className="block text-white font-bold mb-2"
                >
                  {label}
                </label>
                <input
                  {...register(name)}
                  type={type}
                  placeholder={placeholder}
                  id={name}
                  className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
                />
              </div>
            );
          })}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kycform;
