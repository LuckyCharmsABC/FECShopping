import React from 'react';

const Info = ({ product, selectedStyle }) => {
  console.log('selectedStye passed in to info is ', selectedStyle);

  return (
    <div id="productInfo">
      <p>Read all reviews</p>
      <p>CATAGORY</p>
      <b>{product.name}</b>
      <p>
        $
        {selectedStyle.original_price}
      </p>
    </div>
  );
};

export default Info;
