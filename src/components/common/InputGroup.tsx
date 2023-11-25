'use client'
import React, { useState, forwardRef } from "react";

type InputGroupProps = {
  label: string;
  type: "text" | "email" | "password" | "number" | "file";
  placeholder: string;
  icon: React.ReactNode;
  name: string;
};

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
      setIsFocused(true);
    };
    const handleBlur = () => {
      setIsFocused(false);
    };
    const { label, icon, ...additionalProp } = props;
    
    return (
      <div className="my-2">
        <label
          className={`capitalize block text-base ${isFocused ? "text-white " : "text-light"}`}
        >
          {label}
        </label>
        <div className="w-full relative">
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full p-2 py-[10px] border-4 border-light focus:border-white rounded-lg bg-transparent focus:text-white text-light relative pl-12 outline-none focus:outline-none"
            {...additionalProp}
            ref={ref}
          />
          <span
            className={`text-2xl top-[14px] absolute left-2 border-r-2 pr-2 ${isFocused ? "text-white " : "text-light"}`}
          >
            {icon}
          </span>
        </div>
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
