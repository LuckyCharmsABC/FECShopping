import React, { useState } from 'react';

const SizeSelector = ({ productSkus, setItemSku, setItemQuant }) => {
  const [maxQuant, setMaxQuant] = useState(0);
  const renderQuantOpts = (value) => {
    const options = [];
    for (let i = 1; i <= value; i += 1) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div className="selectors">
      <select
        id="sizeSelector"
        onChange={(event) => {
          const quant = productSkus[event.target.value].quantity;
          setMaxQuant(quant < 15 ? quant : 15);
          setItemSku(productSkus[event.target.value].skus);
        }}
      >
        <option value="0">Select Size</option>
        {productSkus.map((sku, i) => (
          <option value={i}>{sku.size}</option>
        ))}
      </select>
      <select
        id="numSelector"
        onChange={(event) => {
          setItemQuant(event.target.value);
        }}
      >
        {renderQuantOpts(maxQuant)}
      </select>
    </div>
  );
};

export default SizeSelector;
