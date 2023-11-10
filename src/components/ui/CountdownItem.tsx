import React from 'react';

interface CountdownItemProps {
  value: number;
  label: string;
}

export const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#4285F4] flex items-center justify-center w-[3rem] md:w-[8rem] py-[0.92881rem] px-[0.85425rem] md:py-[3.01rem] text-center 
       md:px-[2.25rem] rounded-[0.5rem] text-white text-[1.25rem] md:text-[2rem] font-bold leading-normal text-style tracking-[-0.025rem]">
        <p className='text-center'>{value}</p>
      </div>
      <p className="text-[#333] font-semibold text-style leading-normal text-[1rem] md:text-[1.38281rem] tracking-[-0.025rem]">{label}</p>
    </div>
  );
};
