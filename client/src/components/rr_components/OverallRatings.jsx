import React from 'react';
import _ from 'underscore';

const OverallRatings = ({ data }) => {
  const count = parseInt(data.recommended.false, 10) + parseInt(data.recommended.true, 10);
  let allRatings = 0;
  _.each(data.ratings, (rating, i) => {
    allRatings += rating * i;
  });
  const averageRating = Math.round((allRatings / count) * 10) / 10;

  return (
    <div>
      <h1>{averageRating}</h1>
      <h5>
        {averageRating}
        but in stars
      </h5>
    </div>
  );
}

export default OverallRatings;
