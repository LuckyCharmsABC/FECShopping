import React, {useState, useEffect} from 'react';

const Info = ({ product }) => (
  <div id="productInfo">
    <p>Reviews</p>
    <p>CATAGORY</p>
    <b>{product.name}</b>
    <p>${product.default_price}</p>
  </div>
);

export default Info;
