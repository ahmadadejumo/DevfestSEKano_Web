import { HostCard } from "./HostCard";
import code from "../../assets/code.png";

export const Hosts = () => {
  return (
    <div className="mt-20 md:mt-[10rem] flex justify-center items-center ">
       <div className="w-[90%] pt-6 relative pb-20  mx-auto bg-[#FFFAEB]">
      <h2 className="text-center text-[1.3rem] text-[#1E1E1E] text-style md:text-[2.5rem] font-bold leading-normal tracking-[-0.0625rem]">
        Meet Our Amazing
      </h2>
      <h2 className="text-[1.3rem] text-[#E94435] text-center text-style md:text-[2.5rem] font-bold leading-normal tracking-[-0.0625rem]">
        Speakers <span className="">🔥</span>
      </h2>

      <div className="grid mt-[2rem] md:mt-[5rem] grid-cols-1 sm:grid-cols-2 sm:gap-x-6 sm:w-[90%] md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-[90%] md:gap-x-[6.25rem] mx-auto">
        <HostCard />
        <img
          src={code}
          className="absolute top-[25rem] -right-5 w-[2.81613rem]"
        />
        <HostCard />
        <HostCard />
        <HostCard />
        <HostCard />
        <HostCard />
        <img src={code} className="absolute -left-5 w-[2.81613rem]" />
      </div>
    </div>
    </div>
   
  );
};

{/* <img src={code} className="absolute  -left-10 w-[2.81613rem]" /> */}