import React from 'react';

interface CountdownItemProps {
  value: number;
  label: string;
}

export const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#4285F4] py-[0.9rem] md:py-[1.2rem] px-[0.8rem] md:px-[1.2rem] rounded-[0.5rem] text-white text-[1.25rem] md:text-[2rem] font-bold leading-normal text-style tracking-[-0.025rem]">
        <p>{value}</p>
      </div>
      <p className="text-[#333] font-semibold text-style leading-normal text-[1rem] md:text-[1.38281rem] tracking-[-0.025rem]">{label}</p>
    </div>
  );
};
