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
      className='w-full bg-info py-[10px] text-white rounded-2xl cursor-pointer'
      disabled={disabled}
      type={type ?? 'button'}
      {...additionalProps}
    >
      {name}
    </button>
  );
}