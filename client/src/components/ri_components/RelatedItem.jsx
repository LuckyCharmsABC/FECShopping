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
    <CardContainer>
      <ItemComparison
        showModal={showModal}
        detailItem={detailItem}
        relatedItem={listItem}
        toggleModal={toggleModal}
      />
      <Card onClick={updateDetail}>
        <ImageContainer>
          <ItemImg src={itemStyle[0]?.photos[0].thumbnail_url === null ? "https://www.fillmurray.com/140/200" : itemStyle[0]?.photos[0].thumbnail_url} alt="Placeholder" />
          <ActionButton className="action-star" type="button" onClick={(e) => logComparison(e)}>&#9734;</ActionButton>
        </ImageContainer>
        <CardCategory>{listItem.category}</CardCategory>
        <CardName>{`${listItem.name} - ${itemStyle[0]?.name}`}</CardName>
        <Price>{itemStyle[0]?.original_price}</Price>
      </Card>
    </CardContainer>
  );
};

export default RelatedItem;

const CardContainer = styled.div`
  position: relative;
  width: 25vw;
  max-width: 255px;
`

const Card = styled.div`
  display: grid;
  contain: content;
  background: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

const ItemImg = styled.img`
  inline-size: 100%;
  aspect-ratio: 140 / 200;
  object-fit: cover;
`
const CardCategory = styled.p`
  font-variant: small-caps;
  font-size: small;
  margin: 0;
`

const CardName = styled.h4`
margin: 0;
font-size: small;
`

const Price = styled.div`
font-size: small;
`

const ImageContainer = styled.div`
display: flex;
`

const ActionButton = styled.button`
  position: absolute;
  top: 1%;
  right: 1%;
  background: none;
  border: none;
  font-size: 2rem;
  color: rgba(255, 255, 255, .7);
  cursor: pointer;
  &:hover {
    color: white;
  }
`