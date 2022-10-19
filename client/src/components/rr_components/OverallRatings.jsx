import React from 'react';
import _ from 'underscore';

const OverallRatings = ({ data }) => {
  const count = parseInt(data.recommended.false, 10) + parseInt(data.recommended.true, 10);
  let allRatings = 0;
  _.each(data.ratings, (rating, i) => {
    allRatings += rating * i;
  });
  const averageRating = Math.round((allRatings / count) * 10) / 10;
  const recommendPercent = Math.round((data.recommended.true / count) * 100);
  const ratingPercents = {
    1: Math.round((data.ratings[1] / count) * 100),
    2: Math.round((data.ratings[2] / count) * 100),
    3: Math.round((data.ratings[3] / count) * 100),
    4: Math.round((data.ratings[4] / count) * 100),
    5: Math.round((data.ratings[5] / count) * 100),
  };

  return (
    <div>
      <h1>{averageRating}</h1>
      <h5>
        {averageRating}
        but in stars
      </h5>
      <h3>
        {recommendPercent}
        % of users recommend this product
      </h3>
      <ul>
        <div>
          5 Stars:
          {ratingPercents[5]}
          %
        </div>
        <div>
          4 Stars:
          {ratingPercents[4]}
          %
        </div>
        <div>
          3 Stars:
          {ratingPercents[3]}
          %
        </div>
        <div>
          2 Stars:
          {ratingPercents[2]}
          %
        </div>
        <div>
          1 Stars:
          {ratingPercents[1]}
          %
        </div>
      </ul>
    </div>
  );
};

export default OverallRatings;
