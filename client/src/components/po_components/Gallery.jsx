import React from 'react';

const Gallery = ({
  selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView,
}) => {
  const selectedCss = { border: 'solid black' };

  return (
    <div id="imageGallery">
      <div id="gallery">
        {selectedStyle.photos.map((photo, index) => {
          const jumpSlideId = `#s${index + 1}`;
          return (
            <div
              className="thumbnail"
              key={photo.url}
              role="button"
              onClick={() => { changeSelectedImgInx(index); }}
              onKeyPress={() => {}}
              tabIndex={0}
              style={index === selectedImageIndex ? selectedCss : { border: 'solid white' }}
            >
              <a
                href={jumpSlideId}
              >
                <img width="85" height="auto" alt="x" src={photo.thumbnail_url} />
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <img className="displayed-image" src={selectedStyle.photos[selectedImageIndex].url}/>
      </div>
    </div>
  );
};

export default Gallery;
