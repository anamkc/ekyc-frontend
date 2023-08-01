'use client'
import React, { useState } from "react";

type LabelProps = {
  isFocused: Boolean;
  label: string;
};

const Label = (props: LabelProps) => {
  return (
    <label
      className={`capitalize block text-base ${
        props.isFocused ? "text-white " : "text-light"
      }`}
    >
      {props.label}
    </label>
  );
};

export default Label;
