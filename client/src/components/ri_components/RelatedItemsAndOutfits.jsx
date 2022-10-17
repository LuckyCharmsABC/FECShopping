import React from 'react';
import RelatedList from './RelatedList.jsx'
import Outfits from './OutfitList.jsx'

const RelatedItemsAndOutfits = (props) => (
  <div>
    <div>
      <RelatedList />
    </div>
    <div>
      <Outfits />
    </div>
  </div>
)

export default RelatedItemsAndOutfits;