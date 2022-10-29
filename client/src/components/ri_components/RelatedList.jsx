import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import RelatedItem from './RelatedItem.jsx';
import { relLeftScroll, relRightScroll } from '../../helperFunctions/relatedHelperFunctions.js';

const RelatedList = ({ currentItem, setCurrentItemID, getStars }) => {
  const [relatedItemsIDs, setRelatedItemsIDs] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentItem.id}/related`)
      .then((results) => {
        setRelatedItemsIDs(_.uniq(results.data));
      })
      .catch((err) => console.log(err));
  }, [currentItem]);

  if (relatedItemsIDs.length === 0) {
    return (
      <div />
    );
  }
  return (
    <div>
      <div>
        <div className="related-scroll">
          <div className="tempwrapper">
            <h3>Related Items</h3>
            <button className="left carousel-button" type="button" onClick={() => { relLeftScroll(); }}>&#8678;</button>
            <button className="right carousel-button" type="button" onClick={() => { relRightScroll(); }}>&#8680;</button>
            <div className="scroll-related-items snaps-inline">
              {relatedItemsIDs.map((currentID) => (
                <RelatedItem
                  currentID={currentID}
                  key={currentID}
                  setCurrentItemID={setCurrentItemID}
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
