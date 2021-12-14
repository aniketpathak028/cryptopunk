import React, { useState, useEffect } from "react";
import Header from './components/Header';
import './App.css'
import PunkList from './components/PunkList';
import axios from "axios";
import Main from "./components/Main";

function App() {

    const [punkListData, setPunkListData] = useState([]);

    useEffect(() => {
      const getMyNfts = async () => {
        const openSeaData = await axios.get(
          "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB"
        );
        console.log(openSeaData.data.assets);
        setPunkListData(openSeaData.data.assets);
      };
      getMyNfts();
    }, []);


  return (
    <div className="app">
      <Header />
      {/* <CollectionCard
        id={0}
        name="Bandana Punk"
        traits={[{ value: 7 }]}
        img="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
      /> */}
      <Main />
      <PunkList punkListData={punkListData}/>
    </div>
  );
}

export default App;
