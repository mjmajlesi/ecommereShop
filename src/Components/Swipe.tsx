"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay , EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { imagesforswaper } from "../../lib/image";

function Swipe() {

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      effect={'fade'}
      modules={[Autoplay, Pagination, Navigation , EffectFade]}
      className="w-full rounded-lg "
    >
        {
            imagesforswaper.map((image , index) => (
                <SwiperSlide key={index}>
                    <Image src={image.src} alt={image.alt} className="w-full h-full not-md:object-contain " />
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
}

export default Swipe;
