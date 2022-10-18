import React from 'react';
import Review from './Review.jsx';

const ReviewList = ({ reviews, data }) => {
  let count = data.recommended.false + data.recommended.true;
  count += ' ';
  return (
    <div>
      <h5>
        { count }
        reviews, sorted by:
      </h5>
      <select>
        <option value="relevance">Relevance</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>

      {reviews.results.map((review) => <Review review={review} />)}

      <button type="button">Add Review</button>
      <button type="button">Show More</button>
    </div>
  );
};

export default ReviewList;
