import React from 'react';
import image from '../../../dist/images/imageNotFound.png';

const StyleSelector = ({ productStyles, selectedStyle, selectStyle }) => {
  const selectedCss = { border: 'solid #0F3460' };
  return (
    <div>
      <div className="styleName">
        <b>STYLE</b>
        {'>'}
        {selectedStyle.name}
      </div>
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
            <img className="styleThumbnail" alt="x" src={style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
