import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import images from "../img";

const Footer = () => {
  const year = new Date().getFullYear;



  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_box_social">
          <img src={images.logo} alt="footer logo" height={100} width={100} />
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className="footer_social">
            <a href="/">
              <TiSocialFacebook />
            </a>
            <a href="/">
              <TiSocialLinkedin />
            </a>
            <a href="/">
              <TiSocialTwitter />
            </a>
            <a href="/">
              <TiSocialYoutube />
            </a>
            <a href="/">
              <TiSocialInstagram />
            </a>
          </div>

          <p>
            Copyright ©{year} K&S
          </p>

        </div>
      </div>
    </div>
  );
};

export default Footer;