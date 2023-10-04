import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addKyc } from "@/services/addkyc.service";
import Button from "./Button";

// Define the type for your form data
export type KycDetailProps = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  dob: Date;
  address: string;
  citizenshipImage: File | null | any;
  profilepic: File | null | any;
};

type KycformProps = {
  name: string;
  type: string;
  placeholder: string;
  label: string;
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
    label: "Phone Number",
    placeholder: "Phone Number",
  },
  {
    name: "dob",
    type: "date",
    label: "Date of Birth",
    placeholder: "Date of Birth",
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Address",
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
    label: "Profile Picture",
    placeholder: "Upload your profile picture",
  },
];


const Kycform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<KycDetailProps>();

  // State to store the selected profile picture and citizenship image files
  const [profilePicFile, setProfilePicFile] = useState<File | null>(null);
  const [citizenshipImageFile, setCitizenshipImageFile] = useState<File | null>(null);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProfilePicFile(file);
  };

  const handleCitizenshipImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCitizenshipImageFile(file);
  };

  const onSubmit: SubmitHandler<KycDetailProps> = (data) => {
    data.profilepic = profilePicFile;
    data.citizenshipImage = citizenshipImageFile;

    addKyc(data)
      .then((response) => {
        console.log(response);
        if (response.message === "success") {
          console.log("Kyc submitted successfully");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full md:mx-4 m-auto flex flex-col items-center justify-center md:relative px-7">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl md:mr-8 mb-8">
        {kycinputs.map((inputs: KycformProps, index) => {
          const { name, label, placeholder, type } = inputs;
          return (
            <div className="mb-4" key={index}>
              <label htmlFor={name} className="block text-white font-bold mb-2">
                {label}
              </label>
              {type === "file" ? (
                <input
                  type="file"
                  accept="image/*" // Specify accepted file types
                  onChange={name === "profilepic" ? handleProfilePicChange : handleCitizenshipImageChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
                />
              ) : (
                <input
                  {...register(name)}
                  type={type}
                  placeholder={placeholder}
                  id={name}
                  className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
                />
              )}
            </div>
          );
        })}
        <div className="flex items-center justify-center">
          <Button name="Sign in" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Kycform;
