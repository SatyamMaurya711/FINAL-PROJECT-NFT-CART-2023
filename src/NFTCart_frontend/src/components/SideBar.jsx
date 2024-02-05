import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";

//INTERNAL IMPORT
import images from "../img";
import Button from "./Button";

const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className="sideBar">
      <GrClose
        className="sideBar_closeBtn"
        onClick={() => closeSideBar()}
      />

      <div className="sideBar_box">
        <img src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topices of NFT & write
          your own stories and share them
        </p>
        <div className="sideBar_social">
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
      </div>

      <div className="sideBar_menu">
      {/* Discover */}
        <div>
          <div
            className="sideBar_menu_box"
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className="sideBar_discover">
                <p>
                  <Link to="/Discover">Discover</Link>
                </p>
            </div>
          )}
        </div>

        <div>
          <div
            className="sideBar_menu_box"
            onClick={() => openHelpMenu()}
          >
            <p>My NFTs</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            <div className="sideBar_discover">
                <p>
                  <Link to="/My_NFTs">My NFTs</Link>
                </p>
            </div>
          )}
        </div>
      </div>

      <div className="sideBar_button">
        <Button btnName="Create" handleClick={() => {}} />
        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;
