import mobilehero from "../../assets/mobilehero.png"
import desktophero from "../../assets/desktophero.png";
// import group from "../../assets/group.png"
import {CallToActionBtn} from "./CallToActionBtn"
export const Hero = () => {
  return (
    <div className="flex gap-6 flex-col items-center justify-center relative">
       <div className="absolute -top-10 md:-top-4">
         <img className="block sm:hidden mr-8 object-cover" height="auto" src={mobilehero} alt="hero img" />
         <img className="object-cover hidden sm:block" src={desktophero} alt="hero img" />
       </div>

       <div>
        <div className="mt-[3rem] sm:mt-[12rem] md:mt-[12rem]">
          <h1 className="wrap text-center text-[1.5rem] md:text-[4.29788rem] font-semibold md:font-bold leading-normal md:leading-[5rem]">Welcome to the Devfest <br/> <span className="text-[#34A853]">Student Edition</span> Kano!</h1>
        </div>
        <div className="w-[95%] mt-4 mx-auto md:w-[88%]">
          <p className="text-center text-[#282828] text-[1rem] font-medium leading-[1rem] md:text-[1.5rem] md:font-medium text-style tracking-[-0.025rem] md:leading-[2.59375rem]">Gear up for a lit day in Kano 2023! Imagine 24 hours jam-packed with 40+ top  Tech influencers vibing on Software Development, AI, XR Tech, Gaming, Mobile trends, Cloud solutions, IP rights and Startup Funds. Get ready to experience the wildest DevFest Student Edition – the ultimate tech Confrence of the year! 🚀🔥</p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
           <CallToActionBtn cls_name="rounded-[3.375rem] md:rounded-[3rem] py-[0.21rem] box md:py-[1.5rem] px-[0.37rem] md:px-[2rem] hover:bg-[#5d8dd9] flex items-center" text="Get Your Tickets" bg="#34A853"/>
           <CallToActionBtn cls_name="rounded-[3.375rem] md:rounded-[3rem] second-box py-[0.21rem] md:py-[1.5rem] px-[0.37rem] md:px-[2rem] bg-[#4285F4] hover:bg-[#5d8dd9] flex items-center" text="Apply to Volunteer" bg="#4285F4"/>
    </div>
       </div>
      
    </div>
  )
}
