import React from 'react';

const TestimonialCard = ({content, name, bg, color, nameColor, qouteColor}) => {
  return (
    <div className={`border-[1px] shadow-lg relative h-full border-solid border-white rounded-[0.9375rem] px-[4rem] md:px-[3rem] py-[3rem] md:py-[5rem]`} style={{backgroundColor: bg}}>
     
      <span style={{color: qouteColor}} className="absolute font-bold work-font text-[2.23931rem] md:text-[6rem] top-4 left-4">&#8220;</span>

      <p className="mt-2 text-[0.34988rem] md:text-[0.9375rem] text-style work-font font-medium text-center leading-normal" style={{color: color}}>
       {content}
      </p>
      <span style={{color: qouteColor}} className="absolute font-bold work-font text-[2.23931rem] md:text-[6rem] right-10 md:right-4 md:top-[11rem]">&#8221;</span>

      <div className="mt-4 flex justify-center">
        <a href="#" className="text-[0.30325rem] md:text-[0.8125rem] work-font font-semibold leading-normal" tabIndex="0" role="link" style={{color: nameColor}}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
