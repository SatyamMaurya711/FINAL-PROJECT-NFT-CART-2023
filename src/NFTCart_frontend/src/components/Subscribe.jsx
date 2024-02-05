import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
//INTERNAL IMPORT
import images from "../img";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe_box">
        <div className="subscribe_box_left">
          <h2>Never miss a drop</h2>
          <p>
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>
          <div className="subscribe_box_left_box">
            <span>01</span>
            <small>Get more discount</small>
          </div>

          <div className="subscribe_box_left_box">
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className="subscribe_box_left_input">
            <input type="email" placeholder="Enter your email* " />
            <RiSendPlaneFill className="subscribe_box_left_input_icon" />
          </div>
        </div>

        <div className="subscribe_box_right">
          <img
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
