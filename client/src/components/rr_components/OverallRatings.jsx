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
    5: Math.round((data.ratings[5] / count) * 100),
    4: Math.round((data.ratings[4] / count) * 100),
    3: Math.round((data.ratings[3] / count) * 100),
    2: Math.round((data.ratings[2] / count) * 100),
    1: Math.round((data.ratings[1] / count) * 100),
  };

  return (
    <div>
      <h1>{averageRating}</h1>
      <h5>
        {`${averageRating} `}
        but in stars
      </h5>
      <h3>
        {recommendPercent}
        % of users recommend this product
      </h3>
      <ul>
        {_.map(ratingPercents, (rating, i) => (
          <div key={i}>
            {`${i} `}
            Stars:
            {` ${rating}`}
            %
          </div>
        ))}
      </ul>
      <ul>
        {_.map(data.characteristics, (char, i) => (
          <div key={char.id}>
            <h5>{`${i}: ${Math.round((char.value / 5) * 100)}`}</h5>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OverallRatings;
