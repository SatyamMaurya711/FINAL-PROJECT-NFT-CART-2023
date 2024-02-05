import React from "react";

//INTERNAL IMPORT
import Button from "./Button";
import images from "../img";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSection_box">
        <div className="heroSection_box_left">
          <h1>Discover, collect, and sell NFTs</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className="heroSection_box_right">
          <img
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
