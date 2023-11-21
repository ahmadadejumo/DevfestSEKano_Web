// import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import person from "../../assets/person.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {motion} from 'framer-motion'
export const HostCard = () => {
   // Declare the width variable
  let width:number;
   //  Comparing the window variable to "undefined" to avoid "window is not defined" error
  if(typeof window !== 'undefined'){
    // setting the width variable to the width of the screen
    width = window.innerWidth
  }
  // x initial animation based on random number
  const xInitial = Math.floor(Math.random() *2 ) == 0 ? -300 : 300
  // Function that compares the width to the max width of mobile Phone(640) and conditionally returns the differnt animation style
  const SpeakerAnimation= ()=>  width <= 640 ? {x:[xInitial,0]} : {scale:[0,0.5,1]}

  const image = {
    src: person,
    alt: "img",
    width: "100%",
    height: "auto",
  };
  // console.log()

  return (
    <motion.div
      whileInView={SpeakerAnimation()} 
      transition={{duration:0.5,ease:'easeIn'}}
      className='overflow-hidden'
    >
      <Card className="w-[50%] sm:w-[15rem] md:w-[15.37rem] mx-auto">
        <CardContent className="card border-2 border-black">
          <LazyLoadImage
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
            effect="blur"
          />
        </CardContent>
        <CardFooter className="bg mt-2 text-center md:text-start leading-normal">
          <p className="text-[1.25rem] md:text-[2rem] text-style font-bold leading-normal tracking-[-0.0625rem]">
            Dave Miye
          </p>
          <p className="text-[#606060] text-[0.75rem] text-style font-bold">
            Product Designer, Meta
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
