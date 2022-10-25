import React, { useState } from 'react';

const ExpandedGallery = ({ selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView }) => {
  const selectedCss = { blackgroundColor: '#0F3460' };
  const length = selectedStyle.photos.length;
  const [zoomedIn, setZoomedIn] = useState(false);

  return (
    <div id="expanded-gallery">
      <div className="wrapper" onClick={() => {changeView(true)}}>
        <div className="zoomImage">
          <img
            className={zoomedIn ? 'enlarged expanded-displayed-image' : 'expanded-displayed-image'}
            src={selectedStyle.photos[selectedImageIndex].url}
            alt="x"
            onClick={(event)=> {
              event.preventDefault();
              if (!zoomedIn) {
                setZoomedIn(true);
              } else {
                setZoomedIn(false);
              }
            }}
          />
        </div>
      </div>
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

export default ExpandedGallery;
