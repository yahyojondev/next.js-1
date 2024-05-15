import Image from "next/image";
import React from "react";
import blogimages from "@/app/assets/images/blogtop.png";
import blogimages2 from "@/app/assets/images/blogbottom.png";

const page = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="wrapper">
          <div className="blog__wrapper">
            <h1>Blog Posts</h1>
            <div className="blog__box">
              <div className="blog__box__left">
                <h2>Tempered Glass</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                  dictum sit amet justo donec enim diam vulputate ut. Malesuada
                  fames ac turpis egestas maecenas. Dictum fusce ut placerat
                  orci nulla pellentesque dignissim. Neque laoreet suspendisse
                  interdum consectetur. Turpis massa sed elementum tempus
                  egestas sed sed. Ornare massa eget egestas purus viverra
                  accumsan in. Tristique senectus et netus et malesuada. Ornare
                  suspendisse sed nisi lacus sed. Aliquet nibh praesent
                  tristique magna sit. Ac auctor augue mauris augue neque
                  gravida in fermentum et. Erat imperdiet sed euismod nisi porta
                  lorem mollis aliquam ut. Proin libero nunc consequat interdum
                  varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                </p>
              </div>
              <Image
                className="blog__box__img"
                src={blogimages}
                alt="blogimges"
              />
            </div>
          </div>
          <div className="blog__wrapper">
            <div className="blog__box">
              <Image
                className="blog__box__img"
                src={blogimages2}
                alt="blogimges"
              />
              <div className="blog__box__left">
                <h2>Back Cover</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                  dictum sit amet justo donec enim diam vulputate ut. Malesuada
                  fames ac turpis egestas maecenas. Dictum fusce ut placerat
                  orci nulla pellentesque dignissim. Neque laoreet suspendisse
                  interdum consectetur. Turpis massa sed elementum tempus
                  egestas sed sed. Ornare massa eget egestas purus viverra
                  accumsan in. Tristique senectus et netus et malesuada. Ornare
                  suspendisse sed nisi lacus sed. Aliquet nibh praesent
                  tristique magna sit. Ac auctor augue mauris augue neque
                  gravida in fermentum et. Erat imperdiet sed euismod nisi porta
                  lorem mollis aliquam ut. Proin libero nunc consequat interdum
                  varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="blog__text__wrapper">
            <h2>Mobile Brand and Price Strategy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
