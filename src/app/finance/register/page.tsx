"use client";
import Shapes from "@/components/common/Shapes";
import { AiTwotoneLock, AiTwotoneMail } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import InputGroup from "@/components/common/InputGroup";
import Button from "@/components/common/Button";
import Separator from "@/components/common/Separator";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/services/register.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type RegisterProps = {
  Name: string;
  email: string;
  password: string;
};

type financeProps = {
  name: "name" | "email" |"password"| "Registration number" | "profilePicture";
  type: "number" | "email" | "text" | "password" | "file";
  placeholder: string;
  label: string;
  icon: any;
};

const registerInputs: financeProps[] = [
  {
    name: "name",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
    icon: <FaUserCircle />,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Email",
    icon: <AiTwotoneMail />,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Password",
    icon: <AiTwotoneLock />,
  },
  {
    name: "Registration number",
    type: "text",
    label: "registration number",
    placeholder: "registration number",
    icon: <FaUserCircle />,
  },
  {
    name: "profilePicture",
    type: "file",
    label: "Profile Picture",
    placeholder: "Upload your profile picture",
    icon: <AiTwotoneLock />,
  },
];

const Register = () => {

  const router = useRouter();
  const [profilePicFile, setProfilePicFile] = useState<File | null>(null);
  const schema: ZodType = z.object({
    name: z.string().min(1).max(30),
    email: z.string().email(),
    password: z.string().min(8).max(30),
  });

  const {
    reset,
    control,
    setError,
    register,
    setValue,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProfilePicFile(file);
  };

  const onSubmit = (data: any) => {
    signUp(data)
      .then((res: any) => {
        console.log(res);
        if (res.message === "success") {
          router.push("/login");
        }
      })

      .catch((err: any) => console.log(err));
    if (errors) {
      console.log(errors);
    }
  };

  return (
    <div>
      <div className="bg-black h-screen relative overflow-hidden ">
        <Shapes />
        <div className="w-full md:mx-4 m-auto flex flex-col items-center justify-center md:relative px-7 mt-28">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl md:mr-8 mb-8">
        {registerInputs.map((inputs:financeProps , index) => {
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
                  onChange={handleProfilePicChange}
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
      </div>
    </div>
  );
};

export default Register;
