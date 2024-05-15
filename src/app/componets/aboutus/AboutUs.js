import React from "react";
import aboutusimage from "@/app/assets/images/aboutus.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="container">
        <div className="aboutus__wrapper">
          <div className="aboutus__title">
            <div className="aboutus__title__wrapper">
              <span></span>
              <p>about us</p>
            </div>
            <h2 className="aboutus__subtitle">
              If you’re looking for a Premium Quality Tempered Glass or
              Back-cover for your Device
            </h2>
            <p className="aboutus__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
            </p>
          </div>
          <div className="aboutus__bottom">
            <Image
              className="aboutus__img"
              src={aboutusimage}
              alt="aboutus img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
