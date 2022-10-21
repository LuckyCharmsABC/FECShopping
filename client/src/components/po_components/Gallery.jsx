import React, { useState } from 'react';

const Gallery = ({ selectedStyle }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedCss = { border: 'solid yellow' };
  return (
    <div id="imageGallery">
      <div id="gallery">
        {selectedStyle.photos.map((photo, index) => (
          <div
            className="thumbnail"
            key={photo.url}
            role="button"
            onClick={() => { setSelectedImageIndex(index); }}
            onKeyPress={() => {}}
            tabIndex={0}
            style={index === selectedImageIndex ? selectedCss : { border: 'none' }}
          >
            <img width="50" height="auto" alt="x" src={photo.thumbnail_url} />
          </div>
        ))}
      </div>
      <div id="displayBkg">
        <img className="displayedImage" alt="x" src={selectedStyle.photos[selectedImageIndex].url} />
      </div>
    </div>
  );
};

export default Gallery;
