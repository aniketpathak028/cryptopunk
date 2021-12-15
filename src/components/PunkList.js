import React from "react";
import CollectionCard from './CollectionCard'
import './PunkList.css'
import { Scrollbars } from "react-custom-scrollbars";

function PunkList({ punkListData, selectPunk }) {
  return (
    <Scrollbars
      style={{ width: 1600, height: 500 }}
    >
      <div className="punkList">
        {punkListData.map((punk) => {
          return (
            <div key={punk.token_id} onClick={() => selectPunk(punk.token_id)}>
              <CollectionCard
                key={punk.token_id}
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                img={punk.image_original_url}
              />
            </div>
          );
        })}
      </div>
    </Scrollbars>
  );
}

export default PunkList
