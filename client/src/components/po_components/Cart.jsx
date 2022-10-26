import React, { useState } from 'react';
import SizeSelector from './SizeSelector.jsx';
import axios from 'axios';

const Cart = ({ selectedStyle, maxQuant, changeMaxQuant }) => {
  const [selectedCombo, setSelectedCombo] = useState({ sku_id: '', count: 0 });
  const productSkus = [];
  const skusKeys = Object.keys(selectedStyle.skus);
  // eslint-disable-next-line no-restricted-syntax
  for (const key of skusKeys) {
    const currentSku = selectedStyle.skus[key];
    const skusObj = { skus: key, quantity: currentSku.quantity, size: currentSku.size };
    productSkus.push(skusObj);
  }

  const setItemSku = (value) => {
    const copy = { ...selectedCombo };
    copy.sku_id = value;
    setSelectedCombo(copy);
  };

  const setItemQuant = (value) => {
    const copy = { ...selectedCombo };
    copy.count = value;
    setSelectedCombo(copy);
  };

  const addtoCart = (items) => {
    const itemsToAdd = items;
    console.log('item to add to bag is ', itemsToAdd);
    axios.post('/cart', { params: itemsToAdd })
      .then(() => {
        console.log('items added');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="cartSection">
      <SizeSelector
        productSkus={productSkus}
        setItemSku={setItemSku}
        setItemQuant={setItemQuant}
        maxQuant={maxQuant}
        changeMaxQuant={changeMaxQuant}
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
