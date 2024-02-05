import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import images from "../img";
import LikeProfile from "./LikeProfile";

const AudioCard = ({ el, i }) => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  return (
    <div className="audioCard">
      <div className="audioCard_box">
        <div className="audioCard_box_like_time">
          <div className="audioCard_box_like" onClick={() => likeNft()}>
            {like ? (
              <AiFillHeart className="audioCard_box_like_icon" />
            ) : (
              <AiOutlineHeart className="audioCard_box_like_icon_unlike" />
            )}

            <span>{el.stock}</span>
          </div>

          <div className="audioCard_box_time">
            <div className="audioCard_box_like_time_remaing">
              <small>Reaming time</small>
              <h5>{el.time}</h5>
            </div>
          </div>
        </div>

        <div className="audioCard_box_player">
          <img src={images.musiceWave} alt="musice" width={200} />
          <div
            className="audioCard_box_musicPlayer"
            onClick={() => playMusic()}
          >
            {play ? (
              <div className="audioCard_box_musicPlayer_icon">
                <TbPlayerPause />
              </div>
            ) : (
              <div className="audioCard_box_musicPlayer_icon">
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        <div className="audioCard_box_details">
          <div className="audioCard_box_details_info">
            <h4>{el.musicName}</h4>
            <div className="audioCard_box_details_info_price">
              <small>Price</small>
              <p>{el.price} DANG</p>
            </div>
          </div>

          <div className="audioCard_box_details_stock">
            <LikeProfile />
            <small>{el.stock} in stock</small>
          </div>
        </div>

        <div className="audioCard_box_img">
          <img
            src={images.creatorbackground10}
            alt="background"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;