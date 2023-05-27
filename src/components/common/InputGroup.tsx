"use client";
import React, { useState } from "react";
import Label from "./Label";
import TextInput from "./TextInput";

type InputGroupProps = {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  icon: React.ReactNode;
};

const InputGroup = (props: InputGroupProps) => {
  const { label, name, type, placeholder, icon } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="my-2">
      <Label label={label} isFocused={isFocused} />
      <TextInput
        name={name}
        placeholder={placeholder}
        type={type}
        icon={icon}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
    </div>
  );
};

export default InputGroup;
