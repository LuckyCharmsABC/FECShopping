import React, { useState, useEffect } from 'react';

const SizeSelector = ({ productSkus }) => {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div className="selectors">
      <select id="sizeSelector">
        <option value="Select Size">Select Size</option>
        {productSkus.map((sku) => (
          <option>{sku.size}</option>
        ))}
      </select>
      <select id="numSelector">
        <option>1</option>
      </select>
    </div>
  );
};

export default SizeSelector;
