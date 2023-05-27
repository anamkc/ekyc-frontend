import React from "react";
type LabelProps = {
  isFocused: Boolean;
  label: string;
};
const Label = (props: LabelProps) => {
  const { isFocused, label } = props;
  return (
    <label
      className={`capitalize block text-base ${
        isFocused ? "text-white " : "text-light"
      }`}
    >
      {label}
    </label>
  );
};

export default Label;
