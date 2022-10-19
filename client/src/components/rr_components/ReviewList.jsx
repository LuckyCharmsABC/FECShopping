import React from 'react';
import Review from './Review.jsx';

const ReviewList = ({
  reviews, data, showMore, helpful, sort,
}) => {
  const handleShowMore = () => {
    showMore(reviews.count);
  };

  const handleSort = () => {
    sort(document.getElementsByName('sort')[0].value);
  };

  let count = parseInt(data.recommended.false, 10) + parseInt(data.recommended.true, 10);
  count += ' ';
  return (
    <div>
      <form>
        <label htmlFor="sort">
          { count }
          reviews, sorted by:
        </label>
        <select
          name="sort"
          onChange={handleSort}
        >
          <option value="relevance" defaultValue>Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </form>

      <ul>
        {reviews.results.map((review) => (
          <Review review={review} key={review.review_id} helpful={helpful} />))}
      </ul>

      <button type="button">Add Review</button>
      <button type="button" onClick={handleShowMore}>Show More</button>
    </div>
  );
};

export default ReviewList;
