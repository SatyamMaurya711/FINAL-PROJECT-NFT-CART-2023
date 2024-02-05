import React from "react";

//INTERNAL IMPORT
import images from "../img";
import Button from "./Button";

const Brand = () => {
  return (
    <div className="Brand">
      <div className="Brand_box">
        <div className="Brand_box_left">
          <img src={images.logo} alt="brand logo" width={100} height={100} />
          <h1>Earn free crypto with NFT Cart</h1>
          <p>A creative NFT Marketplace that lead and inspire.</p>

          <div className="Brand_box_left_btn">
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>
        <div className="Brand_box_right">
          <img src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
