import { shoppingproduct } from "@/app/static/router";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Product = () => {
  const ProductItem = shoppingproduct?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card__images__wrapper">
        <Image className="product__card__images" src={el.img} alt={el.title} />
      </div>
      <div className="product__card__content">
        <h4>{el.title}</h4>
        <div className="price__wrapper">
          <p>${el.price}</p>
          <del>${el.price * 2}</del>
        </div>
        <Button className="product__card__btn" variant="contained">
          shop now
        </Button>
      </div>
    </div>
  ));
  return (
    <div className="product">
      <div className="container">
        <div className="product__wrapper">
          <h1 className="product__title">Shop All Products</h1>
          <div className="product__cards">{ProductItem}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
