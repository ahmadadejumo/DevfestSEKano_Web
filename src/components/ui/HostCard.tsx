import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import person from "../../assets/person.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const HostCard = () => {
  const image = {
    src: person,
    alt: "img",
    width: "100%",
    height: "auto",
  };

  return (
    <div>
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
    </div>
  );
};
