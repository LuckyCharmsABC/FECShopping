import React from 'react';

const StyleSelector = ({ productStyles }) => (
  <div>
    <p>
      <b>STYLE</b>
    </p>
    <div className="styleList">
      {productStyles.map((style) => (
        <div key={style.style_id}><img width="50" height="70" alt="x" src={style.photos[0].thumbnail_url} /></div>
      ))}
    </div>
  </div>
);

export default StyleSelector;
