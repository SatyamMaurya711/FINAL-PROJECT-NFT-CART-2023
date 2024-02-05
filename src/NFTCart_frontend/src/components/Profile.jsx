import React from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import {NavLink} from "react-router-dom";

//INTERNAL IMPORT
import images from "../img";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_account">
        <img
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className="profile_account_img"
        />

         <div className="profile_account_info">
          <p>KARISHMA SINGH</p>
          <small>X038499382920203...</small>
        </div>
      </div>

      <div className="profile_menu">
        <div className="profile_menu_one">
          <div className="profile_menu_one_item">
            <FaUserAlt />
            <p>
            Username : Kari7011
              {/* <NavLink to="/myprofile">My Profile</NavLink> */}
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaRegImage />
            <p>
            Email: xyz@gmail.com
              {/* <NavLink to="/my-items">My Items</NavLink> */}
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaUserEdit />
            <p>
            Contact Me
              {/* <NavLink to="/edit-profile">Edit Profile</NavLink> */}
            </p>
          </div>
        </div>

        <div className="profile_menu_two">
          <div className="profile_menu_one_item">
            <MdHelpCenter />
            <p>
              {/* <NavLink to="/help">Help</NavLink> */}
              Help
            </p>
          </div>
          <div className="profile_menu_one_item">
            <TbDownload />
            <p>
              {/* <NavLink to="/disconnet">Disconnet</NavLink> */}
              Logout
            </p>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Profile;
