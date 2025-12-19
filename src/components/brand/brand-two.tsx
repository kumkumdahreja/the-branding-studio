import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// images
import b_1 from "/assets/img/home-01/brand/amyra-logo.png";
import b_2 from "/assets/img/home-01/brand/aws-logo.png";
import b_3 from "/assets/img/home-01/brand/dermabay-logo.png";
import b_4 from "/assets/img/home-01/brand/flavocia-logo.png";
import b_5 from "/assets/img/home-01/brand/heal-hub-logo.png";
import b_6 from "/assets/img/home-01/brand/healin-logo.png";
import b_7 from "/assets/img/home-01/brand/hotel-kuber-logo.png";
import b_8 from "/assets/img/home-01/brand/kulcha-kulture-logo.png";
import b_9 from "/assets/img/home-01/brand/kundan-essentials-logo.png";
import b_10 from "/assets/img/home-01/brand/kwisaa-logo.png";
import b_11 from "/assets/img/home-01/brand/nutriherbs-logo.png";
import b_12 from "/assets/img/home-01/brand/odhni-logo.png";
import b_13 from "/assets/img/home-01/brand/parsas-logo.png";
import b_14 from "/assets/img/home-01/brand/shree-balaji-motors-logo.png";
import b_15 from "/assets/img/home-01/brand/silvora-logo.png";
import b_16 from "/assets/img/home-01/brand/vastrachowk-logo.png";
// brand_data
const brand_data = [
  {
    id: 1,
    brand: b_1,
  },
  {
    id: 2,
    brand: b_2,
  },
  {
    id: 3,
    brand: b_3,
  },
  {
    id: 4,
    brand: b_4,
  },
  {
    id: 5,
    brand: b_5,
  },
  {
    id: 6,
    brand: b_6,
  },
  {
    id: 7,
    brand: b_7,
  },
  {
    id: 8,
    brand: b_8,
  },
  {
    id: 9,
    brand: b_9,
  },
  {
    id: 10,
    brand: b_10,
  },
  {
    id: 11,
    brand: b_11,
  },
  {
    id: 12,
    brand: b_12,
  },
  {
    id: 13,
    brand: b_13,
  },
  {
    id: 14,
    brand: b_14,
  },
  {
    id: 15,
    brand: b_15,
  },
  {
    id: 16,
    brand: b_16,
  },
];

// brand items
export function BrandItems() {
  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div className="tp-brand-4-item p-relative">
            <Image
              src={item.brand}
              alt="brand"
              style={{ width: "auto", height: "auto" }}
            />
            {/* <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We love to work with clients to develop unique, innovative
                websites.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
