import React from "react";
import CollectionCard from './CollectionCard'

function PunkList({ punkListData }) {
  return (
    <div className="punkList">
          {punkListData.map((punk) => {
          return (
            <div>
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
  );
}

export default PunkList
