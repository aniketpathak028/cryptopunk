import React from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.css";

function CollectionCard({ id, name, traits, img }) {
  return (
    <div className="collectionCard">
      <img src={img} alt="pic" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">•#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="weth-img" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
