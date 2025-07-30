import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center my-3 sm:text-3xl font-bold">
      <p className="text-[#18181b]">
        {text1} 
        <span className="text-[#fc7f09] "> {text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700">
      </p>
    </div>
  );
};

export default Title;
