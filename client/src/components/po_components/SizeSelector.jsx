import React, { useState, useEffect } from 'react';

const SizeSelector = ({ productSkus }) => {
  console.log(productSkus);
  const [maxQuant, setMaxQuant] = useState(0);
  const renderQuantOpts = (value) => {
    const options = [];
    for (let i = 1; i <= value; i += 1) {
      options.push(<option>{i}</option>);
    }
    return options;
  };

  return (
    <div className="selectors">
      <select
        id="sizeSelector"
        onChange={(event) => {
          setMaxQuant(event.target.value < 15 ? event.target.value : 15);
        }}
      >
        <option value="0">Select Size</option>
        {productSkus.map((sku, index) => (
          <option value={productSkus[index].quantity}>{sku.size}</option>
        ))}
      </select>
      <select id="numSelector">
        {renderQuantOpts(maxQuant)}
      </select>
    </div>
  );
};

export default SizeSelector;
