import Link from "next/link";
import React from "react";
import navcenter from "@/app/assets/images/navbarcenter.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__wrapper__left">
            <Link href={"/"} className="navbar__link">
              Home
            </Link>
            <Link href={"/shopAll"} className="navbar__link">
              Shop All
            </Link>
            <Link href={"/blog"} className="navbar__link">
              Blog
            </Link>
            <div className="animation satart-home"></div>
          </div>
          <div className="navbar__wrapper__center">
            <Image src={navcenter} alt="rasm" />
          </div>
          <div className="navbar__wrapper__right">
            <Link href={"/about"} className="navbar__link link__one">
              About US
            </Link>
            <div className="searching__wrapper">
              <input placeholder="Search Product" type="text" />
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
