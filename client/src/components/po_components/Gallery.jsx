import React from 'react';

const Gallery = ({
  selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView,
}) => {
  const selectedCss = { border: 'solid black' };
  const { length } = selectedStyle.photos;
  return (
    <div id="imageGallery">
      <div id="gallery">
        {selectedStyle.photos.map((photo, index) => (
          <div
            className="thumbnail"
            key={photo.url}
            role="button"
            onClick={() => { changeSelectedImgInx(index); }}
            onKeyPress={() => {}}
            tabIndex={0}
            style={index === selectedImageIndex ? selectedCss : { border: 'solid white' }}
          >
            <img width="85" height="auto" alt="x" src={photo.thumbnail_url} />
          </div>
        ))}
      </div>
      <div
        className="nav-button"
        role="button"
        tabIndex={0}
        onKeyPress={() => {}}
        width={selectedImageIndex === 0 ? '0' : '20px'}
        onClick={() => {
          if (selectedImageIndex !== 0) {
            changeSelectedImgInx(selectedImageIndex - 1);
          }
        }}
      >
        <i className={selectedImageIndex === 0 ? 'fa-solid fa-chevron-left fa-xl disabled-nav-button' : 'fa-solid fa-chevron-left fa-xl'} />
      </div>
      <div onClick={() => {changeView(true)}}>
        <img className="displayed-image" src={selectedStyle.photos[selectedImageIndex].url} alt="x" />
      </div>
      <div
        className="nav-button"
        role="button"
        tabIndex={0}
        onKeyPress={() => {}}
        width={selectedImageIndex === length - 1 ? '0' : '20px'}
        onClick={() => {
          if (selectedImageIndex !== length - 1) {
            changeSelectedImgInx(selectedImageIndex + 1);
          }
        }}
      >
        <i className={selectedImageIndex === length - 1 ? 'fa-solid fa-chevron-right fa-xl disabled-nav-button' : 'fa-solid fa-chevron-right fa-xl'} />
      </div>
    </div>
  );
};

export default Gallery;
