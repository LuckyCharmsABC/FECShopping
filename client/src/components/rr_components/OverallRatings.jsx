import React from 'react';
import _ from 'underscore';

const OverallRatings = ({ data, averageRating }) => {
  const totalCount = parseInt(data.recommended.true, 10) + parseInt(data.recommended.false, 10);
  const recommendPercent = Math.round((data.recommended.true / totalCount) * 100);
  const ratingPercents = {
    5: Math.round((data.ratings[5] / totalCount) * 100),
    4: Math.round((data.ratings[4] / totalCount) * 100),
    3: Math.round((data.ratings[3] / totalCount) * 100),
    2: Math.round((data.ratings[2] / totalCount) * 100),
    1: Math.round((data.ratings[1] / totalCount) * 100),
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
