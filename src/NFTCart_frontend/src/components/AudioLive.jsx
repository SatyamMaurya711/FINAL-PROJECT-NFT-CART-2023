import React from "react";
import Countdown from "react-countdown";

//INTERNAL IMPORT
import AudioCard from "./AudioCard";
import AudioCardSmall from "./AudioCardSmall";

const AudioLive = () => {
  const musicArray = [
    {
      musicName: "NFT Music #1233",
      time: <Countdown date={Date.now() + 10000000} daysInHours={true} />,
      price: 34.589,
      stock: 40,
    },
    {
      musicName: "NFT Music #6754",
      time: <Countdown date={Date.now() + 10000000} daysInHours={true} />,
      price: 56.119,
      stock: 30,
    },
  ];

  const musicArraySmall = [
    {
      musicName: "NFT Music #2413",
      price: 65.009,
    },
    {
      musicName: "NFT Music #9874",
      price: 76.321,
    },
    {
      musicName: "NFT Music #4321",
      price: 98.234,
    },
  ];

  return (
    <div className="audioLive">
      <div className="audioLive_box">
        <div className="audioLive_box_left">
          {musicArray.map((el, i) => (
            <AudioCard key={i + 1} i={i} el={el} />
          ))}
        </div>
        <div className="audioLive_box_right">
          {musicArraySmall.map((ele, ii) => (
            <AudioCardSmall key={ii + 1} i={ii} el={ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioLive;