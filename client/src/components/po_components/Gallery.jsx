import React from 'react';

const Gallery = ({ selectedStyle, selectedImageIndex, changeSelectedImgInx }) => {
  // const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedCss = { border: 'solid black' };
  return (
    <div id="imageGallery">
      <div id="gallery">
        {selectedStyle.photos.map((photo, index) => {
          const jumpSlideId = `#carousel_slide${index + 1}`;
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
                href={jumpSlideId}>
                <img width="85" height="auto" alt="x" src={photo.thumbnail_url} />
              </a>
            </div>
          );
        })}
      </div>
      <section className="carousel">
        <ol className="carousel__viewport">
          {selectedStyle.photos.map((photo, index) => {
            const { length } = selectedStyle.photos;
            const slideId = `carousel_slide${index + 1}`;
            const prevHref = index === 0 ? `#carousel_slide${length}` : `#carousel_slide${index}`;
            const nextHref = index === length - 1 ? `#carousel_slide${0}` : `#carousel_slide${index + 2}`;
            return (
              <li
                id={slideId}
                className="carousel__slide"
              >
                <img className="displayedImage" alt="x" src={photo.url} />
                <div className="carousel__snapper">
                  <a
                    href={prevHref}
                    className="carousel__prev"
/*                     onClick={(event) => {
                      event.preventDefault();
                      if (index !== 0 && index !== length - 1) {
                        changeSelectedImgInx(index - 1);
                      };
                    }} */
                  >
                    Go to last slide {prevHref}</a>
                  <a href={nextHref} className="carousel__next">Go to next slide {nextHref}</a>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
{/*       <div id="displayBkg">
        <img className="displayedImage" alt="x" src={selectedStyle.photos[selectedImageIndex].url} />
      </div> */}
    </div>
  );
};

export default Gallery;
