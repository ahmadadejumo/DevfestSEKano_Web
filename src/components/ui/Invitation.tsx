import attend from "../../assets/attend.png";
import { Button } from "./button";
import arrow from "../../assets/arrow.svg";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const Invitation = () => {
  const image = {
    src: attend,
    alt: "img",
    };
  return (
    <div className="flex justify-center items-center mt-20">
      <div>
        <LazyLoadImage
          src={image.src}
          alt={image.alt}
          effect='blur'
          className="w-[400px] h-[300px] object-scale-down mx-auto md:w-[50%] md:h-[50%]"
        />
        <div className="flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button className="rounded-[3.375rem] md:rounded-[3rem] mx-auto box pt-[0.3rem] pl-[0.9rem] pb-[0.3rem] pr-[0.37rem] md:pt-[0.78013rem] md:pr-[2.03575rem] md:pb-[0.78019rem] md:pl-[2.49794rem] bg-[#34A853] hover:bg-[#42b561] flex items-center justify-center gap-1 md:gap-2">
              <span className=" font-bold leading-normal tracking-[-0.025rem] text-[0.5rem] md:text-[0.94531rem] text-style text-[#FFFFFF]">
                Get Your Tickets
              </span>
              <img src={arrow} alt="arrow" className="w-[0.70919rem] h-[0.70919rem] md:w-[2rem] md:h-[2rem]" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
