import React from "react";

//INTERNAL IMPORT
import images from "../img";

const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className="like">
      {imageArray.map((el, i) => (
        <div className="like_box" key={i + 1}>
          <img
            src={el}
            alt="like heart"
            width={15}
            height={15}
            key={i + 1}
            className="like_box_img"
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
