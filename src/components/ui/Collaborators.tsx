import aliko from "../../assets/aliko.png";
import bayero from "../../assets/bayero.png";
import northwest from "../../assets/northwest.png";
import green from "../../assets/green.png";
import yellow from "../../assets/yellow.png";
import globe from "../../assets/globe.svg";
import {motion} from 'framer-motion'

export const Collaborators: React.FC = () => {
  return (
    <div className="">
      <div className="flex relative flex-wrap justify-center gap-y-[0.8125rem] gap-x-[1.8125rem] md:gap-[1.1875rem] mt-[5rem] md:mt-[6rem] w-full mx-auto">
        <motion.img
          initial={{x:-300,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1,delay:1.7}}  
          className=" object-scale-down w-[10rem] h-[0.87744rem] md:w-[20rem] md:h-[2.82613rem]" 
          src={aliko} 
          alt="adust tech"
        />
        <motion.img  
          className=" object-scale-down w-[10rem] h-[0.87744rem] md:w-[20rem] md:h-[2.82613rem]" 
          src={bayero} 
          alt="buk kano"
          initial={{y:-300,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1,delay:1.7}}
        />
        <img
          src={globe}
          alt=""
          className="absolute hidden md:block right-0 md:right-[2rem] md:top-12 md:w-[6rem] object-scale-down"
        />
        <motion.img
          initial={{x:300,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1,delay:1.7}} 
          className=" object-scale-down w-[10rem] h-[0.87744rem] md:w-[20rem] md:h-[2.82613rem]" 
          src={northwest} 
          alt="maitama sule kano"
        />
      </div>
      <div className="relative w-full mt-4 md:mt-8">
        <motion.img 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5,delay:1.7}}
          src={green} 
          alt="" 
          className="absolute" />
        <motion.img 
          initial={{y:300,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1,delay:1.5}}
          src={yellow} 
          alt="" />
      </div>
    </div>
  );
};
