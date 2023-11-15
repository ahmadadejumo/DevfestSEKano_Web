import React from 'react';
import next from "../../assets/next.svg"
import {
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper  } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperSlideComponent from "./SwiperSlideComponent"


export const Testimony = () => {
    const swiper = useSwiper()
  return (
    <div className="border-2 border-red-500 mt-10 bg-[#F3F5F6]">

        <h2 className="text-center text-[1.3rem] text-[#1E1E1E] text-style md:text-[2.5rem] font-bold leading-normal tracking-[-0.0625rem]">What Our Attendees <br/> Have To Say</h2>

        <div className="flex pb-20">


         <div className="border-2 border-black w-[30%] flex justify-center items-center">
           <button onClick={() => swiper.slideNext()}>
<img src={next} alt="arrow" srcset="" className="w-[4.10544rem] md:w-[11rem]" />
           </button>
            
        </div>

        <Swiper
         className="border-2 border-green-500 w-[80%] "
        modules={[Navigation, A11y, Autoplay]}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
          // >=200
          200: {
            slidesPerView: 1,
            // spaceBetween: 50,
          },
          // >= 400px
          400: {
            slidesPerView: 1,
            // spaceBetween: 50,
          },
          // >= 640px
          640: {
            slidesPerView: 1.7,
            // spaceBetween: 5,
          },
          // >= 1024px
          1024: {
            slidesPerView: 1.7,
            spaceBetween: 10,
          },
          1030: {
            slidesPerView: 1.7,
            spaceBetween: 25,
          },
          // >= 1583px
          1583: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}>
      <SwiperSlide className="">
        <SwiperSlideComponent nameColor="#1E1E1E" color="#089D57"  bg='White' name="Sadiya, Bayero University Kano" content="As a student, I’m constantly seeking opportunities to engage with technology in a meaningful way. DevFest Student Edition Kano is the perfect platform for me to do just that. I’m excited to participate in work-
            shops, hackathons and other interactive sessions that will challenge my creativity."/>
      </SwiperSlide>
      <SwiperSlide className="">
        <SwiperSlideComponent nameColor="white" color="white" bg="#34A853" name="Ayomide, ADUSTECH" content="I’m eager to participate in DevFest Student Edition Kano and collaborate with students from BUK and NorthWest University. I believe that by wor-king together, we can share ideas and develop innovative solutions to real world problems."/>
      </SwiperSlide>
     
      
        </Swiper>
        </div>
    </div>
  )
}
