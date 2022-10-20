import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
    <div className="outfit-item">
      <img src={itemStyle[0]?.photos[0].thumbnail_url === null ? "https://www.fillmurray.com/140/200" : itemStyle[0]?.photos[0].thumbnail_url} alt="Placeholder" />
      <button className="delete-outfit" type="button" onClick={removeItem}>&#x2612;</button>
      {outfitItem.category}
      {`${outfitItem.name} ${itemStyle[0]?.name}`}
      {itemStyle[0]?.original_price}
    </div>
  );
};

export default OutfitItem;
