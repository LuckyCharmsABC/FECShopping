import React from 'react';
import SizeSelector from './SizeSelector.jsx';

const Cart = ({ productStyles }) => (
  <div id="cartSection">
    <SizeSelector productStyles={productStyles} />
    <div>
      <button type="submit">ADD TO BAG</button>
      <button type="submit">⭐️</button>
    </div>
  </div>

);
export default Cart;
