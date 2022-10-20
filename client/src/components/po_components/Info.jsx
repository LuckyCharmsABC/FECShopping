import React from 'react';

const Info = ({ product, selectedStyle }) => {
  console.log('selectedStye passed in to info is ', selectedStyle);
  const saleStyle = { color: 'red' };
  const saleOriginal = { 'text-decoration': 'line-through' };
  return (
    <div id="productInfo">
      <p>Read all reviews</p>
      <p>CATAGORY</p>
      <b>{product.name}</b>
      <div style={selectedStyle.sale_price ? saleStyle : { color: 'black' }}>
        $
        { selectedStyle.sale_price ? selectedStyle.sale_price : selectedStyle.original_price }
      </div>
      <div style={selectedStyle.sale_price ? saleOriginal : { color: 'black' }}>
        {selectedStyle.sale_price ? selectedStyle.original_price : ''}
      </div>
    </div>
  );
};

export default Info;
