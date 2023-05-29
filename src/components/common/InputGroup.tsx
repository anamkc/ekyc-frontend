"use client";
import React, { useState } from "react";
import Label from "./Label";
import TextInput from "./TextInput";

type InputGroupProps = {
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  icon: React.ReactNode;
  additionalProp?: any
};

const InputGroup = (props: InputGroupProps) => {
  const { label, type, placeholder, icon, additionalProp } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="my-2">
      <Label label={label} isFocused={isFocused} />
      <TextInput
        placeholder={placeholder}
        type={type}
        icon={icon}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        additionalProp = {additionalProp}
      />
    </div>
  );
};

export default InputGroup;
