import React, { useState, useEffect } from 'react';
import OutfitItem from './OutfitItem.jsx';
import { fitLeftScroll, fitRightScroll, addToOutfit } from './relatedHelperFunctions.js';

const outfitList = ({ currentItem, setCurrentItemID, getStars }) => {
  const [outfitItemsIDs, setOutfitItemIDs] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    setOutfitItemIDs(keys);
  }, []);

  return (
    <div>
      <div>
        <div className="outfit-scroll">
          <div className="tempwrapper">
            <h3>Outfit</h3>
            <button className="left carousel-button" type="button" onClick={() => { fitLeftScroll(); }}>&#8678;</button>
            <button className="right carousel-button" type="button" onClick={() => { fitRightScroll(); }}>&#8680;</button>
            <div className="scroll-outfit-items snaps-inline">
              <button className="add-outfit" type="button" onClick={() => { addToOutfit(currentItem, setOutfitItemIDs); }}>&#43;</button>
              {outfitItemsIDs.map((currentID) => (
                <OutfitItem
                  setCurrentItemID={setCurrentItemID}
                  key={currentID}
                  currentID={currentID}
                  setOutfitItemIDs={setOutfitItemIDs}
                  getStars={getStars}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default outfitList;
