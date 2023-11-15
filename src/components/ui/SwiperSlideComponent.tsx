import React from 'react';

const TestimonialCard = ({content, name, bg, color, nameColor}) => {
  return (
    <div className={`border-[1px]  h-full border-solid border-white rounded-[0.9375rem] px-8 py-[5rem]`} style={{backgroundColor: bg}}>
     

      <p className="mt-2 text-[0.9375rem] text-style work-font font-medium text-center" style={{color: color}}>
       {content}
      </p>

      <div className="mt-4 flex justify-center">
        <a href="#" className="text-[0.8125rem] work-font font-semibold" tabIndex="0" role="link" style={{color: nameColor}}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
