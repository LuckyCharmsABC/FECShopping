import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const OutfitItem = ({ detailItem, setCurrentItem, currentID, setOutfitItemIDs }) => {
  const [outfitItem, setOutfitItem] = useState({});
  const [itemStyle, setItemStyle] = useState([]);

  useEffect(() => {
    console.log(currentID);
    axios.get(`./product?id=${currentID}`)
      .then((res) => {
        // console.log('OUTFIT GET', res.data);
        setOutfitItem(res.data);
      })
      .catch((err) => console.log(err));
    axios.get('/productstyles', { params: { id: currentID } })
      .then((res) => {
        // console.log('STYLES', res.data.results);
        setItemStyle(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeItem = () => {
    console.log('REMOVE', outfitItem);
    localStorage.removeItem(outfitItem.id);
    setOutfitItemIDs(Object.keys(localStorage))
  }

  return (
    <CardContainer>
      <Card>
        <ImageContainer>
          <ItemImg src={itemStyle[0]?.photos[0].thumbnail_url === null ? "https://www.fillmurray.com/140/200" : itemStyle[0]?.photos[0].thumbnail_url} alt="Placeholder" />
          <ActionButton type="button" onClick={removeItem}>&#x2612;</ActionButton>
        </ImageContainer>
        <CardCategory>{outfitItem.category}</CardCategory>
        <CardName>{`${outfitItem.name} - ${itemStyle[0]?.name}`}</CardName>
        <Price>{itemStyle[0]?.original_price}</Price>
      </Card>
    </CardContainer>
  );
};

export default OutfitItem;

const CardContainer = styled.div`
  position: relative;
  max-width: 215px;
`

const Card = styled.div`
  display: grid;
  contain: content;
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
  top: .5%;
  right: .5%;
  background: none;
  border: none;
  font-size: 3rem;
  color: rgba(255, 255, 255, .7);
  cursor: pointer;
  &:hover {
    color: white;
  }
`
