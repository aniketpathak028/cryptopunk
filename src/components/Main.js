import React from "react";
import "./Main.css";
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

export default function Main() {
  return (
    <div className="main">
      <div className="punkHiglight">
        <div className="punkContainer">
          <img
            className="selectedPunk"
            // src={activePunk.image_original_url}
            src={
              "https://ipfs.thirdweb.com/ipfs/bafybeichmigzcebanai4n7jjj2xsc2uwhe5dnluvngpo5legnezdbariru"
            }
            alt="active-punk-img"
          />
        </div>
      </div>
      <div className="punkDetails" style={{ color: "#fff" }}>
        <div className="title">Bandana Punk</div>
        <span className="itemNumber">.#3</span>
      </div>
      <div className="owner">
        <div className="ownerImageContainer">
          <img
            src={
              "https://ipfs.thirdweb.com/ipfs/bafybeichmigzcebanai4n7jjj2xsc2uwhe5dnluvngpo5legnezdbariru"
            }
            alt="owner-img"
          />
        </div>
        <div className="ownerDetails">
          <div className="ownerNameAndHandler">
            <div className="ownerAddress">
              0x7B293344c302E057fF0DFab4fb43d4955eAe6bC1
            </div>
            <div className="ownerHandle">@aniketPathak</div>
          </div>
          <div className="ownerLink">
            <img src={instagramLogo} />
          </div>
          <div className="ownerLink">
            <img src={twitterLogo} />
          </div>
          <div className="ownerLink">
            <img src={moreIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
