import React from 'react';

const AdditionalInfo = ({ product }) => (
  <div>
    <b>{product.slogan}</b>
    <p>{product.description}</p>
  </div>
);

export default AdditionalInfo;
