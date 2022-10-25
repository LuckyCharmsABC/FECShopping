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
  const showMoreBtn = count - reviews.length ? <button type="button" onClick={handleShowMore} className="submit-button rl-btns-bottom">Show More</button> : <div />;
  return (
    <div className="review-list">
      <NewReview data={data} qualities={qualities} />
      <form className="sortby">
        <label htmlFor="sort">
          { `${count} ` }
          reviews, sorted by:
        </label>
        <select
          className="review-btn sort-btn"
          name="sort"
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
