import React from 'react'
type btnprops = {
    name:string;
}
const Button = (props:btnprops) => {
    const{name} = props
  return (
        <button type='submit' className='w-full bg-info py-[10px] text-white rounded-2xl cursor-pointer'>{name}</button>

  )
}

export default Button