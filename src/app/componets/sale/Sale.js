import { heroproduct } from "@/app/static/router";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Sale = () => {
  const saleItem = heroproduct?.map((el) => (
    <div key={el.id} className="sale__card">
      <div className="sale__card__images__wrapper">
        <Image className="sale__card__images" src={el.img} alt={el.title} />
      </div>
      <div className="sale__card__content">
        <h4>{el.title}</h4>
        <div className="sale__price__wrapper">
          <p>${el.price}</p>
          <del>${el.price * 2}</del>
        </div>
        <Button className="sale__card__btn" variant="contained">
          shop now
        </Button>
      </div>
    </div>
  ));
  return (
    <div className="sale">
      <div className="container">
        <div className="sale__cards">{saleItem}</div>
      </div>
    </div>
  );
};

export default Sale;
