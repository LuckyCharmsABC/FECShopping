import React from 'react';
import image from '../../../dist/images/imageNotFound.png';

const Gallery = ({
  selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView,
}) => {
  const selectedCss = { border: 'solid black' };
  const { length } = selectedStyle.photos;
  return (
    <div id="imageGallery">
      <div id="side-gallery">
        <button
          className="nav-button"
          type="submit"
          onClick={() => {
            document.getElementById('gallery').scrollBy({ left: 0, top: -95, behavior: 'smooth' });
          }}
        >
          <i className="fa-solid fa-chevron-up fa-xl" />
        </button>
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
              <img className="thumbnail-image" alt="x" src={photo.thumbnail_url ? photo.thumbnail_url : image} />
            </div>
          ))}
        </div>
        <button
          className="nav-button"
          type="submit"
          onClick={() => {
            document.getElementById('gallery').scrollBy({ left: 0, top: 95, behavior: 'smooth' });
          }}
        >
          <i className="fa-solid fa-chevron-down fa-xl" />
        </button>
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
        <img id="display" className="displayed-image" src={selectedStyle.photos[selectedImageIndex].url ? selectedStyle.photos[selectedImageIndex].url : image} alt="x" />
      </div>
      <button
        className="nav-button"
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

export default Gallery;
