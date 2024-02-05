import React, { useState } from "react";
import {
  RiUserFollowFill,
  RiAwardLine,
} from "react-icons/ri";

//INTERNAL IMPORT
import FollowerTabCard from "./FollowerTabCard";
import images from "../img";

const FollowerTab = () => {
  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      userName: "Karishma",
      price: 43.125,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      userName: "Ishita",
      price: 23.115,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      userName: "Vamika",
      price: 35.765,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      userName: "Yasshwi",
      price: 89.342,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      userName: "Satyam",
      price: 45.125,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      userName: "Selena",
      price: 13.125,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      userName: "Katrina",
      price: 98.125,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      userName: "Priyanka",
      price: 42.125,
    },
  ];
  const FollowingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      userName: "Afshan",
      price: 67.493,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      userName: "Sumaiya",
      price: 75.923,
    },
    {
      background: images.creatorbackground5,
      user: images.user3,
      userName: "Sheerie",
      price: 76.543,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      userName: "Nakeeb",
      price: 29.749,
    },
    {
      background: images.creatorbackground1,
      user: images.user2,
      userName: "Mamta",
      price: 92.547,
    },
    {
      background: images.creatorbackground2,
      user: images.user1,
      userName: "Vaibhav",
      price: 34.786,
    },
  ];
  const NewsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      userName: "Mayur",
      price: 33.236,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      userName: "Vaishali",
      price: 23.456,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      userName: "Geeta",
      price: 76.865,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      userName: "Preety",
      price: 64.787,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      userName: "Prakhar",
      price: 76.533,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      userName: "Hina",
      price: 65.234,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      userName: "Tanvi",
      price: 84.312,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      userName: "Pragya",
      price: 95.344,
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className="followerTab">
      <div className="followerTab_title">
        <h2> Top Creators List..</h2>
        <div className="followerTab_tabs">
          <div className="followerTab_tabs_btn">
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className="followerTab_box">
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className="followerTab_box">
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className="followerTab_box">
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className="followerTab_member">
        <div className="followerTab_member_box">
          <a href="#">Show me more</a>
          <a href="#">Become, author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;