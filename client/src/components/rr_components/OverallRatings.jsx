import React from 'react';
import _ from 'underscore';
import { renderStarRating } from '../../helperFunctions/app_helpers.js';

const OverallRatings = ({
  data,
  averageRating,
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
    <div className="overall-ratings">
      <div className="average-rating-header">
        <h1 className="average-rating-num">{averageRating}</h1>
        <span className="average-star-rating">{renderStarRating(averageRating)}</span>
      </div>
      <h3 className="recommend-percentage">
        {recommendPercent}
        % of users recommend this product
      </h3>
      <ul className="rating-list">
        {_.map(ratingPercents, (rating, i) => (
          <div key={i} className="average-single-rating">
            {`${5 - i + 1} `}
            {'Star '}
            <div className="rating-percent">
              <span className="percent-bar" id={`${5 - i} stars`} style={{ width: `${rating}%` }} />
            </div>
          </div>
        ))}
      </ul>
      <ul className="char-list">
        {_.map(data.characteristics, (char, i) => (
          <div className="characteristics-scale" key={char.id}>
            <span className="char-name">{i}</span>
            <span className="fa fa-caret-down caret-down" style={{ left: `${Math.round((char.value / 5) * 100)}%` }} />
            <span className="char-bar" />
            <div className="attributes">
              <span className="mid-option">{qualities[i][2]}</span>
              <span className="left-option">{qualities[i][0]}</span>
              <span className="right-option">{qualities[i][4]}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OverallRatings;
