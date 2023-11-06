"use client";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { AiTwotoneMail, AiTwotoneLock } from "react-icons/ai";
import InputGroup from "@/components/common/InputGroup";
import Button from "@/components/common/Button";
import Seperator from "@/components/common/Seperator";
import Link from "next/link";
import Shapes from "@/components/common/Shapes";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/services/login.service";
import { useRouter } from "next/navigation";
import {useGlobalContext} from '@/app/Context/store'

export type InputGroupProps = {
  name: string;
  type: "text" | "email" | "password";
  icon: React.ReactNode;
  placeholder: string;
  label: string;
};

export const inputs: InputGroupProps[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    icon: <AiTwotoneMail />,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    icon: <AiTwotoneLock />,
  },
];

export type LoginProps = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const router = useRouter();
 const{userhash , setUserhash} = useGlobalContext();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    router.push('/dashboard');
    }
  }, []);
  const schema: ZodType = z.object({
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

  const submitHandler = (data: any) => {
    login(data)
      .then((res: any) => {
        console.log(res);
      
        const { token, message, hash } = res;
        if (token) {
          localStorage.setItem("token", token);
          console.log(token);
          router.push("/dashboard");
        }

      })
      .catch((err: any) => console.log(err));
    if (errors) {
      console.log(errors);
    }
  };

  return (
    <div>
      <div className="bg-black h-screen relative overflow-hidden">
        <Shapes />
        <div className="flex justify-center items-center flex-col h-full px-4 ">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <h1 className="  text-white font-normal font-itim text-center text-4xl tracking-normal leading-tight">
              Login
            </h1>
            {inputs.map((inp, index) => {
              const { name, label, type, placeholder, icon } = inp;
              return (
                <InputGroup
                  key={index}
                  label={label}
                  placeholder={placeholder}
                  type={type}
                  icon={icon}
                  {...register(name)}
                />
              );
            })}

            <span className=" cursor-pointer text-sm text-right text-info block my-2">
              {" "}
              Forgot password ?
            </span>

            <Button
              name="Sign in"
              type="submit"
              onSubmit={handleSubmit(submitHandler)}
            />
            <Seperator />
            <div className="flex justify-center items-center mt-2 ">
              <span className=" text-sm text-white">
                Don&apos;t have an account?{" "}
                <Link href="/register">
                  <span className="text-sm text-info">sign up</span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
