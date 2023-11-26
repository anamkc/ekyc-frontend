// Footer.js

import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleLoginCustomer = () => {
    router.push("/login");
  };

  const handleSignupCustomer = () => {
    router.push("/register");
  };

  const handleLoginFinancialInstitution = () => {
    router.push("/finance/login");
  };

  const handleSignupFinancialInstitution = () => {
    router.push("/finance/register");
  };

  const handleLoginAdmin = () => {
    router.push("/admin/login");
  };

  return (
    <footer className="bg-black text-white p-6">
      <div className="max-w-4xl gap-4 mx-auto flex flex-wrap justify-center">
        <div className="mb-4 flex flex-col items-start justify-start mr-4">
          <p className="text-lg font-semibold mb-2">User:</p>
          <button
            onClick={handleLoginCustomer}
            className="mb-2 cursor-pointer text-white hover:text-gray-300 transition duration-300"
          >
            Login as User
          </button>
          <button
            onClick={handleSignupCustomer}
            className="mb-2 cursor-pointer text-white hover:text-gray-300 transition duration-300"
          >
            Signup as User
          </button>
        </div>
        <div className="mb-4 flex flex-col items-start justify-start mr-4">
          <p className="text-lg font-semibold mb-2">Financial Institution:</p>
          <button
            onClick={handleLoginFinancialInstitution}
            className="mb-2 cursor-pointer text-white hover:text-gray-300 transition duration-300"
          >
            FI Login
          </button>
          <button
            onClick={handleSignupFinancialInstitution}
            className="mb-2 cursor-pointer text-white hover:text-gray-300 transition duration-300"
          >
            FI Signup
          </button>
        </div>
        <div className="mb-4 flex flex-col items-start justify-start">
          <p className="text-lg font-semibold mb-2">Admin:</p>
          <button
            onClick={handleLoginAdmin}
            className="mb-2 cursor-pointer text-white hover:text-gray-300 transition duration-300"
          >
            Admin Login
          </button>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright 2023 Blockchain based e-KYC verification system</p>
      </div>
    </footer>
  );
};

export default Footer;
