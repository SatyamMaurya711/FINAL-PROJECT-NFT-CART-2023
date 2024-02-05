import React from "react";

//INTERNAL IMPORT
import images from "../img";

const Notification = () => {
  return (
    <div className="notification">
      <p>Notification</p>
      <div className="notification_box">
        <div className="notification_box_img">
          <img
            src={images.user1}
            alt="profile img"
            width={50}
            height={50}
            className="notification_box_img"
          />
        </div>
        <div className="notification_box_info">
          <h4>Karishma Singh</h4>
          <p>Satyam Maurya scroll your NFT List</p>
          <small>3 minutes ago</small>
        </div>
        <span className="notification_box_new"></span>
      </div>
    </div>
  );
};

export default Notification;
