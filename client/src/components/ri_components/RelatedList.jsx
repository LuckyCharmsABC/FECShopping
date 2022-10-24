import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedItem from './RelatedItem.jsx';

const RelatedList = ({ currentItem, setCurrentItem }) => {
  const [relatedItemsIDs, setRelatedItemsIDs] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentItem.id}/related`)
      .then((results) => {
        console.log('RELATED ITEMS', results.data);
        setRelatedItemsIDs(results.data);
      })
      .catch((err) => console.log(err));
  }, [currentItem]);

  const leftScroll = () => {
    const left = document.querySelector('.scroll-related-items');
    left.scrollBy(-500, 0);
  };
  const rightScroll = () => {
    const right = document.querySelector('.scroll-related-items');
    right.scrollBy(500, 0);
  };

  return (
    <div>
      <h3>Related Items</h3>
      <div>
        <div className="related-scroll">
          <div className="scroll-related-items snaps-inline">
            <button className="left carousel-button" type="button" onClick={() => { leftScroll(); }}>&#8678;</button>
            <button className="right carousel-button" type="button" onClick={() => { rightScroll(); }}>&#8680;</button>
            {relatedItemsIDs.map((currentID, i) => (
              <RelatedItem
                currentID={currentID}
                key={i}
                setCurrentItem={setCurrentItem}
                detailItem={currentItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedList;
