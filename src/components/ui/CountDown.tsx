import React from 'react';
import box from "../../assets/box.png"
import location from "../../assets/location.png"
import globe from "../../assets/globe.png"
import down from "../../assets/down.png"
import {useState} from "react"
import {useEffect} from "react"
import {CountdownItem } from "./CountdownItem"
import time from "../../assets/time.svg"

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountDown: React.FC = () => {
    const targetDate = new Date('2023-12-02T08:00:00'); // Set your target date and time
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });


    useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="my-10 flex w-full justify-center items-center relative">
        <div className="w-[90%] sm:w-[80%] md:w-[50%]">
              <h2 className="text-[1.3rem] text-[#1E1E1E] text-center text-style md:text-[2.5rem] font-bold leading-normal tracking-[-0.0625rem]">Count-Down 😌</h2>
            <img src={globe} alt="img" className="absolute w-[2.49431rem] left-0 md:left-12 md:w-[8rem]" />
            
        <div className="bg-[#FFF1C4] py-4 md:py-5">
            <div className="heading flex justify-center items-center gap-10">

               <div className="flex justify-center items-center mb-4 gap-3">
                <img src={box} alt="" className="w-[1.125rem] md:w-[3rem]" />
                 <p className="text-[0.875rem] text-style font-semibold leading-normal tracking-[-0.0625rem] md:text-[2rem] md:font-bold">Dec 2nd, 8 AM</p>
               </div>
                 <div className="flex justify-center items-center mb-4 gap-3">
                <img src={location} alt="" className="w-[1.125rem] md:w-[3rem]" />
                 <p className="text-[0.875rem] text-style font-semibold leading-normal tracking-[-0.0625rem] md:text-[2rem] md:font-bold">Kano</p>
               </div>
            </div>


            <div className="content flex justify-center md:gap-10 gap-5">

               <CountdownItem value={timeRemaining.days} label="Days" />
            <CountdownItem value={timeRemaining.hours} label="Hours" />
            <CountdownItem value={timeRemaining.minutes} label="Minutes" />

            <img src={time} alt="" className="absolute right-5 top-[4rem] md:right-[23rem] md:top-[8rem]" />
            <CountdownItem value={timeRemaining.seconds} label="Seconds" />

            </div>
        </div>
        <img src={down} alt="img" className="absolute w-[5rem] md:w-[8rem] top-[10rem] right-[4rem] md:top-[15rem] md:right-[30rem]" />

        </div>
    </div>
  )
}
