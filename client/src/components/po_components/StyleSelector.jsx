import React from 'react';

const StyleSelector = ({ productStyles }) => {
  if (productStyles.length === 0) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <p>
        <b>STYLE</b>
      </p>
      <div className="styleList">
        {productStyles.map((style) => (
          <div><img width="50" height="70" alt="x" src={style.photos[0].thumbnail_url} /></div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
