import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';

const RelatedList = ({ currentItem, setCurrentItem }) => {
  const [relatedItemsIDs, setRelatedItemsIDs] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentItem.id}/related`)
      .then((results) => {
        setRelatedItemsIDs(results.data);
      })
      .catch((err) => console.log(err));
    axios.get('./products')
      .then((results) => {
        console.log('Get All', results.data);
        setAllItems(results.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3>Related Items</h3>
      <ul>
        {relatedItemsIDs.map((currentID) => (
          <RelatedItem currentID={currentID} key={currentID} setCurrentItem={setCurrentItem} />
        ))}
      </ul>
    </div>
  );
};

export default RelatedList;
