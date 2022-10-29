/* eslint-disable no-restricted-syntax */
import React from 'react';

const makeSkusArray = (obj) => {
  const newArray = [];
  const objKeys = Object.keys(obj);
  for (const key of objKeys) {
    const currentSku = obj[key];
    const skusObj = { skus: key, quantity: currentSku.quantity, size: currentSku.size };
    newArray.push(skusObj);
  }
  return newArray;
};

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

const renderSizeOpts = (productSkus) => {
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

export { makeSkusArray, renderQuantOpts, renderSizeOpts };
