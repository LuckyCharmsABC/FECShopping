import React from 'react';

const Gallery = ({
  selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView,
}) => {
  const selectedCss = { border: 'solid black' };
  const { length } = selectedStyle.photos;
/*   const fadeOutImage = () => {
    console.log('fadeout invoked');
    const newImage = document.getElementById('display');
    const fadeHandler = () => {
      newImage.removeEventListener('animationed', fadeHandler, false);
      newImage.classList.remove('imageFadeOut');
    };
    newImage.addEventListener('animationed', fadeHandler, false);
    newImage.classList.add('imageFadeOut');
  }; */
/*   const fadeOutImage = () => {
    console.log('fadeout invoked');
    const newImage = document.getElementById('display');
    newImage.addClass('imageFadeOut').one('animationed', () => {
      newImage.removeClass('imageFadeOut');
    });
  }; */
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
        <img id="display" className="displayed-image" src={selectedStyle.photos[selectedImageIndex].url} alt="x" />
      </div>
      <button
        className="nav-button"
        type="submit"
        onClick={() => {
          if (selectedImageIndex !== length - 1) {
            changeSelectedImgInx(selectedImageIndex + 1);
/*             fadeOutImage(); */
          }
        }}
      >
        <i className={selectedImageIndex === length - 1 ? 'fa-solid fa-chevron-right fa-xl disabled-nav-button' : 'fa-solid fa-chevron-right fa-xl'} />
      </button>
    </div>
  );
};

export default Gallery;
