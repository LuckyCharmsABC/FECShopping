import React, { useState, useEffect } from 'react';
import OutfitItem from './OutfitItem.jsx'

const outfitList = ({ currentItem, setCurrentItem }) => {
  const [outfitItems, setOutfitItems] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    console.log(keys);
    setOutfitItems(keys);
  });

  return (
    <div>
      <h3>Outfit</h3>
      <OutfitItem currentItem={currentItem} setCurrentItem={setCurrentItem} />
    </div>
  );
};

export default outfitList;
