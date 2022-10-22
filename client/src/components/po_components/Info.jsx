import React from 'react';

const Info = ({ product, selectedStyle, scrollToReviews, averageRating, reviewCount }) => {
  const saleStyle = { color: '#CC3636' };
  const saleOriginal = { textDecoration: 'line-through' };
  const originalPrice = `$${selectedStyle.original_price}`;
  return (
    <div id="productInfo">
      <div
        role="button"
        onClick={scrollToReviews}
        onKeyPress={() => {}}
        tabIndex={0}
      >
        Read all
        {reviewCount}
        reviews
      </div>
      <div>CATAGORY</div>
      <div>{product.name}</div>
      <div id="price-area">
        <div style={selectedStyle.sale_price ? saleOriginal : { color: 'black' }}>
          {selectedStyle.sale_price ? originalPrice : ''}
        </div>
        <div style={selectedStyle.sale_price ? saleStyle : { color: 'black' }}>
          $
          { selectedStyle.sale_price ? selectedStyle.sale_price : selectedStyle.original_price }
        </div>
      </div>
      <div>
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-pinterest" />
      </div>
    </div>
  );
};

export default Info;
