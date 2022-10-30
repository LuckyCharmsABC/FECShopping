import React from 'react';
import RelatedList from './RelatedList.jsx';
import Outfits from './OutfitList.jsx';

const RelatedItemsAndOutfits = ({ currentItem, setCurrentItemID }) => (
  <div>
    <div>
      <RelatedList
        currentItem={currentItem}
        setCurrentItemID={setCurrentItemID}
      />
    </div>
    <div>
      <Outfits
        currentItem={currentItem}
        setCurrentItemID={setCurrentItemID}
      />
    </div>
  </div>
);

export default RelatedItemsAndOutfits;
