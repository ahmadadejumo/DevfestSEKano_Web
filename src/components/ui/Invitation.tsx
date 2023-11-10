import React from 'react'
import attend from "../../assets/attend.png"
import {Button} from "./button"
import arrow from "../../assets/arrow.svg";
import {motion} from "framer-motion"
export const Invitation = () => {
  return (
    <div className="flex justify-center items-center mt-[2rem] md:mt-20">
     <div>
       <img src={attend} alt="img" className="w-[400px] h-[300px] object-scale-down mx-auto md:w-[50%] md:h-[50%]"/>
    <div className='flex justify-center items-center'>
      
      <motion.div
       whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
          <Button className="rounded-[3.375rem] md:rounded-[3rem] mx-auto box py-[1rem] md:py-[1.4rem] pl-[1.5rem] md:pl-[1rem] bg-[#34A853] hover:bg-[#42b561] flex items-center justify-center gap-1 md:gap-2"><span className=" font-bold leading-normal tracking-[-0.025rem] text-[0.7rem] md:text-[1.10669rem] text-style text-[#FFFFFF]">Get Your Tickets</span> 
    <img src={arrow} alt="arrow" className="" />
    </Button>
      </motion.div>
    </div>

     </div>
    </div>
  )
}
