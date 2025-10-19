"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Banner1 from "../../../public/images/banner1.png";
import Banner2 from "../../../public/images/banner2.png";
import Banner3 from "../../../public/images/banner3.png";
import Banner4 from "../../../public/images/banner4.png";

const banners = [
    { id: 1, img: Banner1 },
    { id: 2, img: Banner2 },
    { id: 3, img: Banner3 },
    { id: 4, img: Banner4 },
];

export default function Banner() {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop
                slidesPerView={1}
                className="w-full h-[450px]"
            >
                {banners.map((b) => (
                    <SwiperSlide key={b.id}>
                        <div className="w-full h-[450px] relative">
                            <Image
                                src={b.img}
                                alt={`banner-${b.id}`}
                                fill
                                className="object-cover rounded-md"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
        padding: 10px;
          width: 40px;
          height: 40px;
          background-color: #aaa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #888;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          color: white;
          font-weight: bold;
        }
      `}</style>
        </div>
    );
}
