import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {
  return (
    <div>
      <h5>### reviews, sorted by: </h5>
      <select>
        <option value="relevance">Relevance</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>

      <Review />
      <Review />

      <button>Add Review</button>
      <button>Show More</button>
    </div>
  )
}

export default ReviewList;