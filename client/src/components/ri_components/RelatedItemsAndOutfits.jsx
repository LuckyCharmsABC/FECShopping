import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedList from './RelatedList.jsx';
import Outfits from './OutfitList.jsx';

const RelatedItemsAndOutfits = ({ currentItem, setCurrentItemID, getStars }) => (
  <div>
    <div>
      <RelatedList currentItem={currentItem} setCurrentItemID={setCurrentItemID} getStars={getStars} />
    </div>
    <div>
      <Outfits currentItem={currentItem} setCurrentItemID={setCurrentItemID} getStars={getStars} />
    </div>
  </div>
);

export default RelatedItemsAndOutfits;
