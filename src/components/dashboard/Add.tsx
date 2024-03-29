"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import KycForm from "../common/KycForm";

const Add = () => {
  const [showKycForm, setShowKycForm] = useState(false);

  const handleButtonClick = () => {
    setShowKycForm(true);
  };
  return (
    <div className="  w-full flex justify-center items-center">
      {showKycForm ? (
        <KycForm />
      ) : (
        <div>
          <div className=" text-center text-2xl text-[#00d8ff] mb-2">
            Please click the button to proceed further
          </div>
          <Button
            className="w-1/3"
            name="Add KYC Detail"
            type="button"
            onClick={handleButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default Add;
