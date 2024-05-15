import React from "react";
import { choosproduct } from "@/app/static/router";
import Image from "next/image";

const Choos = () => {
  const chooItem = choosproduct?.map((el) => (
    <div key={el.id} className="choos__card">
      <Image className="choos__card__img" src={el.img} alt={el.title} />
      <h3>{el.title}</h3>
      <p>{el.text}</p>
    </div>
  ));
  return (
    <div className="choos">
      <div className="container">
        <div className="choos__wrapper">
          <div className="choos__title">
            <span></span>
            <p>Why Choose US</p>
          </div>
          <div className="choos__cards">{chooItem}</div>
        </div>
      </div>
    </div>
  );
};

export default Choos;
