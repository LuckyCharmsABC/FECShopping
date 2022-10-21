import React from 'react';

const AdditionalInfo = ({ product }) => (
  <div className="additional-info">
    <b>{product.slogan}</b>
    <p>{product.description}</p>
  </div>
);

export default AdditionalInfo;
