import React from 'react';
import axios from 'axios';
import SizeSelector from './SizeSelector.jsx';
import { makeSkusArray } from '../../helperFunctions/po_helpers.js';

const Cart = ({
  selectedStyle, maxQuant, changeMaxQuant, selectedCombo, setSelectedCombo,
}) => {
  const productSkus = makeSkusArray(selectedStyle.skus);

  const addtoCart = (items) => {
    const itemsToAdd = items;
    if (itemsToAdd.sku_id === '') {
      alert('Please select size');
      return;
    }
    console.log('item to add to bag is ', itemsToAdd);
    axios.post('/cart', itemsToAdd)
      .then(() => {
        alert('items added');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="cartSection">
      <SizeSelector
        productSkus={productSkus}
        maxQuant={maxQuant}
        changeMaxQuant={changeMaxQuant}
        selectedCombo={selectedCombo}
        setSelectedCombo={setSelectedCombo}
      />
      <div>
        <button className="submit-button" id="add-to-cart" type="button" onClick={(event) => { event.preventDefault(); addtoCart(selectedCombo); }}>ADD TO BAG</button>
        <button className="submit-button" type="submit">⭐️</button>
      </div>
      <div className="share-buttons">
        <i className="fa-brands fa-facebook fa-xl" />
        <i className="fa-brands fa-twitter fa-xl" />
        <i className="fa-brands fa-pinterest fa-xl" />
      </div>
    </div>
  );
};
export default Cart;
