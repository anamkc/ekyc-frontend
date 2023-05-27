import React from "react";

const Shapes = () => {
  return (
    <>
      <div className="absolute hidden md:flex h-[200px] w-[200px] top-[-3%] left-[-3%]">
        <div
          className="w-0 h-0 
            border-l-[100px] border-l-transparent
            border-b-[150px] border-b-info
            border-r-[100px] border-r-transparent"
        ></div>
        <div className="w-10 h-10 bg-info rounded-full absolute right-[-10%] opacity-50 bottom-8 "></div>
      </div>
      <div className="absolute hidden md:flex h-[325px] w-[325px] top-[-20%] right-[-10%] ">
        <div className="w-full h-full bg-info absolute top-[-20%] right-[-20%] "></div>
        <div className="h-full w-full bg-info opacity-50"></div>
      </div>
      <div className="absolute hidden md:flex h-[325px] w-[325px] bottom-[-20%] left-[-10%]">
      <div className="w-full h-full bg-info absolute bottom-[-20%] left-[-20%] "></div>
        <div className="h-full w-full bg-info opacity-50"></div>
      </div>
      <div className="absolute hidden md:flex h-[325px] w-[325px] bottom-[-20%] right-[-10%]">
      <div className="w-full h-full bg-[#69B9EB] absolute bottom-[-5%] right-[-5%] rounded-full "></div>
      <div
          className="w-0 h-0 
          opacity-50
          rotate-45
          absolute
          top-8
          left-8
            border-l-[40px] border-l-transparent
            border-b-[60px] border-b-info
            border-r-[40px] border-r-transparent
            "
        ></div>
      </div>
    </>
  );
};

export default Shapes;
