import mobilehero from "../../assets/mobilehero.png";
import heroImage from "../../assets/heroImage.png";
import group from "../../assets/group.svg";
import recyle from "../../assets/recycle.svg";
import { Button } from "./button";
import arrow from "../../assets/arrow.svg";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div className=" ">
      <div className="flex items-center justify-center">
        <img
          className="block absolute top-4 md:hidden w-[156px]"
          src={mobilehero}
          alt="hero img"
        />
        <img
          className="w-[250px] hidden md:block"
          src={heroImage}
          alt="hero img"
        />
      </div>

      <div className="mt-[100px] md:mt-[5rem]">
        <h1 className="text-center text-[1.25rem] tracking-[-0.0625rem] md:text-[4.29788rem] font-bold md:tracking-[-0.125rem] leading-normal">
          Welcome to the Devfest <br />{" "}
          <span className="text-[#34A853]">Student Edition</span> Kano!
        </h1>
      </div>

      <div className="relative mt-[5px]">
        <img
          src={group}
          alt=""
          className="absolute -z-10 w-[5.23719rem] h-[3.70781rem] md:w-[13.24725rem] md:h-[9.73338rem] right-6 -top-8 md:-top-[14rem] md:right-10"
        />

        <p className="text-center mx-auto w-[13.4375rem] h-[1.625rem] md:w-[54.9375rem] text-[#1E1E1E] text-[0.625rem] font-semibold leading-normal md:text-[1.5rem] text-style tracking-[-0.025rem]">
          "DevFest Student Edition: Where 'Ctrl + Z' isn't just for life, but
          also for tech"
        </p>
      </div>

      <div className="flex relative justify-center gap-[20px] md:gap-8 mt-[25px] mx-[20px]">
        <img
          src={recyle}
          alt=""
          className="absolute w-[3.39194rem] h-[3.63313rem] md:w-[6.36856rem] md:h-[6.33306rem] -left-4 -top-14 md:left-0 md:-top-6"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button className="rounded-[3.375rem] md:rounded-[3rem] box pt-[0.3rem] pl-[0.9rem] pb-[0.3rem] pr-[0.37rem] md:pt-[0.66644rem] md:pl-[2rem] md:pr-[1.73894rem] md:pb-[0.66644rem] md:r-[2.13375rem] hover:bg-[#42b561] bg-[#34A853]  flex items-center md:gap-2">
            <span className="text-[0.5rem] font-semibold leading-normal tracking-[-0.025rem] text-style text-[#FFFFFF] md:text-[0.94531rem] md:font-bold">
              Get Your Tickets
            </span>
            <img src={arrow} alt="arrow" className="w-[0.70919rem] h-[0.70919rem] md:w-[2rem] md:h-[2rem]" />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/*   */}
          <Button className="rounded-[3.375rem] md:rounded-[3rem] box pt-[0.3rem] pl-[0.9rem] pb-[0.3rem] pr-[0.37rem] md:pt-[0.66644rem] md:pl-[2rem] md:pr-[1.73894rem] md:pb-[0.66644rem] md:r-[2.13375rem] hover:bg-[#5d8dd9] bg-[#4285F4]  flex items-center md:gap-2">
            <span className="text-[0.5rem] font-semibold leading-normal tracking-[-0.025rem] text-style text-[#FFFFFF] md:text-[0.94531rem] md:font-bold">
              Apply to Volunteer
            </span>
            <img src={arrow} alt="arrow" className="w-[0.70919rem] h-[0.70919rem] md:w-[2rem] md:h-[2rem]" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
