import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeroSwiper({carousalImg}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        freeMode={true}
        className="mySwiper h-[90vh]"
     
      >
        {
          carousalImg&&carousalImg.map( (ele,ind) => (
            <SwiperSlide key={ind}>
              
                <img src={ele} alt="" className='h-[90vh] w-[100vw] object-cover'/>
              
              </SwiperSlide>
          ))
        }
        
        
      </Swiper>
    </>
  );
}
