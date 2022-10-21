import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemComparison from './ItemComparison.jsx';

const RelatedItem = ({ currentID, setCurrentItem, detailItem }) => {
  const [listItem, setListItem] = useState({});
  const [itemStyle, setItemStyle] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`./product?id=${currentID}`)
      .then((res) => {
        // console.log('INDIVIDUAL GET', res.data);
        setListItem(res.data);
      })
      .catch((err) => console.log(err));
    axios.get('/productstyles', { params: { id: currentID } })
      .then((res) => {
        // console.log('GET STYLES', res.data);
        setItemStyle(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateDetail = () => {
    event.preventDefault();
    console.log(listItem);
    setCurrentItem(listItem);
  };

  return (
    <div>
      <ItemComparison showModal={showModal} setShowModal={setShowModal}/>
      <div className="related-item" onClick={updateDetail}>
        <img src={itemStyle[0]?.photos[0].thumbnail_url === null ? "https://www.fillmurray.com/140/200" : itemStyle[0]?.photos[0].thumbnail_url} alt="Placeholder" />
        <button className="action-star" type="button">&#9734;</button>
        {listItem.category}
        {`${listItem.name} ${itemStyle[0]?.name}`}
        {itemStyle[0]?.original_price}
      </div>
    </div>
  );
};

export default RelatedItem;
