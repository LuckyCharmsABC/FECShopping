import React, {useState, useEffect} from 'react';

const AdditionalInfo = ({product}) => {
  return (
    <div>
      <b>{product.slogan}</b>
      <p>{product.description}</p>
    </div>
  )
}

export default AdditionalInfo;


