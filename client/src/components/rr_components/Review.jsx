import React from 'react';

const Review = ({ review }) => {
  const recommended = review.recommend ? <h5>I recommend this product</h5> : <div />;
  return (
    <div>
      <h4>{review.reviewer_name}</h4>
      <h5>{review.date}</h5>
      <h5>
        {review.rating}
        stars
      </h5>
      <h3>{review.summary}</h3>
      {recommended}
      <p>{review.body}</p>
      <button type="button">
        Helpful? (
        { review.helpfulness }
        )
      </button>
      <button type="button">Report</button>
    </div>
  );
};

export default Review;
