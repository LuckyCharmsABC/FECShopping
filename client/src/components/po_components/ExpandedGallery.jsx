import React from 'react';

const ExpandedGallery = ({ selectedStyle, selectedImageIndex, changeSelectedImgInx }) => {
  const selectedCss = { blackgroundColor: '#0F3460' };

  return (
    <div id="expanded-gallery">
      <section className="expanded-slider">
        <div>
          <ul id="expanded-s">
            {selectedStyle.photos.map((photo, index) => {
              const { length } = selectedStyle.photos;
              const slideId = `s${index + 1}`;
              const prev = `#s${index}`;
              const next = `#s${index + 2}`;
              return (
                <li id={slideId} className="expanded-slide">
                  <img className="expanded-displayed" src={photo.url} alt="x" />
                  <div className="expanded-snapper">
                    <a
                      className={index === 0 ? 'nav-button disabled' : 'nav-button'}
                      href={prev}
                      onClick={() => { changeSelectedImgInx(index - 1)}}
                    >
                      <i
                        className={index === 0 ? 'fa-solid fa-chevron-left fa-xl disabled-nav-button' : 'fa-solid fa-chevron-left fa-xl'}
                      />
                    </a>
                    <a
                      className={index === length - 1 ? 'nav-button disabled' : 'nav-button'}
                      href={next}
                      onClick={() => { changeSelectedImgInx(index + 1); }}
                    >
                      <i
                        className={index === length - 1 ? 'fa-solid fa-chevron-right fa-xl disabled-nav-button' : 'fa-solid fa-chevron-right fa-xl'}
                      />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div className="navigator">
        {selectedStyle.photos.map((photo, index) => {
          const jumpSlideId = `#s${index + 1}`;
          return (
            <div
              key={photo.url}
              role="button"
              onClick={() => { changeSelectedImgInx(index); }}
              onKeyPress={() => {}}
              tabIndex={0}
              style={index === selectedImageIndex ? selectedCss : { blackgroundColor: 'blue' }}
            >
              <a
                href={jumpSlideId}
                className={index === selectedImageIndex ? 'dot-thumbnail selected' : 'dot-thumbnail'}
              >
                Navigate
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandedGallery;
