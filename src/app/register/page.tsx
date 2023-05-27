import Shapes from "@/components/common/Shapes";
import type { InputGroupProps } from "../login/page";
import { AiTwotoneLock, AiTwotoneMail } from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa"
import InputGroup from "@/components/common/InputGroup";
import Button from "@/components/common/Button";
import Seperator from "@/components/common/Seperator";
import Link from "next/link";

const registerinputs: InputGroupProps[] = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
    icon: <FaUserCircle />,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Last Name",
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
];

const Register = () => {
  return (
    <div>
      <div className="bg-black h-screen relative overflow-hidden">
        <Shapes />
        <div className="flex justify-center items-center flex-col h-full px-4 ">
          <form
            action=""
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <h1 className="  text-white font-normal font-itim text-center text-4xl tracking-normal leading-tight">
              Register
            </h1>
            {registerinputs.map((inpfiels: InputGroupProps) => {
              const { name, label, placeholder, type, icon } = inpfiels;
              return (
                <InputGroup
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  type={type}
                  icon={icon}
                />
              );
            })}
            <div className="flex w-full my-4 items-start">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out mt-1"
                id="checkbox"
              />
              <label htmlFor="checkbox" className="ml-2 text-sm text-white ">
                By Continuing you accept to agree to our
                <span className=" cursor-pointer text-sm underline text-info mx-2">
                  Terms and Conditions
                </span>
                and
                <span className="underline  cursor-pointer text-sm text-info mx-2">
                  Privacy Policy
                </span>
              </label>
            </div>
            <Button name="Register" />
            <Seperator />
            <div className="flex justify-center items-center mt-2 ">
              <span className=" text-sm text-white">
                Already have an account?{" "}
                <Link href="/login">
                  <span className="text-sm text-info">Log in</span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
