import { NextPage } from "next";
import React from "react";
import { AiTwotoneMail, AiTwotoneLock } from "react-icons/ai";
import InputGroup from "@/components/common/InputGroup";
import Button from "@/components/common/Button";
import Seperator from "@/components/common/Seperator";
import Link from "next/link";
import Shapes from "@/components/common/Shapes";

export type InputGroupProps = {
  name: string;
  type: "text" | "email" | "password";
  icon: React.ReactNode;
  placeholder: string;
  label: string;
};

const inputs: InputGroupProps[] = [
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

const Login: NextPage = () => {
  return (
    <div>
      <div className="bg-black h-screen relative overflow-hidden">
        <Shapes/>
        <div className="flex justify-center items-center flex-col h-full px-4 ">
          <form action="" className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h1 className="  text-white font-normal font-itim text-center text-4xl tracking-normal leading-tight">
              Login
            </h1>
            {inputs.map((inp) => {
              const { name, label, type, placeholder, icon } = inp;
              return (
                <InputGroup
                  name={name}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  icon={icon}
                />
              );
            })}

            <span className=" cursor-pointer text-sm text-right text-info block my-2">
              {" "}
              Forgot password ?
            </span>

            <Button name="Login" />
            <Seperator />
            <div className="flex justify-center items-center mt-2 ">
              <span className=" text-sm text-white">
                Don't have an account?{" "}
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
