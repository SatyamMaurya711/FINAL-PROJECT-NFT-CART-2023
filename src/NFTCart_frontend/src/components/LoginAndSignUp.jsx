import React, { useState } from "react";

//INTERNALIMPORT
import images from "../img";
// import Button  from "./Button";

const LoginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];

  return (
    <div className="user">
      <div className="user_box">
        <div className="user_box_social">
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
              className={`${"user_box_social_item"} ${
                activeBtn == i + 1 ? "active" : ""
              }`}
            >
              <img
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className="user_box_social_item_img"
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="user_box_or">OR</p>

        <div className="user_box_input">
          <div className="user_box_input_box">
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="example@emample.com" />
          </div>

          <div className="user_box_input_box">
            <label
              htmlFor="password"
              className="user_box_input_box_labe"
            >
              <p>Password</p>
              <p>
                <a href="#">Forget password</a>
              </p>
            </label>
            <input type="password" />
          </div>
        </div>

        <button btnName="Continue" classStyle="button" />
      </div>
    </div>
  );
};

export default LoginAndSignUp;
