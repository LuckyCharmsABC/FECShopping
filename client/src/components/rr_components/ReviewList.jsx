import React, { useState } from 'react';
import Review from './Review.jsx';
import NewReview from './NewReview.jsx';

const ReviewList = ({
  allReviews, data, reviews, showMore, sort, qualities,
}) => {
  const [newReviewStatus, setNewReviewStatus] = useState('hidden');

  const handleShowMore = () => {
    showMore(reviews.length);
  };

  const handleSort = (event) => {
    sort(event.target.value);
  };

  const showNewReview = () => {
    setNewReviewStatus('shown');
  };

  const count = allReviews.length;
  const showMoreBtn = count - reviews.length ? <button type="button" onClick={handleShowMore} className="submit-button rl-btns-bottom">Show More</button> : <div />;
  return (
    <div className="review-list">
      <NewReview status={newReviewStatus} setStatus={setNewReviewStatus} data={data} qualities={qualities} />
      <form className="sortby">
        <label htmlFor="sort">
          { `${count} ` }
          reviews, sorted by:
        </label>
        <select
          className="review-btn sort-btn"
          onChange={handleSort}
        >
          <option value="relevance" defaultValue>Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </form>

      <ul id="reviews">
        {reviews.map((review) => (
          <Review review={review} key={review.review_id} />))}
      </ul>

      <button type="button" id="add-review" className="submit-button rl-btns-bottom" onClick={showNewReview}>Add Review</button>
      {showMoreBtn}
    </div>
  );
};

export default ReviewList;
