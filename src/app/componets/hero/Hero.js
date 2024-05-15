import Image from "next/image";
import React from "react";
import heroright from "@/app/assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left">
            <h1 className="hero__title__one">Mobile</h1>
            <h1 className="hero__title__two">Backcover Tempered Glass</h1>
            <button className="hero__btn">shop all</button>
          </div>
          <Image className="hero__right" src={heroright} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
