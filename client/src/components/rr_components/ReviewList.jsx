import React from 'react';
import Review from './Review.jsx';

const ReviewList = ({ reviews, data, showMore }) => {
  const handleShowMore = () => {
    showMore(reviews.count);
  };

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

      {reviews.results.map((review) => <Review review={review} key={review.review_id} />)}

      <button type="button">Add Review</button>
      <button type="button" onClick={handleShowMore}>Show More</button>
    </div>
  );
};

export default ReviewList;
