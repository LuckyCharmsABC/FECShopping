import React from 'react';
import axios from 'axios';
import SizeSelector from './SizeSelector.jsx';

const Cart = ({
  selectedStyle, maxQuant, changeMaxQuant, selectedCombo, setSelectedCombo,
}) => {
  const productSkus = [];
  const skusKeys = Object.keys(selectedStyle.skus);
  // eslint-disable-next-line no-restricted-syntax
  for (const key of skusKeys) {
    const currentSku = selectedStyle.skus[key];
    const skusObj = { skus: key, quantity: currentSku.quantity, size: currentSku.size };
    productSkus.push(skusObj);
  }

  const setItemSku = (value) => {
    console.log('setting item sku to ', value);
    const copy = { ...selectedCombo, sku_id: value };
    // copy.sku_id = value;
    console.log('copy is ', copy);
    setSelectedCombo(copy);
  };

  const setItemQuant = (value) => {
    console.log('setting item quant to ', value);
    const copy = { ...selectedCombo, count: value };
    // copy.count = value;
    console.log('copy is ', copy);
    setSelectedCombo(copy);
  };

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
        setItemSku={setItemSku}
        setItemQuant={setItemQuant}
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
