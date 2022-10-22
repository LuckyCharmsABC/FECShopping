import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
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
  }, [detailItem]);

  const updateDetail = () => {
    event.preventDefault();
    console.log(listItem);
    setCurrentItem(listItem);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const logComparison = (e) => {
    e.stopPropagation();
    toggleModal();
    console.log('PRODUCT DETAIL ITEM', detailItem);
    console.log('ITEM TO COMPARE', listItem);
  }

  return (
    <div>
      <ItemComparison
        showModal={showModal}
        detailItem={detailItem}
        relatedItem={listItem}
        toggleModal={toggleModal}
      />
      <Card onClick={updateDetail}>
        <div>
          <ItemImg src={itemStyle[0]?.photos[0].thumbnail_url === null ? "https://www.fillmurray.com/140/200" : itemStyle[0]?.photos[0].thumbnail_url} alt="Placeholder" />
          <ActionButton className="action-star" type="button" onClick={(e) => logComparison(e)}>&#9734;</ActionButton>
        </div>
        <CardCategory>{listItem.category}</CardCategory>
        <h4>{`${listItem.name} ${itemStyle[0]?.name}`}</h4>
        {itemStyle[0]?.original_price}
      </Card>
    </div>
  );
};

export default RelatedItem;

const Card = styled.div`
  display: grid;
  contain: content;
  border-style: solid;
  border-width: 1px;
  border-color: #0F3460
  padding: 10px;
  background: #ffffff;
  cursor: pointer;
  max-width: 255px;
`;

const ItemImg = styled.img`
  inline-size: 100%;
  aspect-ratio: 140 / 200;
  object-fit: cover;
`
const CardCategory = styled.p`
  font-variant: small-caps;
`

const ActionButton = styled.button`

`