"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Autoplay } from "swiper/modules";

// Import all brand logos
import amyra_logo from "@/assets/img/home-01/brand/amyra-logo.png";
import aws_logo from "@/assets/img/home-01/brand/aws-logo.png";
import dermabay_logo from "@/assets/img/home-01/brand/dermabay-logo.png";
import flavocia_logo from "@/assets/img/home-01/brand/flavocia-logo.png";
import heal_hub_logo from "@/assets/img/home-01/brand/heal-hub-logo.png";
import healin_logo from "@/assets/img/home-01/brand/healin-logo.png";
import hotel_kuber_logo from "@/assets/img/home-01/brand/hotel-kuber-logo.png";
import kulcha_kulture_logo from "@/assets/img/home-01/brand/kulcha-kulture-logo.png";
import kundan_essentials_logo from "@/assets/img/home-01/brand/kundan-essentials-logo.png";
import kwisaa_logo from "@/assets/img/home-01/brand/kwisaa-logo.png";
import nutriherbs_logo from "@/assets/img/home-01/brand/nutriherbs-logo.png";
import odhni_logo from "@/assets/img/home-01/brand/odhni-logo.png";
import parsas_logo from "@/assets/img/home-01/brand/parsas-logo.png";
import shree_balaji_motors_logo from "@/assets/img/home-01/brand/shree-balaji-motors-logo.png";
import silvora_logo from "@/assets/img/home-01/brand/silvora-logo.png";
import vastra_chowk_logo from "@/assets/img/home-01/brand/vastrachowk-logo.png";

// Brand data with all 16 brands
const brand_data = [
  { id: 1, logo: amyra_logo, name: "Amyra Jewels" },
  { id: 2, logo: aws_logo, name: "Adarsh World School" },
  { id: 3, logo: dermabay_logo, name: "Dermabay" },
  { id: 4, logo: flavocia_logo, name: "Cafe Flavocia" },
  { id: 5, logo: heal_hub_logo, name: "The Heal Hub" },
  { id: 6, logo: healin_logo, name: "HealIn" },
  { id: 7, logo: hotel_kuber_logo, name: "Hotel Kuber" },
  { id: 8, logo: kulcha_kulture_logo, name: "Kulcha Kulture" },
  { id: 9, logo: kundan_essentials_logo, name: "Kundan Essentials" },
  { id: 10, logo: kwisaa_logo, name: "Kwisaa" },
  { id: 11, logo: nutriherbs_logo, name: "Nutriherbs" },
  { id: 12, logo: odhni_logo, name: "Odhni" },
  { id: 13, logo: parsas_logo, name: "Parsas" },
  { id: 14, logo: shree_balaji_motors_logo, name: "Shree Balaji Motors" },
  { id: 15, logo: silvora_logo, name: "Silvora" },
  { id: 16, logo: vastra_chowk_logo, name: "Vastra Chowk" },
];

// Import Autoplay module
import "swiper/css";
import "swiper/css/autoplay";

// slider setting - Show more slides at a time
const slider_setting: SwiperOptions = {
  modules: [Autoplay],
  slidesPerView: 6, // Show 6 logos at a time on large screens
  loop: true,
  autoplay: {
    delay: 1500, // Faster autoplay
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 40, // More space between logos
  speed: 3000, // Slower speed for better visibility
  grabCursor: true,
  breakpoints: {
    "1600": {
      slidesPerView: 6,
    },
    "1400": {
      slidesPerView: 5,
    },
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 4,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 3,
    },
    "0": {
      slidesPerView: 2,
    },
  },
};

export default function BrandFour() {
  return (
    <div className="tp-shop-brand-area mb-100">
      <div className="container container-1300">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title-wrapper text-center mb-50">
              <h2 className="tp-section-title-4">Our Valued Clients</h2>
              <p className="tp-section-text">
                Brands we've had the privilege to work with
              </p>
            </div>
          </div>
        </div>
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
                      <div className="brand-logo-container">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          title={brand.name}
                          width={180}
                          height={80}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "80px",
                            objectFit: "contain",
                            filter: "grayscale(100%)",
                            transition: "filter 0.3s ease",
                          }}
                          className="brand-logo"
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.filter = "grayscale(0%)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.filter = "grayscale(100%)")
                          }
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Optional: Show all brand names below the slider */}
              <div className="brand-names-list mt-30 text-center">
                <p className="brand-count">16 Brands • 13 Industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some custom styles */}
      <style jsx>{`
        .tp-shop-brand-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .tp-shop-brand-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }
        .brand-logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .brand-names-list {
          font-size: 14px;
          color: #888;
        }
        .brand-count {
          font-size: 16px;
          font-weight: 500;
          color: #666;
        }
        @media (max-width: 768px) {
          .tp-shop-brand-item {
            min-height: 80px;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}
