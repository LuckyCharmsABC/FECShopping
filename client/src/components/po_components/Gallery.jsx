import React from 'react';

const Gallery = ({ selectedStyle, selectedImageIndex, changeSelectedImgInx }) => {
  // const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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

{/*       <div>
        <a>
          <i class="fa-solid fa-chevron-left" />
        </a>
      </div> */}
      <section className="slider">
        <div>
          <ul id="s">
            {selectedStyle.photos.map((photo, index) => {
              const slideId = `s${index + 1}`;
              const prev = `#s${index}`;
              const next = `#s${index + 2}`;
              return (
                <li id={slideId} className="slide">
                  <img className="nav-button" className="newDisplayed" src={photo.url} alt="x" />
                  <div className="snapper">
                    <a className="prev-button" href={prev}>
                      <i class="fa-solid fa-chevron-left" />
                    </a>
                    <a className="next-button" href={next}>
                      <i class="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </section>
{/*       <div>
        <a>
          <i className="nav-button" class="fa-solid fa-chevron-right" />
        </a>
      </div> */}
    </div>
  );
};

export default Gallery;
