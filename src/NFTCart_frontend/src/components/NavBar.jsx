import React, { useState } from "react";
//----IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

//INTERNAL IMPORT

// import button from "./button";
import images from "../img";
import SideBar from "./SideBar";
import Profile from "./Profile";
import Notification from "./Notification";

const NavBar = () => {
  const navigate = useNavigate();

  const RedirectPath = (path) => {
    console.log(path);
    // let navigatePath = path;
    navigate(path);
  };

  // usestate components
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_container_left">
          <div className="logo">
            <img
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
          </div>
          <div className="navbar_container_left_box_input">
            <div className="navbar_container_left_box_input_box">
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className="search_icon" />
            </div>
          </div>
        </div>

        {/*     <div className="box">
      <button className="button" onClick={()=> onClick()}>
        {btnName}
      </button>
    </div> */}

        {/* //END OF LEFT SECTION */}

        <div className="navbar_container_right">
          <div className="navbar_container_right_discover">
            {/* DISCOVER MENU */}

            <button
              className="button"
              onClick={() => RedirectPath("/discover")}
            >
              Discover
            </button>
          </div>

          {/* HELP CENTER MENU */}
          <div className="navbar_container_right_help">
            <button
              className="button"
              onClick={() => RedirectPath("/minter")}
            >
              Minter
            </button>
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className="navbar_container_right_button">
            <button
              className="button"
              onClick={() => RedirectPath("/colllection")}
            >
              My NFTs
            </button>
          </div>

          {/* NOTIFICATION */}
          <div className="navbar_container_right_notify">
            <MdNotifications
              className="notify"
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* USER PROFILE */}

          <div className="navbar_container_right_profile_box">
            <div className="navbar_container_right_profile">
              <img
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className="navbar_container_right_profile"
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}

          <div className="navbar_container_right_menuBtn">
            <CgMenuRight className="menuIcon" onClick={() => openSideBar()} />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className="ideBar">
          <SideBar setOpenSideMenu="setOpenSideMenu" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
