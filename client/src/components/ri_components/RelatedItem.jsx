import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RelatedItem = ({ currentID, setCurrentItem }) => {
  const [listItem, setListItem] = useState({});
  useEffect(() => {
    axios.get(`./product?id=${currentID}`)
      .then((results) => {
        console.log('INDIVIDUAL GET', results.data);
        setListItem(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClick = (e) => {
    event.preventDefault();
    console.log(listItem);
  };

  return (
    <li onClick={onClick}>
      {listItem.category}<n/>
      {`${listItem.name}: ${listItem.slogan}`}
    </li>
  );
};

export default RelatedItem;
