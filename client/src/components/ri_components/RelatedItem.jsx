import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RelatedItem = ({ currentID, setCurrentItem }) => {
  const [listItem, setListItem] = useState({});
  const [itemStyle, setItemStyle] = useState([]);

  useEffect(() => {
    axios.get(`./product?id=${currentID}`)
      .then((results) => {
        // console.log('INDIVIDUAL GET', results.data);
        setListItem(results.data);
      })
      .catch((err) => console.log(err));
    axios.get('/productstyles', { params: { id: currentID } })
      .then((results) => {
        console.log('GET STYLES', results.data);
        setItemStyle(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClick = () => {
    event.preventDefault();
    console.log(listItem);
  };

  return (
    <div className="related-item">
      <img src="https://www.fillmurray.com/140/200" alt="Bill Murray Placeholder" />
      {listItem.category}
      {`${listItem.name}: ${listItem.slogan}`}
    </div>
  );
};

export default RelatedItem;
