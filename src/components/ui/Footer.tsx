import React from 'react';
import footerimg from "../../assets/footerimg.png"
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

type imgSourece = {
  footerimg: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black mt-10 p-6 md:flex md:justify-between">
      <div className="flex flex-col md:flex-row md:justify-between w-full">

           {/* Second Column */}
        <div className="mb-4 flex justify-center md:items-center">
          <img src={footerimg} alt="Logo" className="" />
        </div>

      <div className="flex justify-center gap-2 w-full md:w-[66.6%] md:justify-evenly md:items-center md:flex-row-reverse">
         {/* Third Column */}
        <div>
          <h3 className="text-white text-center tex-[0.875rem] text-style font-semibold mb-2 leading-normal">Follow us on:</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Youtube />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Mail />
            </a>
          </div>
        </div>

          {/* First Column */}
        <div className="mb-4">
          <ul>
            <li>
              <a href="#" className="text-white text-center text-[0.975rem] text-style font-medium mb-2 leading-normal md:text-[1rem] md:font-semibold">
               Sponsor Event
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-center text-[0.975rem] text-style font-medium mb-2 leading-normal md:text-[1rem] md:font-semibold">
                Join the Community
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-center text-[0.975rem] text-style font-medium mb-2 leading-normal md:text-[1rem] md:font-semibold">
                Apply to Speak
              </a>
            </li>
          </ul>
        </div>

      </div>

      </div>
    </footer>
  );
};

export default Footer;



 {/* Mobile View */}
      // <div className="md:hidden text-center">
      //   <img src={footerimg} alt="Logo" className="" />
      //   <div className="flex space-x-4">
      //     <a href="#" className="text-gray-300 hover:text-white">
      //       <i className="fab fa-facebook"></i>
      //     </a>
      //     <a href="#" className="text-gray-300 hover:text-white">
      //       <i className="fab fa-twitter"></i>
      //     </a>
      //     <a href="#" className="text-gray-300 hover:text-white">
      //       <i className="fab fa-instagram"></i>
      //     </a>
      //   </div>
      //   <div className="mt-4">
      //     <a href="#" className="text-gray-300 hover:text-white">
      //       Link 1
      //     </a>
      //   </div>
      //   <div className="mt-4">
      //     <a href="#" className="text-gray-300 hover:text-white">
      //       Link 2
      //     </a>
      //   </div>
      //   <div className="mt-4">
      //     <a href="#" className="text-gray-300 hover:text-white">
      //       Link 3
      //     </a>
      //   </div>
      // </div>