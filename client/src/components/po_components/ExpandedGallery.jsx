import React, { useState } from 'react';
import ExpandedViewButtons from './ExpandedViewButtons.jsx';

const ExpandedGallery = ({
  selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView,
}) => {
  const [zoomedIn, setZoomedIn] = useState(false);
  const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
  const [prevCoord, setPrevCoord] = useState({ x: 0, y: 0 });

  const watchMouse = (xCoord, yCoord) => {
    const newCoord = { ...mouseCoord, x: xCoord, y: yCoord };
    setPrevCoord(mouseCoord);
    setMouseCoord(newCoord);
  };

  return (
    <div id="expanded-gallery">
      <div className="wrapper" onClick={() => { changeView(true) }}>
        <div
          className="zoomImage"
          id="container"
          role="button"
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById('display-image');
            if (!zoomedIn) {
              const imageleft = element.getBoundingClientRect().x;
              const imagetop = element.getBoundingClientRect().y;
              element.style.setProperty('--x', `${event.clientX - imageleft}px`);
              element.style.setProperty('--y', `${event.clientY - imagetop}px`);
              setZoomedIn(true);
            } else {
              setZoomedIn(false);
            }
          }}
          onMouseMove={zoomedIn ? (event) => {
            const element = document.getElementById('container');
            const deltaX = mouseCoord.x - prevCoord.x;
            const deltaY = mouseCoord.y - prevCoord.y;
            watchMouse(event.clientX, event.clientY);
            element.scrollBy(deltaX, deltaY);
          } : () => {}}
          onKeyPress={() => {}}
          tabIndex="0"
        >
          <img
            id="display-image"
            className={zoomedIn ? 'enlarged expanded-displayed-image' : 'expanded-displayed-image'}
            src={selectedStyle.photos[selectedImageIndex].url}
            alt="x"
          />
        </div>
      </div>
      <ExpandedViewButtons
        selectedStyle={selectedStyle}
        selectedImageIndex={selectedImageIndex}
        changeSelectedImgInx={changeSelectedImgInx}
        changeView={changeView}
        zoomedIn={zoomedIn}
      />
    </div>
  );
};

export default ExpandedGallery;
