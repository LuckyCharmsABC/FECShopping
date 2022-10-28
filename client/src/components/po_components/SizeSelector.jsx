import React from 'react';

const SizeSelector = ({
  productSkus, setItemSku, setItemQuant, maxQuant, changeMaxQuant, setSelectedCombo,
}) => {
  // console.log('product skus passed in is ', productSkus);

  const renderQuantOpts = (value) => {
    if (value === -1) {
      return <option value={-1}>-</option>;
    }
    const options = [];
    for (let i = 1; i <= value; i += 1) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  const renderSizeOpts = () => {
    let totalStock = 0;
    let options = [<option key="-1" value="-1">Select Size</option>];
    for (let i = 0; i < productSkus.length; i += 1) {
      totalStock += productSkus[i].quantity;
    }
    if (totalStock === 0) {
      return <option value="-1">OUT OF STOCK</option>;
    }
    const sizes = productSkus.map((sku, i) => {
      if (sku.quantity) {
        return (
          <option key={sku.skus} value={i}>{sku.size}</option>
        );
      }
    });
    options = options.concat(sizes);
    return options;
  };

  return (
    <div className="selectors">
      <select
        className="dropdown-list"
        id="size-selector"
        onChange={(event) => {
          if (event.target.value === '-1') {
            changeMaxQuant(-1);
            setSelectedCombo({ sku_id: '', count: 1 });
            return;
          }
          const quant = productSkus[event.target.value].quantity;
          changeMaxQuant(quant < 15 ? quant : 15);
          setItemSku(productSkus[event.target.value].skus);
        }}
      >
        {renderSizeOpts()}
      </select>
      <select
        className="dropdown-list"
        id="num-selector"
        onChange={(event) => {
          setItemQuant(parseInt(event.target.value, 10));
        }}
      >
        {renderQuantOpts(maxQuant)}
      </select>
    </div>
  );
};

export default SizeSelector;
