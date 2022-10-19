import React, { useState } from 'react';
import SizeSelector from './SizeSelector.jsx';

const Cart = ({ selectedStyle }) => {
  const [selectedCombo, setSelectedCombo] = useState({ sku_id: '', count: 0 });
  const productSkus = [];
  // console.log('selectedStyle passed into cart is ', selectedStyle);
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
  };

  return (
    <div id="cartSection">
      <SizeSelector
        productSkus={productSkus}
        setItemSku={setItemSku}
        setItemQuant={setItemQuant}
      />
      <div>
        <button type="button" onClick={() => { addtoCart(selectedCombo); }}>ADD TO BAG</button>
        <button type="submit">⭐️</button>
      </div>
    </div>
  );
};
export default Cart;
