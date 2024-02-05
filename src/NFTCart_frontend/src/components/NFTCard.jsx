import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Countdown from "react-countdown";

//INTERNAL IMPORT
import images from "../img";

const NFTCard = () => {
  const CardArray = [
    {
      image: images.nft_image_3,
      name: "Clone #17373",
      price: 457,
      stock: 35,
      timer: <Countdown date={Date.now() + 10000100} daysInHours={true} />,
    },
    {
      image: images.nft_image_1,
      name: "Clone #80201",
      price: 354,
      stock: 30,
      timer: <Countdown date={Date.now() + 10002000} daysInHours={true} />,
    },
    {
      image: images.nft_image_2,
      name: "Clone #85238",
      price: 786,
      stock: 55,
      timer: <Countdown date={Date.now() + 10005000} daysInHours={true} />,
    },
    {
      image: images.nft_1,
      name: "Clone #17373",
      price: 507,
      stock: 34,
      timer: <Countdown date={Date.now() + 10080000} daysInHours={true} />,
    },
    {
      image: images.nft_image_3,
      name: "Clone #17373",
      price: 457,
      stock: 35,
      timer: <Countdown date={Date.now() + 10060000} daysInHours={true} />,
    },
    {
      image: images.nft_image_2,
      name: "Clone #17373",
      price: 457,
      stock: 35,
      timer: <Countdown date={Date.now() + 10003000} daysInHours={true} />,
    },
    {
      image: images.nft_image_1,
      name: "Clone #17373",
      price: 457,
      stock: 35,
      timer: <Countdown date={Date.now() + 10050000} daysInHours={true} />,
    },
    {
      image: images.nft_1,
      name: "Clone #17373",
      price: 457,
      stock: 35,
      timer: <Countdown date={Date.now() + 10060000} daysInHours={true} />,
    },
    {
      image: images.nft_image_2,
      name: "Clone #17373",
      price: 457,
      stock: 35,
      timer: <Countdown date={Date.now() + 10080000} daysInHours={true} />,
    },
  ]


  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="NFTCard">
      {CardArray.map((el, i) => (
        <div className="NFTCard_box" key={i + 1}>
          <div className="NFTCard_box_img">
            <img
              src={el.image}
              alt="NFT images"
              width={350}
              height={350}
              className="NFTCard_box_img_img"
            />
          </div>

          <div className="NFTCard_box_update">
            <div className="NFTCard_box_update_left">
              <div
                className="NFTCard_box_update_left_like"
                onClick={() => likeNft()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className="NFTCard_box_update_left_like_icon"
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className="NFTCard_box_update_right">
              <div className="NFTCard_box_update_right_info">
                <small>Remaining time</small>
                <p>{el.timer}</p>
              </div>
            </div>
          </div>

          <div className="NFTCard_box_update_details">
            <div className="NFTCard_box_update_details_price">
              <div className="NFTCard_box_update_details_price_box">
                <h4>{el.name}</h4>

                <div className="NFTCard_box_update_details_price_box_box">
                  <div
                    className="NFTCard_box_update_details_price_box_bid"
                  >
                    <small>Current Bid</small>
                    <p>{el.price}DKARI</p>
                  </div>
                  <div
                    className="NFTCard_box_update_details_price_box_stock"
                  >
                    <small>{el.stock} in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="NFTCard_box_update_details_category">
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;