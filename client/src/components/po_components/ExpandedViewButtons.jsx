import React, { useState } from 'react';

const ExpandedViewButtons = ({ selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView, zoomedIn }) => {
  const { length } = selectedStyle.photos;
  const selectedCss = { blackgroundColor: '#0F3460' };
  if (zoomedIn) {
    return <div></div>;
  }
  return (
    <div>
      <div className="navigator">
        {selectedStyle.photos.map((photo, index) => (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <div
            className={index === selectedImageIndex ? 'dot-thumbnail selected' : 'dot-thumbnail'}
            key={photo.url}
            role="button"
            onClick={() => { changeSelectedImgInx(index); }}
            onKeyPress={() => {}}
            tabIndex={0}
            style={index === selectedImageIndex ? selectedCss : { blackgroundColor: 'blue' }}
          />
        ))}
      </div>
      <button className="close" type="submit" onClick={() => { changeView(false); }}>
        <i className="fa-solid fa-xmark fa-2xl" />
      </button>
      <button
        className="nav-button expanded-nav-left"
        type="submit"
        onClick={() => {
          if (selectedImageIndex !== 0) {
            changeSelectedImgInx(selectedImageIndex - 1);
          }
        }}
      >
        <i className={selectedImageIndex === 0 ? 'fa-solid fa-chevron-left fa-xl disabled-nav-button' : 'fa-solid fa-chevron-left fa-xl'} />
      </button>
      <button
        className="nav-button expanded-nav-right"
        type="submit"
        onClick={() => {
          if (selectedImageIndex !== length - 1) {
            changeSelectedImgInx(selectedImageIndex + 1);
          }
        }}
      >
        <i className={selectedImageIndex === length - 1 ? 'fa-solid fa-chevron-right fa-xl disabled-nav-button' : 'fa-solid fa-chevron-right fa-xl'} />
      </button>
    </div>
  );
};

export default ExpandedViewButtons;
