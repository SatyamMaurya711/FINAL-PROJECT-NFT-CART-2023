import React, { useState, useCallback } from "react";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import Countdown from "react-countdown";

//INTERNAL IMPORT
import images from "../img";
import Button from "./Button";

const BigNFTSilder = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Karishma Singh",
      collection: "DIY",
      price: "00664 DKARI",
      like: 765,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: <Countdown date={Date.now() + 10200100} daysInHours={true} />,
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Surya Tripathi",
      collection: "Home",
      price: "0000004 DKARI",
      like: 112,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: <Countdown date={Date.now() + 10400100} daysInHours={true} />,
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Vicky Roy",
      collection: "GYm",
      price: "0000064 DKARI",
      like: 200,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: <Countdown date={Date.now() + 16000100} daysInHours={true} />,
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Selena Gomes",
      collection: "GYm",
      price: "4664 DKARI",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: <Countdown date={Date.now() + 10080100} daysInHours={true} />,
    },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className="bigNFTSlider">
      <div className="bigNFTSlider_box">
        <div className="bigNFTSlider_box_left">
          <h2>{sliderData[idNumber].title}</h2>
          <div className="bigNFTSlider_box_left_creator">
            <div className="bigNFTSlider_box_left_creator_profile">
              <img
                className="bigNFTSlider_box_left_creator_profile_img"
                src={sliderData[idNumber].image}
                alt="profile"
                width={50}
                height={50}
              />
              <div className="bigNFTSlider_box_left_creator_profile_info">
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className="bigNFTSlider_box_left_creator_collection">
              <AiFillFire className="bigNFTSlider_box_left_creator_collection_icon" />

              <div className="bigNFTSlider_box_left_creator_collection_info">
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className="bigNFTSlider_box_left_bidding">
            <div className="bigNFTSlider_box_left_bidding_box">
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} 
              </p>
            </div>

            <p className="bigNFTSlider_box_left_bidding_box_auction">
              <MdTimer className="bigNFTSlider_box_left_bidding_box_icon" />
              <span>Auction ending in</span>
            </p>

            <div className="bigNFTSlider_box_left_bidding_box_timer">
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time}</p>
              </div>
            </div>

            <div className="bigNFTSlider_box_left_button">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className=".bigNFTSlider_box_left_sliderBtn">
            <TbArrowBigLeftLines
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className="bigNFTSlider_box_right">
          <div className="bigNFTSlider_box_right_box">
            <img
              src={sliderData[idNumber].nftImage}
              alt="NFT"
              className="bigNFTSlider_box_right_box_img"
              width={650}
              height={650}
            />

            <div className="bigNFTSlider_box_right_box_like">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;