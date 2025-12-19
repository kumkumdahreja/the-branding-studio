import React from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import Link from "next/link";

// Import images (you'll need to update these with your actual images)
import healin_img1 from "/assets/img/home-03/portfolio/healin-1.jpg";
import healin_img2 from "/assets/img/home-03/portfolio/healin-2.jpg";
import adarsh_img1 from "/assets/img/home-03/portfolio/adarsh-1.jpg";
import adarsh_img2 from "/assets/img/home-03/portfolio/adarsh-2.jpg";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: healin_img1,
    img_2: healin_img2,
    brand: "Healin Health",
    website_url: "https://healin.health/",
  },
  {
    id: 2,
    img_1: adarsh_img1,
    img_2: adarsh_img2,
    brand: "Adarsh World School",
    website_url: "https://adarshworldschool.co.in/",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};

export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-3-area ${
        style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"
      }`}
    >
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/portfolio-wrapper"
                  >
                    <span className="zikzak-content">
                      See <br /> All Project
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt={`${item.brand} project image 1`}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <h4 className="tp-project-3-title-sm">
                        <Link
                          href={item.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.brand}
                        </Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={item.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt={`${item.brand} project image 2`}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
