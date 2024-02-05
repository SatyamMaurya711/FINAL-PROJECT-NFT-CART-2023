import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  
  return (
    <div className="FollowerTabCard">
      <div className="FollowerTabCard_rank">
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>

      <div className="FollowerTabCard_box">
        <div className="FollowerTabCard_box_img">
          <img
            className="FollowerTabCard_box_img_img"
            src={el.background}
            alt="profile braground"
            width={270}
            height={170}
            objectFit="cover"
          />
        </div>

        <div className="FollowerTabCard_box_profile">
          <img
            className="FollowerTabCard_box_profile_img"
            alt="profile pic"
            width={50}
            height={50}
            src={el.user}
          />
        </div>

        <div className="FollowerTabCard_box_info">
          <div className="FollowerTabCard_box_info_name">
            <h4>
              {el.userName}{""}{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>{el.price} DANG</p>
          </div>

          <div className="FollowerTabCard_box_info_following">
            {following ? (
              <a onClick={() => followMe()}>Following</a>
            ) : (
              <a onClick={() => followMe()}>
                Follow{""}{" "}
                <span>
                  <TiTick />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;