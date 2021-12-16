import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import PunkList from "./components/PunkList";
import axios from "axios";
import Main from "./components/Main";
import savedData from './assets/data/data.json'

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  const selectPunkHandler = (id) => {
    setSelectedPunk(id);
  };

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB"
      );
      setPunkListData(openSeaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={savedData}
            selectPunk={selectPunkHandler}
          />
        </>
      )}
    </div>
  );
}

export default App;
