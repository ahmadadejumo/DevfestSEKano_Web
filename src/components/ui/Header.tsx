import { Button } from "./button";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/logo.png";
import smalllogo from "../../assets/smalllogo.png";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <nav className="bg-transparent w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <motion.div 
          className="flex items-center gap-2 justify-between"
          initial={{x:-300,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{type:'spring',duration:2}}
        >
          <img
            className="w-[2.25rem] h-[1.09256rem] md:hidden"
            src={smalllogo}
            alt=""
          />

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <img
              src={logo}
              className="w-[4rem] h-[2rem] hidden md:block"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          initial={{x:200,opacity:0}}
          animate={{x:0,opacity:1,transition:{ duration:1, }}}
          whileHover={{ scale: 1.1, transition:{type: "spring", stiffness: 400, damping: 10}}}
          // transition={{ duration:2, }}
          className="flex   md:order-2"
        >
          <Button className="btn rounded-[3.375rem] md:rounded-[3rem] box pt-[0.21rem] pr-[0.49594rem] pb-[0.197rem] pl-[0.5rem] md:pt-[0.66644rem] md:pr-[1.73894rem] md:pb-[0.66644rem] md:pl-[2.13375rem] px-[0.5rem] bg-[#34A853] hover:bg-[#42b561] flex md:inline-flex items-center md:gap-[0.09144rem]">
            <span className="hidden md:block text-[0.9375rem] font-bold leading-normal tracking-[-0.025rem] text-style text-[#FFFFFF]">
              Get Your Tickets
            </span>
            <img
              src={arrow}
              alt="arrow"
              className="w-[0.70919rem] h-[0.70919rem] md:w-[2rem] md:h-[2rem]"
            />
          </Button>
        </motion.div>
      </div>
    </nav>
  );
};
