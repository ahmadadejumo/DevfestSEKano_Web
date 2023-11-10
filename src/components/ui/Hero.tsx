import mobilehero from "../../assets/mobilehero.png";
import desktophero from "../../assets/desktophero.png";
import group from "../../assets/group.png";
import recyle from "../../assets/recyle.png";
import {Button} from "./button";
import arrow from "../../assets/arrow.svg";
import {motion} from "framer-motion";
export const Hero = () => {
  return (
    <div className="flex gap-6 flex-col items-center justify-center relative">
       <div className="absolute -top-10 md:-top-4">
         <img className="block sm:hidden mr-8 object-cover" height="auto" src={mobilehero} alt="hero img" />
         <img className="object-cover hidden sm:block" src={desktophero} alt="hero img" />
       </div>

       <div>
        <div className="mt-[3rem] relative sm:mt-[12rem] md:mt-[12rem]">
          <img src={group} alt="" className="absolute right-0 -z-10 w-[20%] md:w-[15%] md:right-10 md:-top-6 top-20"/>
          <h1 className="wrap text-center text-[1.5rem] md:text-[4.29788rem] font-semibold md:font-bold leading-normal md:leading-[5rem]">Welcome to the Devfest <br/> <span className="text-[#34A853]">Student Edition</span> Kano!</h1>
        </div>
        <div className="w-[95%] relative mt-4 mx-auto md:w-[65%]">
          <img src={recyle} alt="" className="absolute w-[20%] md:w-[15%] top-10 -left-4 md:-top-14 md:-left-28" />
          <p className="text-center text-[#282828] text-[0.9rem] font-semibold leading-[1rem] md:text-[1rem] md:font-bold text-style tracking-[-0.025rem] md:leading-normal">Gear up for a lit day in Kano 2023! Imagine 24 hours jam-packed with 40+ top  Tech influencers vibing on Software Development, AI, XR Tech, Gaming, Mobile trends, Cloud solutions, IP rights and Startup Funds. Get ready to experience the wildest DevFest Student Edition – the ultimate tech Confrence of the year! 🚀🔥</p>
        </div>
       

        <div className="flex justify-center gap-1 md:gap-8 mt-8">
             <motion.div   whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button className="rounded-[3.375rem] md:rounded-[3rem] box py-[0.21rem] md:py-[1.5rem] pl-[1.5rem] md:pl-[2rem] md:pr-[1rem] hover:bg-[#42b561] bg-[#34A853]  flex items-center md:gap-2"><span className="text-[0.9375rem] font-bold leading-normal tracking-[-0.025rem]text-style text-[#FFFFFF]">Get Your Tickets</span> 
    <img src={arrow} alt="arrow" />
    </Button>
        </motion.div>

         <motion.div
            whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
         >
             <Button className="rounded-[3.375rem] md:rounded-[3rem] box py-[0.21rem] md:py-[1.5rem] pl-[1.5rem] md:pl-[2rem] md:pr-[1rem] hover:bg-[#5d8dd9] bg-[#4285F4]  flex items-center md:gap-2"><span className="text-[0.9375rem] font-bold leading-normal tracking-[-0.025rem]text-style text-[#FFFFFF]">Apply to Volunteer</span> 
    <img src={arrow} alt="arrow" />
    </Button>
         </motion.div>

    </div>
       </div>
      
    </div>
  )
}
