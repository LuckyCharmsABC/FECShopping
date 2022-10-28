import React from 'react';
import RelatedList from './RelatedList.jsx';
import Outfits from './OutfitList.jsx';

const RelatedItemsAndOutfits = ({ currentItem, setCurrentItemID, getStars }) => (
  <div>
    <div>
      <RelatedList
        currentItem={currentItem}
        setCurrentItemID={setCurrentItemID}
        getStars={getStars}
      />
    </div>
    <div>
      <Outfits
        currentItem={currentItem}
        setCurrentItemID={setCurrentItemID}
        getStars={getStars}
      />
    </div>
  </div>
);

export default RelatedItemsAndOutfits;
