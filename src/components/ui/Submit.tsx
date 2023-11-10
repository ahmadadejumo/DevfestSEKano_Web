import arrow from "../../assets/arrow.svg";
import {Button} from "./button"
import code from "../../assets/code.png";
import {motion} from "framer-motion"
export const Submit = () => {
  return (
    <div className="mt-6">
       <div>
        <div className="relative">
           <h2 className="text-[#1E1E1E] text-center text-[1.3rem] md:text-[2.5rem] text-style font-bold leading-normal mx-auto px-2 sm:w-[80%] md:w-[60%]">Submit your application to Speak / Host Workshop at DevFest Student Edition Kano 2023.</h2>
           <img src={code} alt="img" className="hidden md:w-[10%] md:block absolute md:-top-2 md:left-[22rem] -z-10"/>
        </div>
       <div className="flex justify-center items-center">
            <motion.div
             whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                 <Button
               className="rounded-[3.375rem] md:rounded-[3rem] box py-[0.21rem] mt-4 md:py-[1.5rem] pl-[1.2rem] md:pl-[2rem] md:pr-[1rem] hover:bg-[#5d8dd9] bg-[#4285F4]  flex items-center gap-2"><span className="text-[0.9375rem] font-bold leading-normal tracking-[-0.025rem]text-style text-[#FFFFFF]">Apply to Volunteer</span> 
               <img src={arrow} alt="arrow" />
               </Button>
            </motion.div>
              
       </div>
       </div>
    </div>
  )
}
