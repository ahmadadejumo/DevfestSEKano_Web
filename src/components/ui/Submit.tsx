import arrow from "../../assets/arrow.svg";
import {Button} from "./button"
import code from "../../assets/code.png";
import {motion} from "framer-motion"
export const Submit = () => {
  return (
    <div className="mt-6">
      <div>
        <div className="relative">
          <motion.h2 
            className="text-[#1E1E1E] text-center text-[1.3rem] md:text-[3rem] text-style font-bold leading-normal md:leading-[3.5rem] mx-auto px-2 sm:w-[80%] md:w-[70%]"
            initial={{x:-500,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1}}
          >
              Submit your application to Speak / Host Workshop at DevFest Student Edition Kano 2023.
          </motion.h2>
          <img src={code} alt="img" className="hidden md:w-[10%] md:block absolute md:-top-2 md:left-[22rem] -z-10"/>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.1,transition:{type: "spring", stiffness: 400, damping: 10}}}
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:1,delay:1.5}}}
          >
            <Button className="rounded-[3.375rem] mt-4 md:rounded-[3rem] box pt-[0.3rem] pl-[0.9rem] pb-[0.3rem] pr-[0.9rem] md:pt-[0.66644rem] md:pl-[2rem] md:pr-[1.73894rem] md:pb-[0.66644rem] md:r-[2.13375rem] hover:bg-[#5d8dd9] bg-[#4285F4]  flex items-center md:gap-2">
              <span className="text-[0.5rem] font-semibold leading-normal tracking-[-0.025rem] text-style text-[#FFFFFF] md:text-[0.94531rem] md:font-bold">
                Apply
              </span>
              <img src={arrow} alt="arrow" className="w-[0.70919rem] h-[0.70919rem] md:w-[2rem] md:h-[2rem]" />
            </Button>
          </motion.div>       
        </div>
      </div>
    </div>
  )
}
