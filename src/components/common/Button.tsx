import React from 'react'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  className = '',
  name,
  disabled,
  type,
  ...additionalProps
}: ButtonProps) {
  return (
    <button
      className=' w-3/4 bg-info py-[10px] flex justify-center items-center m-auto text-white rounded-2xl cursor-pointer'
      disabled={disabled}
      type={type ?? 'button'}
      {...additionalProps}
    >
      {name}
    </button>
  );
}