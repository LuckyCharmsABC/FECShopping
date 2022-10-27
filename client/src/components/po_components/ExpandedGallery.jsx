import React, { useState } from 'react';
import ExpandedViewButtons from './ExpandedViewButtons.jsx';

const ExpandedGallery = ({
  selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView,
}) => {
  const [zoomedIn, setZoomedIn] = useState(false);
/*   const zoomImage = (x, y) => {
    document.getElementById('display-image').style.cursor = 'zoom-out';
    document.getElementById('display-image').style.tranform = 'scale(2.5)';
    document.getElementById('display-image').style['tranform-origin'] = `${x} ${y}`;
    document.getElementById('display-image').style.transition = 'transform 0.25s ease';
  }; */

  return (
    <div id="expanded-gallery">
      <div className="wrapper" onClick={() => {changeView(true)}}>
        <div className="zoomImage">
          <img
            id="display-image"
            className={zoomedIn ? 'enlarged expanded-displayed-image' : 'expanded-displayed-image'}
/*             className="expanded-displayed-image" */
            src={selectedStyle.photos[selectedImageIndex].url}
            alt="x"
            onClick={(event)=> {
              event.preventDefault();
              if (!zoomedIn) {
                const element = document.getElementById('display-image');
                console.log(`x is ${event.clientX}, y is ${event.clientY}`)
                element.style.setProperty(`--x`, `${event.clientX}px`);
                element.style.setProperty(`--y`, `${event.clientY}px`);
                console.log(getComputedStyle(element).getPropertyValue('transform-origin'));
                setZoomedIn(true);
              } else {
                setZoomedIn(false);
              }
            }}
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
