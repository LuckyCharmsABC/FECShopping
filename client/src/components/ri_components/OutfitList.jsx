import React, { useState, useEffect } from 'react';
import OutfitItem from './OutfitItem.jsx';

const outfitList = ({ currentItem, setCurrentItem, getStars }) => {
  const [outfitItemsIDs, setOutfitItemIDs] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    console.log('LocalStorage KEYS', keys, localStorage);
    setOutfitItemIDs(keys);
  }, []);

  const leftScroll = () => {
    const left = document.querySelector('.scroll-outfit-items');
    left.scrollBy(-200, 0);
  };
  const rightScroll = () => {
    const right = document.querySelector('.scroll-outfit-items');
    right.scrollBy(200, 0);
  };
  const addToOutfit = () => {
    console.log(localStorage.getItem(currentItem.id));
    if (!!localStorage.getItem(currentItem.id)) {
      alert('Cannot add to outfit twice!');
    } else {
      localStorage.setItem(currentItem.id, currentItem.name);
      setOutfitItemIDs(Object.keys(localStorage));
      console.log(localStorage);
    }
  };

  return (
    <div>
      <div>
        <div className="outfit-scroll">
          <div className="tempwrapper">
            <h3>Outfit</h3>
            <button className="left carousel-button" type="button" onClick={() => { leftScroll(); }}>&#8678;</button>
            <button className="right carousel-button" type="button" onClick={() => { rightScroll(); }}>&#8680;</button>
            <div className="scroll-outfit-items snaps-inline">
              <button className="add-outfit" type="button" onClick={addToOutfit}>&#43;</button>
              {outfitItemsIDs.map((currentID) => (
                <OutfitItem
                  detailItem={currentItem}
                  setCurrentItem={setCurrentItem}
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
