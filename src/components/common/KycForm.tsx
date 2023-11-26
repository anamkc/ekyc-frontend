import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addKyc } from "@/services/addKyc.service";
import Button from "./Button";
import { useRouter } from "next/navigation";

// Define the type for your form data
export type KycDetailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  dob: Date;
  address: string;
  citizenshipImage: File | null | any;
  profilePicture: File | null | any;
};

type KycFormProps = {
  name: "firstName" | "lastName" | "email" | "phoneNumber" | "dob" | "address" | "citizenshipImage" | "profilePicture";
  type: string;
  placeholder: string;
  label: string;
};

const kycInputs: KycFormProps[] = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
  },
  {
    name: "lastName",
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
    name: "phoneNumber",
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
    name: "profilePicture",
    type: "file",
    label: "Profile Picture",
    placeholder: "Upload your profile picture",
  },
];


const KycForm = () => {
  const router = useRouter();
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
    data.profilePicture = profilePicFile;
    data.citizenshipImage = citizenshipImageFile;

    addKyc(data)
      .then((response) => {
        console.log(response);
        if (response.success === true) {
          console.log("Kyc submitted successfully");
          router.push("/login");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full md:mx-4 m-auto flex flex-col items-center justify-center md:relative px-7">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl md:mr-8 mb-8">
        {kycInputs.map((inputs: KycFormProps, index) => {
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
                  onChange={name === "profilePicture" ? handleProfilePicChange : handleCitizenshipImageChange}
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
          <Button name="submit kyc" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default KycForm;
