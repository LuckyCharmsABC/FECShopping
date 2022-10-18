import React from 'react';
import SizeSelector from './SizeSelector.jsx';

const Cart = ({ productStyles }) => {
  const productSkus = [];
  const skusKeys = Object.keys(productStyles[0].skus);
  // eslint-disable-next-line no-restricted-syntax
  for (const key of skusKeys) {
    const currentSku = productStyles[0].skus[key];
    const skusObj = { skus: key, quantity: currentSku.quantity, size: currentSku.size };
    productSkus.push(skusObj);
  }

  return (
    <div id="cartSection">
      <SizeSelector productSkus={productSkus} />
      <div>
        <button type="submit">ADD TO BAG</button>
        <button type="submit">⭐️</button>
      </div>
    </div>
  );
};
export default Cart;
