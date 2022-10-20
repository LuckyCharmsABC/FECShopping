import React, { useState, useEffect} from 'react';

const SizeSelector = ({ productSkus, setItemSku, setItemQuant }) => {
  // console.log('product skus passed in is ', productSkus);
  const [maxQuant, setMaxQuant] = useState(0);
  const [isInitial, setIsInitial] = useState(true);
  const renderQuantOpts = (value) => {
    if (value === -1) {
      return <option value={-1}>-</option>;
    }
    const options = [];
    for (let i = 1; i <= value; i += 1) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  };

  //useEffect(() => {
  //  if (!isInitial) {
  //    setIsInitial(false);
  //    return;
  //  }
//
//
  //}, [productSkus]);

  return (
    <div className="selectors">
      <select
        id="sizeSelector"
        onChange={(event) => {
          const sizeValue = event.target.value;
          console.log('size value is ', sizeValue);
          if (sizeValue === '-1') {
            console.log('got here');
            setMaxQuant(-1);
            return;
          }
          const quant = productSkus[sizeValue].quantity;
          console.log('quant is ', quant);
          setMaxQuant(quant < 15 ? quant : 15);
          setItemSku(productSkus[sizeValue].skus);
        }}
      >
        <option value="-1">Select Size</option>
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
