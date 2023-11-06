import { Button } from "./button";
import { Link } from "react-router-dom";
import { AlignJustify, X,} from "lucide-react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import arrow from "../../assets/arrow.svg";
import menu from "../../assets/menu.svg";

export const Header = () => {
    const [active, setIsActive] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>()

    const handleNavBar = () => {
        setIsActive(!active)
        console.log(active);
    }

     // useEffect function to handle outside click to toggle
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  return (    
<nav className="bg-transparent w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
    <div className="flex  items-center gap-2 justify-between">
    <img onClick={handleNavBar} src={menu} alt="menu" className="mb-1 cursor-pointer md:hidden" />

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col text-[#1E1E1E] md:flex-row md:gap-[1.9375rem] ">
      <li className="text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
        <Link to="/"> Home</Link>
      </li>
      <li className="text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
      <Link to="/"> Agenda</Link>
      </li>
      <li className="text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
      <Link to="/"> Contact</Link>
      </li>
      <li className="text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
      <Link to="/"> Sponsors</Link>
      </li>
    </ul>
  </div>
    </div>
  
  <div className="flex md:order-2">
    <Button className="rounded-[3.375rem] md:rounded-[3rem] box py-[0.21rem] md:py-[1.5rem] px-[0.5rem] md:px-[2rem] bg-[#34A853] hover:bg-[#42b561] flex items-center gap-2"><span className="hidden md:block text-[0.9375rem] font-bold leading-normal tracking-[-0.025rem]text-style text-[#FFFFFF]">Get Your Tickets</span> 
    <img src={arrow} alt="arrow" />
    </Button>
  </div>

        <ul
          ref={menuRef}
          className={`mobile-menu ${
            active ? "w-[100%] bg-white dark:bg-[#020617]" : "w-0"
          } h-screen overflow-hidden transition-all duration-300 ease-in-out z-50 absolute top-0 left-0 lg:hidden`}
        >
          {active && (
          
            <li className="py-[1.2rem] px-2 flex justify-between">
              <X variant="outline"
              onClick={handleNavBar}
              className="close border-primary border-[1px] w-[1.5rem] h-[1.5rem] right-4 cursor-pointer font-medium text-[40px] leading-5 not-italic absolute"
            />
            </li>
          )}
          <ul className="border-2 border-red-500">
          <li className="mb-4 text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
        <Link to="/" onClick={() => {
                    setIsActive(false);
                }}> Home</Link>
      </li>
            <li className="mb-4 text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
            <Link to="/"   onClick={() => {
                    setIsActive(false);
                }}> Agenda</Link>
            </li>
            <li className="mb-4 text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
            <Link to="/"   onClick={() => {
                    setIsActive(false);
                }}> Speakers</Link>

            </li>
            <li className="mb-4 text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
            <Link to="/"   onClick={() => {
                    setIsActive(false);
                }}> Sponsors</Link>
            </li>
            <li className="mb-4 text-[1.2rem] font-semibold text-style tracking-[-0.025rem]">
            <Link to="/"   onClick={() => {
                    setIsActive(false);
                }}> Contact</Link>
            </li>
            
          </ul> 
        </ul>
      </div>
</nav>

  )
}
