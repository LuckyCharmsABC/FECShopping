import React from 'react';

const Gallery = ({ selectedStyle, selectedImageIndex, changeSelectedImgInx }) => {
  // const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedCss = { border: 'solid black' };
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
            <img width="80" height="auto" alt="x" src={photo.thumbnail_url} />
          </div>
        ))}
      </div>
      <section className="slider">
        <div>
          <ul id="s">
            {selectedStyle.photos.map((photo, index) => (
              <li id="s1">
                <img src={selectedStyle.photos[selectedImageIndex].url} alt="x" />
              </li>
            ))}
          </ul>
        </div>
      </section>



      <div id="displayBkg">
        <img className="displayedImage" alt="x" src={selectedStyle.photos[selectedImageIndex].url} />
      </div>
    </div>
  );
};

export default Gallery;
