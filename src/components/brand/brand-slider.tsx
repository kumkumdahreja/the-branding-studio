"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/amyra-logo.png";
import b_2 from "@/assets/img/home-01/brand/aws-logo.png";
import b_3 from "@/assets/img/home-01/brand/dermabay-logo.png";
import b_4 from "@/assets/img/home-01/brand/flavocia-logo.png";
import b_5 from "@/assets/img/home-01/brand/heal-hub-logo.png";
import b_6 from "@/assets/img/home-01/brand/healin-logo.png";
import b_7 from "@/assets/img/home-01/brand/hotel-kuber-logo.png";
import b_8 from "@/assets/img/home-01/brand/kulcha-kulture-logo.png";
import b_9 from "@/assets/img/home-01/brand/kundan-essentials-logo.png";
import b_10 from "@/assets/img/home-01/brand/kwisaa-logo.png";
import b_11 from "@/assets/img/home-01/brand/nutriherbs-logo.png";
import b_12 from "@/assets/img/home-01/brand/odhni-logo.png";
import b_13 from "@/assets/img/home-01/brand/parsas-logo.png";
import b_14 from "@/assets/img/home-01/brand/shree-balaji-motors-logo.png";
import b_15 from "@/assets/img/home-01/brand/silvora-logo.png";
import b_16 from "@/assets/img/home-01/brand/vastrachowk-logo.png";


const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8,  b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, b_10, b_11, b_12, b_13, b_14, b_15, b_16, ];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" style={{ height: "auto",width: "200px" }}>
            <Image src={b} alt="" />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
