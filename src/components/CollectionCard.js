import React, { useState, useEffect } from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.css";
import axios from "axios";

function CollectionCard({ id, name, traits, img }) {
    const [punkListData, setPunkListData] = useState([]);
    
    useEffect(() => {
        const getMyNfts = async () => {
            const openSeaData = await axios.get(
                'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB'
            );
            console.log(openSeaData.data.assets);
            setPunkListData(openSeaData.data.assets);
        };
        getMyNfts();
    }, []);

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
