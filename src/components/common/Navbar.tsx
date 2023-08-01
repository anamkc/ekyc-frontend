import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export const Navbar = () => {
    const [showNav , setNav] = useState(false);

    function handleNav() {
        setNav(!showNav);
    }

  return (
    <div className='w-full h-[90px] bg-black shadow-lg fixed top-0 left-0 z-40 '>
        <div className='max-w-[1240px]  mx-auto px-4 flex justify-between items-center h-full md:flex-row '>
             <div><h1 className='text-[#00d8ff] text-3xl font-bold '>K<span className='text-white'>Y</span>C</h1></div>
             <div className= {` ${showNav? "flex z-40 " : "hidden"} md:flex duration-300`} >
                <ul className={`flex text-white  md:justify-center  items-center md:flex  ${showNav? " flex-col bg-black absolute top-[88px] left-0 w-full text-center   " : " hidden"} `}>
                    <li className= "p-4 text-xl">Home</li>
                    <li className= "p-4 text-xl" >About</li>
                    <li className= "p-4 text-xl" >Contact</li>
                    <li className= "p-4 text-xl" >Developers</li>
                    <button className='ml-4 cursor_pointer px-8 text-2xl mb-3  bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] py-3  rounded-3xl '>Sign in</button>
                </ul>
                

             </div>
             <div className='block  md:hidden'>
             {showNav ? (
            <AiOutlineClose
              onClick={handleNav}
              size={30}
              className='text-white cursor-pointer'
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNav}
              size={30}
              className='text-white cursor-pointer'
            />
          )}
        </div>
      </div>
    </div>
  );
};

 
