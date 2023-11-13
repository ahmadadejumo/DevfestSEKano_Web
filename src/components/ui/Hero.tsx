import mobilehero from "../../assets/mobilehero.png";
import heroImage from "../../assets/heroImage.png";
import group from "../../assets/group.svg";
import recyle from "../../assets/recycle.svg";
import { Button } from "./button";
import arrow from "../../assets/arrow.svg";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div className="">
      <div className="">
        <img
          className="sm:hidden w-[156px] absolute top-[26px] left-2/4 right-2/4 -ml-[80px]"
          src={mobilehero}
          alt="hero img"
        />
        <img
          className="w-[250px] hidden sm:block"
          src={heroImage}
          alt="hero img"
        />
      </div>

      <div className="mt-[100px] md:mt-[12rem]">
        <h1 className="text-center text-[24px] font-semibold md:text-[4.29788rem] md:font-bold leading-normal md:leading-[5rem]">
          Welcome to the Devfest <br />{" "}
          <span className="text-[#34A853]">Student Edition</span> Kano!
        </h1>
      </div>

      <div className="mt-[5px] mx-[90px] md:w-[65%]">
        <img
          src={group}
          alt=""
          className="absolute right-[5px] -z-10 w-[83px] md:w-[15%] md:right-10 md:-top-6 top-[185px]"
        />

        <p className="text-center text-[#1E1E1E] text-[10px] font-medium leading-[1rem] md:text-[1rem] md:font-bold text-style tracking-[-0.025rem] md:leading-normal">
          "DevFest Student Edition: Where 'Ctrl + Z' isn't just for life, but
          also for tech!"
        </p>
      </div>

      <div className="flex justify-center gap-[20px] md:gap-8 mt-[20px] mx-[20px]">
        <img
          src={recyle}
          alt=""
          className="absolute w-[54px] md:w-[15%] md:-top-14 md:-left-28 left-[5px] top-[200px]"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button className="rounded-[3.375rem] md:rounded-[3rem] box md:py-[1.5rem] py-[6px] pl-[6px] pr-[3px] md:pl-[2rem] md:pr-[1rem] hover:bg-[#42b561] bg-[#34A853]  flex items-center md:gap-2">
            <span className="text-[14px] font-bold leading-normal tracking-[-0.025rem]text-style text-[#FFFFFF]">
              Get Your Tickets
            </span>
            <img src={arrow} alt="arrow" className="w-[30px]" />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button className="rounded-[3.375rem] md:rounded-[3rem] second-box py-[6px] pl-[6px] pr-[3px] md:py-[1.5rem] md:pl-[2rem] md:pr-[1rem] hover:bg-[#5d8dd9] bg-[#4285F4]  flex items-center md:gap-2">
            <span className="text-[14px] font-bold leading-normal tracking-[-0.025rem]text-style text-[#FFFFFF]">
              Apply to Volunteer
            </span>
            <img src={arrow} alt="arrow" className="w-[30px]" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
