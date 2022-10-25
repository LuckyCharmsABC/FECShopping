import React from 'react';
import _ from 'underscore';

const OverallRatings = ({
  data,
  averageRating,
  averageStarRating,
  qualities,
}) => {
  const totalCount = parseInt(data.recommended.true, 10) + parseInt(data.recommended.false, 10);
  const recommendPercent = Math.round((data.recommended.true / totalCount) * 100);
  const ratingPercents = {
    1: Math.round((data.ratings[5] / totalCount) * 100),
    2: Math.round((data.ratings[4] / totalCount) * 100),
    3: Math.round((data.ratings[3] / totalCount) * 100),
    4: Math.round((data.ratings[2] / totalCount) * 100),
    5: Math.round((data.ratings[1] / totalCount) * 100),
  };

  return (
    <div>
      <h1>{averageRating}</h1>
      {averageStarRating}
      <h3>
        {recommendPercent}
        % of users recommend this product
      </h3>
      <ul>
        {_.map(ratingPercents, (rating, i) => (
          <div key={i}>
            {`${5 - i + 1} `}
            {'Star '}
            <div className="rating-percent">
              <span className="percent-bar" id={`${5 - i} stars`} style={{ width: `${rating}%` }} />
            </div>
            {` ${rating}%`}
          </div>
        ))}
      </ul>
      <ul>
        {_.map(data.characteristics, (char, i) => (
          <div className="characteristics-scale">
            <span className="char-name">{i}</span>
            <span className="fa fa-caret-down caret-down" style={{ left: `${Math.round((char.value / 5) * 100)}%` }} />
            <span className="char-bar" />
            <div className="attributes">
              <span className="left-option">{qualities[i][0]}</span>
              <span className="mid-option">{qualities[i][2]}</span>
              <span className="right-option">{qualities[i][4]}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OverallRatings;
