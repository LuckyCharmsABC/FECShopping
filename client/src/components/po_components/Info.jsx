import React from 'react';
import { renderStarRating } from '../../helperFunctions/app_helpers.js';

const Info = ({
  product, selectedStyle, scrollToReviews, averageRating, reviewCount,
}) => {
  const saleStyle = { color: '#CC3636' };
  const saleOriginal = { textDecoration: 'line-through' };
  const originalPrice = `$${selectedStyle.original_price}`;
  const renderReview = (reviewNo) => {
    if (reviewNo === 0) {
      return <div />;
    }
    return (
      <div className="general-review">
        <div className="starRating">
          { renderStarRating(averageRating) }
          {averageRating}
          {` (${reviewCount}) `}
        </div>
        <div
          className="readReviews"
          role="button"
          onClick={scrollToReviews}
          onKeyPress={() => {}}
          tabIndex={0}
        >
          {`Read all ${reviewCount} reviews`}
        </div>
      </div>
    );
  };

  return (
    <div id="productInfo">
      {renderReview(reviewCount)}
      <div>{`CATEGORY ${product.category}`}</div>
      <div role="heading" aria-level="1" name="productName" className="product-name">{product.name}</div>
      <div id="price-area">
        <div style={selectedStyle.sale_price ? saleOriginal : { color: 'black' }}>
          {selectedStyle.sale_price ? originalPrice : ''}
        </div>
        <div style={selectedStyle.sale_price ? saleStyle : { color: 'black' }}>
          $
          { selectedStyle.sale_price ? selectedStyle.sale_price : selectedStyle.original_price }
        </div>
      </div>
    </div>
  );
};

export default Info;
