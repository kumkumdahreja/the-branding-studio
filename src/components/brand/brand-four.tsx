"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

// Brand logos
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

// Brand data with names for alt text
const brand_data = [
  { id: 1, logo: b_1, name: "Amyra Jewels" },
  { id: 2, logo: b_2, name: "Adarsh World School" },
  { id: 3, logo: b_3, name: "Dermabay" },
  { id: 4, logo: b_4, name: "Cafe Flavocia" },
  { id: 5, logo: b_5, name: "The Heal Hub" },
  { id: 6, logo: b_6, name: "HealIn" },
  { id: 7, logo: b_7, name: "Hotel Kuber" },
  { id: 8, logo: b_8, name: "Kulcha Kulture" },
  { id: 9, logo: b_9, name: "Kundan Essentials" },
  { id: 10, logo: b_10, name: "Kwisaa" },
  { id: 11, logo: b_11, name: "Nutriherbs" },
  { id: 12, logo: b_12, name: "Odhni" },
  { id: 13, logo: b_13, name: "Parsas" },
  { id: 14, logo: b_14, name: "Shree Balaji Motors" },
  { id: 15, logo: b_15, name: "Silvora" },
  { id: 16, logo: b_16, name: "Vastra Chowk" },
];

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 5,
    },
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 4,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 2,
    },
  },
  navigation: {
    prevEl: ".tp-shop-brand-prev",
    nextEl: ".tp-shop-brand-next",
  },
};

export default function BrandFour() {
  return (
    <div className="tp-shop-brand-area mb-100">
      <div className="container container-1300">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-shop-brand-wrapper">
              <Swiper
                {...slider_setting}
                className="swiper-container tp-shop-brand-active fix"
              >
                {brand_data.map((brand) => (
                  <SwiperSlide key={brand.id}>
                    <div className="tp-shop-brand-item">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        title={brand.name}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "80px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
