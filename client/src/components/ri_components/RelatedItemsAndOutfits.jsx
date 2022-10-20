import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedList from './RelatedList.jsx';
import Outfits from './OutfitList.jsx';

const RelatedItemsAndOutfits = ({ currentItem, setCurrentItem }) => (
  <div>
    <div>
      <RelatedList currentItem={currentItem} setCurrentItem={setCurrentItem} />
    </div>
    <div>
      <Outfits />
    </div>
  </div>
);

export default RelatedItemsAndOutfits;
