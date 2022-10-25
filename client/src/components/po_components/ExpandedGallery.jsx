import React, { useState } from 'react';
import ExpandedViewButtons from './ExpandedViewButtons.jsx';

const ExpandedGallery = ({ selectedStyle, selectedImageIndex, changeSelectedImgInx, changeView }) => {
  const [zoomedIn, setZoomedIn] = useState(false);

  return (
    <div id="expanded-gallery">
      <div className="wrapper" onClick={() => {changeView(true)}}>
        <div className="zoomImage">
          <img
            className={zoomedIn ? 'enlarged expanded-displayed-image' : 'expanded-displayed-image'}
            src={selectedStyle.photos[selectedImageIndex].url}
            alt="x"
            onClick={(event)=> {
              event.preventDefault();
              if (!zoomedIn) {
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
