import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import adidas from '../../assets/brands/adidas.svg'
import apple from '../../assets/brands/apple.svg'
import coca from '../../assets/brands/coca.svg'
import dell from '../../assets/brands/dell.svg'
import gopro from '../../assets/brands/gopro.svg'
import gucci from '../../assets/brands/gucci.svg'
import jbl from '../../assets/brands/jbl.svg'
import lenovo from '../../assets/brands/lenovo.svg'
import levi from '../../assets/brands/levi.svg'
import lg from '../../assets/brands/lg.svg'
import mcdonald from '../../assets/brands/mcdonald.svg'
import nike from '../../assets/brands/nike.svg'
import nokia from '../../assets/brands/nokia.svg'
import philips from '../../assets/brands/philips.svg'
import puma from '../../assets/brands/puma.svg'
import reebok from '../../assets/brands/reebok.svg'
import vivo from '../../assets/brands/vivo.svg'
import xiaomi from '../../assets/brands/xiaomi.svg'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const MySwiperComp = () => {
  const logos = [
    adidas,xiaomi,vivo,reebok,puma,philips,nokia,nike,mcdonald,
    lg,levi,lenovo,jbl,gucci,gopro,dell,coca,apple
  ]
  return (
    <Swiper
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 1,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
      slidesPerView={4} // Number of slides per view
      
      loop={true} // Enable continuous loop
      className='py-5'
      speed={4000}
      
       // Adjust height as needed using Tailwind CSS classes
    >
      {
        logos.map(ele => (
<SwiperSlide key={ele} className='md:px-10  '>
        <img src={ele} alt="Image 1" className="object-cover md:p-3  h-full w-[10rem]" />
      </SwiperSlide>
        ))
      }
      
    
    </Swiper>
  );
};

export default MySwiperComp;
