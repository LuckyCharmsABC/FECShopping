import React from 'react';

const Info = ({ product, selectedStyle, scrollToReviews }) => {
  const saleStyle = { color: 'red' };
  const saleOriginal = { 'text-decoration': 'line-through' };
  return (
    <div id="productInfo">
      <div
        role="button"
        onClick={scrollToReviews}
        onKeyPress={() => {}}
        tabIndex={0}
      >
        Read all reviews
      </div>
      <p>CATAGORY</p>
      <b>{product.name}</b>
      <div style={selectedStyle.sale_price ? saleStyle : { color: 'black' }}>
        $
        { selectedStyle.sale_price ? selectedStyle.sale_price : selectedStyle.original_price }
      </div>
      <div style={selectedStyle.sale_price ? saleOriginal : { color: 'black' }}>
        {selectedStyle.sale_price ? selectedStyle.original_price : ''}
      </div>
      <div>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>
      </div>
    </div>
  );
};

export default Info;
