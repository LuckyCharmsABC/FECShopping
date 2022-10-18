import React, { useState } from 'react';
import axios from 'axios';
import RelatedList from './RelatedList.jsx';
import Outfits from './OutfitList.jsx';

const RelatedItemsAndOutfits = ({ currentItem, setCurrentItem }) => {
  const [relatedItems, setRelatedItems] = useState([]);
  axios.get(`/products/${currentItem.id}/related`)
    .then((results) => {
      console.log(results.data);
      // setRelatedItems(results.data);
    })
    .catch((err) => console.log(err));
  return (
    <div>
      <div>
        <RelatedList />
      </div>
      <div>
        <Outfits />
      </div>
    </div>
  );
};

export default RelatedItemsAndOutfits;