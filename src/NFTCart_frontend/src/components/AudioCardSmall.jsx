import React, { useState } from "react";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import images from "../img";
import LikeProfile from "./LikeProfile";

const AudioCardSmall = ({el, i}) => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  return (
    <div className="audioPlayer">
      <div className="audioPlayer_box">
        <img
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className="audioPlayer_box_img"
        />

        <div className="audioPlayer_box_info">
          <h4>{el.musicName}</h4>
          <div className="audioPlayer_box_info_box">
            <LikeProfile />
            <div className="audioPlayer_box_info_box_price">
              <small>Price</small>
              <p>{el.price}</p>
            </div>
          </div>
        </div>

        <div
          className="audioPlayer_box_playBtn"
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;