import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import _ from 'underscore';
import RelatedItem from './RelatedItem.jsx';

const RelatedList = ({ currentItem, setCurrentItem, getStars }) => {
  const [relatedItemsIDs, setRelatedItemsIDs] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentItem.id}/related`)
      .then((results) => {
        console.log('RELATED ITEMS', _.uniq(results.data));
        setRelatedItemsIDs(_.uniq(results.data));
      })
      .catch((err) => console.log(err));
  }, [currentItem]);

  const leftScroll = () => {
    const left = document.querySelector('.scroll-related-items');
    left.scrollBy(-200, 0);
  };
  const rightScroll = () => {
    const right = document.querySelector('.scroll-related-items');
    right.scrollBy(200, 0);
  };

  return (
    <div>
      <div>
        <div className="related-scroll">
          <div className="tempwrapper">
            <h3>Related Items</h3>
            <button className="left carousel-button" type="button" onClick={() => { leftScroll(); }}>&#8678;</button>
            <button className="right carousel-button" type="button" onClick={() => { rightScroll(); }}>&#8680;</button>
            <div className="scroll-related-items snaps-inline">
              {relatedItemsIDs.map((currentID) => (
                <RelatedItem
                  currentID={currentID}
                  key={currentID}
                  setCurrentItem={setCurrentItem}
                  detailItem={currentItem}
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

export default RelatedList;
