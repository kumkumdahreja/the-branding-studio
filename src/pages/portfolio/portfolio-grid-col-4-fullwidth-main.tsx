"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import PortfolioGridFourColArea from "@/components/portfolio/portfolio-grid-4-col-area";
import BrandSlider from "@/components/brand/brand-slider";
import BigText from "@/components/big-text";
import FooterFour from "@/layouts/footers/footer-four";
import ProjectFour from "@/components/project/project-four";
import ThemeSetting from "@/components/theme-setting";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import { projectThreeAnimation } from "@/utils/project-anim";

const PortfolioGridColFourFullwidthMain = () => {
  const [whiteCls, setWhiteCls] = React.useState(true);

  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
      imageRevealAnimation();
      fadeAnimation();
      projectThreeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* Theme Setting if needed */}
      <ThemeSetting />

      {/* header area start - Only HeaderEleven */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">
                        The Branding Studio
                      </span>
                      <h4 className="tm-hero-title fs-220 tp-char-animation">
                        Our Portfolio
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p>
                        Explore our latest work in content creation and digital
                        strategy. We focus on delivering high-quality visuals
                        and creative campaigns that help brands stand out and
                        connect with their audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <PortfolioGridFourColArea style_2={true} />
            {/* portfolio area */}

            <BrandSlider />

            {/* Wrapper Section */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <h4 className="tm-hero-title tp-char-animation">
                        Our latest Web Projects
                      </h4>
                    </div>
                    <div className="tm-hero-text">
                      <p className="tp_title_anim">
                        Browse our collection of custom-built websites and
                        digital platforms. We focus on creating clean,
                        responsive designs and fast, reliable code to give your
                        business a powerful and professional online presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProjectFour style_2={true} />
            {/* End Wrapper Section */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioGridColFourFullwidthMain;
