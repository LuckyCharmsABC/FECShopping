import React from 'react';
import { renderQuantOpts, renderSizeOpts } from '../../helperFunctions/po_helpers.js';

const SizeSelector = ({
  productSkus, maxQuant, changeMaxQuant, selectedCombo, setSelectedCombo,
}) => (
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
        setSelectedCombo({ ...selectedCombo, sku_id: productSkus[event.target.value].skus });
      }}
    >
      {renderSizeOpts(productSkus)}
    </select>
    <select
      className="dropdown-list"
      id="num-selector"
      onChange={(event) => {
        setSelectedCombo({ ...selectedCombo, count: parseInt(event.target.value, 10) });
      }}
    >
      {renderQuantOpts(maxQuant)}
    </select>
  </div>
);

export default SizeSelector;
