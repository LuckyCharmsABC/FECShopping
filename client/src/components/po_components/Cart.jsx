import React from 'react';

const Cart = ({ product }) => (
  <div id="cartSection">
    <div className="selectors">
      <select>
        <option value="Select Size">Select Size</option>
        <option value="S">S</option>
      </select>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
    <div>
      <button type="submit">ADD TO BAG</button>
      <button type="submit">⭐️</button>
    </div>
  </div>
);
export default Cart;
