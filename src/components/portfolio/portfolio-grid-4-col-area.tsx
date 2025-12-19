import React from "react";
import Link from "next/link";
import Image from "next/image";
import portfolio_data from "@/data/portfolio-data";

// prop type
type IProps = {
  style_2?: boolean;
};

export default function PortfolioGridFourColArea({ style_2 = false }: IProps) {
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        <div className="row">
          {portfolio_data.slice(0, 13).map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor"
                data-cursor="View<br>Demo"
              >
                <Link
                  href={item.video} // Link directly to the video URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tp_img_reveal cursor-hide"
                >
                  <div className="tp_img_reveal">
                    {/* Show thumbnail image */}
                    <Image
                      src={item.img}
                      alt={item.brand}
                      style={{ width: "100%", height: "auto", }}
                      className="portfolio-thumbnail"
                    />
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <h4 className="tp-project-5-2-title-sm">{item.brand}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
