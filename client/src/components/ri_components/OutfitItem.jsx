import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'underscore';
import styled from 'styled-components';
import { updateDetail, removeFromOutfit } from '../../helperFunctions/relatedHelperFunctions.js';
import { calAverageRating, renderStarRating } from '../../helperFunctions/app_helpers.js';
import image from '../../../dist/images/imageNotFound.png';

const OutfitItem = ({ setCurrentItemID, currentID, setOutfitItemIDs }) => {
  const [outfitItem, setOutfitItem] = useState({});
  const [itemStyle, setItemStyle] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const saleStyle = { color: '#CC3636' };
  const saleOriginal = { textDecoration: 'line-through' };

  useEffect(() => {
    axios.get(`./product?id=${currentID}`)
      .then((res) => {
        setOutfitItem(res.data);
      })
      .catch((err) => console.log(err));
    axios.get('/productstyles', { params: { id: currentID } })
      .then((res) => {
        setItemStyle(res.data.results);
      })
      .catch((err) => console.log(err));
    axios.get('/reviewdata', { params: { product_id: currentID } })
      .then(({ data }) => {
        const averageRating = calAverageRating(data);
        setAvgRating(averageRating);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardContainer>
      <Card onClick={() => { updateDetail(outfitItem, setCurrentItemID); }}>
        <ImageContainer>
          <ItemImg src={itemStyle[0]?.photos[0].thumbnail_url === null ? image : itemStyle[0]?.photos[0].thumbnail_url} alt="Placeholder" />
          <ActionButton type="button" onClick={(e) => { removeFromOutfit(e, outfitItem, setOutfitItemIDs); }}>&#x2612;</ActionButton>
        </ImageContainer>
        <CardCategory>{outfitItem.category}</CardCategory>
        <CardName>{`${outfitItem.name} - ${itemStyle[0]?.name}`}</CardName>
        <Price>
          <div style={itemStyle[0]?.sale_price ? saleOriginal : { color: 'black' }}>
            $
            {itemStyle[0]?.original_price}
          </div>
          <div style={saleStyle}>
            {itemStyle[0]?.sale_price ? `$${itemStyle[0].sale_price}` : ''}
          </div>
        </Price>
        {renderStarRating(avgRating)}
      </Card>
    </CardContainer>
  );
};

export default OutfitItem;

const CardContainer = styled.div`
  position: relative;
  width: 19vw;
  max-width: 255px;
`;

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
`;

const CardCategory = styled.p`
  font-variant: small-caps;
  font-size: small;
  margin: 0;
`;

const CardName = styled.h4`
margin: 0;
font-size: small;
`;

const Price = styled.div`
display: flex;
flex-direction: row;
font-size: small;
`;

const ImageContainer = styled.div`
display: flex;
`;

const ActionButton = styled.button`
  position: absolute;
  top: .5%;
  right: .5%;
  background: none;
  border: none;
  font-size: 2rem;
  color: rgba(255, 255, 255, .7);
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
