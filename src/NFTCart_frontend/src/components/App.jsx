import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Minter from "./Minter";
import Gallery from "./Gallery";
import { NFTCart_backend } from "../../../declarations/NFTCart_backend";
import CURRENT_USER_ID from "../index";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { NFTCart_backend } from "../../../declarations/NFTCart_backend/index";

function App() {
  const [userOwnedGallery, setOwnedGallery] = useState();
  const [listingGallery, setListingGallery] = useState();

  async function getNFTs() {
    const userNFTIds = await NFTCart_backend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTIds);
    setOwnedGallery(
      <Gallery title="My NFTs" ids={userNFTIds} role="collection" />
    );

    const listedNFTIds = await NFTCart_backend.getListedNFTs();
    console.log(listedNFTIds);
    setListingGallery(
      <Gallery title="Discover" ids={listedNFTIds} role="discover" />
    );
  }

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/discover" element={listingGallery}>
            {" "}
          </Route>
          <Route exact path="/minter" element={<Minter />}></Route>
          <Route exact path="/collection" element={userOwnedGallery}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/44476918/react-router-dom-link-not-working
