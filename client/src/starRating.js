import React from 'react';
import _ from 'underscore';

const calculateStarRating = (rating) => {
  const starFloor = Math.floor(rating);
  const starDec = rating - starFloor;
  const from25 = Math.abs(starDec - 0.25);
  const from50 = Math.abs(starDec - 0.5);
  const from75 = Math.abs(starDec - 0.75);
  const from100 = 1 - starDec;
  let starPerc = 'empty-star';
  if (from100 < from75) {
    starPerc = 'full-star';
  } else if (from75 < from50) {
    starPerc = 'three-quarters-star';
  } else if (from50 < from25) {
    starPerc = 'half-star';
  } else if (from25 < starDec) {
    starPerc = 'quarter-star';
  }
  return (
    <div>
      {_.map(Array(starFloor), (elem, i) => (
        <span className="star fa fa-star full-star" key={i} />
      ))}

      <span className={`star fa fa-star ${starPerc}`} />

      {_.map(Array(5 - (starFloor + 1)), (elem, i) => (
        <span className="star fa fa-star" key={starFloor + 1 + i} />
      ))}
    </div>
  );
};

export default calculateStarRating;
