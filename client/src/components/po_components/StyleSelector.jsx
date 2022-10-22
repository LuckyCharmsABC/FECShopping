import React from 'react';

const StyleSelector = ({ productStyles, selectedStyle, selectStyle }) => {
  const selectedCss = { border: 'solid #0F3460' };
  return (
    <div>
      <p>
        <b>STYLE</b>
      </p>
      <div className="styleList">
        {productStyles.map((style) => (
          <div
            key={style.style_id}
            id={style.style_id}
            role="button"
            onClick={(event) => {
              event.preventDefault();
              selectStyle(style);
            }}
            onKeyPress={() => {}}
            tabIndex={0}
            style={style.style_id === selectedStyle.style_id ? selectedCss : { border: 'solid white' }}
          >
            <img className="styleThumbnail" alt="x" src={style.photos[0].thumbnail_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
