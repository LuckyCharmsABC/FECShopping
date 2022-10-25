import React from 'react';
import Review from './Review.jsx';
import NewReview from './NewReview.jsx';

const ReviewList = ({
  allReviews, data, reviews, showMore, sort, qualities,
}) => {
  const handleShowMore = () => {
    showMore(reviews.length);
  };

  const handleSort = () => {
    sort(document.getElementsByName('sort')[0].value);
  };

  const showNewReview = () => {
    const newReview = document.getElementById('new-review');
    newReview.style.display = 'block';
  };

  const count = allReviews.results.length;
  const showMoreBtn = count - reviews.length ? <button type="button" onClick={handleShowMore}>Show More</button> : <div />;
  return (
    <div>
      <NewReview data={data} qualities={qualities} />
      <form>
        <label htmlFor="sort">
          { `${count} ` }
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

      <ul id="review-list">
        {reviews.map((review) => (
          <Review review={review} key={review.review_id} />))}
      </ul>

      <button type="button" id="add-review" onClick={showNewReview}>Add Review</button>
      {showMoreBtn}
    </div>
  );
};

export default ReviewList;
