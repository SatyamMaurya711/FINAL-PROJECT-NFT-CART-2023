import React from "react";
import BigNFTSilder from "./BigNFTSilder";

import HeroSection from "./HeroSection";
import AudioLive from "./AudioLive";
import Title from "./Title";
import Service from "./Service";
import NFTCard from "./NFTCard";
import FollowerTab from "./FollowerTab";
import Brand from "./Brand";
import Subscribe from "./Subscribe";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Service />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <BigNFTSilder />
      <Title
        heading="NFTs Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <NFTCard />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <FollowerTab />
      <Subscribe />
      <Brand />
    </>
  );
};

export default HomePage;
