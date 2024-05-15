import Image from "next/image";
import React from "react";
import shopimg from "@/app/assets/images/shop.png";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__wrapper">
          <div className="shop__wrapper__left">
            <div className="shop__wrapper__left__text">
              <h2>
                Shop Premium <br /> Tempered Glass in wholesale Price !
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. 
                <br />
                <br />
                LKR : 299
              </p>
              <button>Shop Tempered Glass </button>
            </div>
            <Image
              className="shop__wrapper__left__img"
              src={shopimg}
              alt="shopimg"
            />
          </div>
          <div className="shop__wrapper__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
