import React from 'react';
import _ from 'underscore';

const calAverageRating = (data) => {
  const recommended = parseInt(data.recommended.true, 10) || 0;
  const notRecommended = parseInt(data.recommended.false, 10) || 0;
  const count = notRecommended + recommended;
  let allRatings = 0;
  let aveRating = 0;
  if (Object.keys(data.ratings).length === 0) {
    aveRating = 0;
  } else {
    _.each(data.ratings, (rating, i) => {
      allRatings += rating * i;
      aveRating = Math.round((allRatings / count) * 10) / 10;
    });
  }
  return aveRating;
};

// comment this out when adapted to ratings and review
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

const renderStarRating = (rating) => {
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

export { calAverageRating, calculateStarRating, renderStarRating };
