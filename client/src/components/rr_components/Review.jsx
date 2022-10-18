import React from 'react';
import { format, parseISO } from 'date-fns';

const Review = ({ review }) => {
  const recommended = review.recommend ? <h5>I recommend this product</h5> : <div />;
  const date = parseISO(review.date);

  return (
    <div>
      <h4>{review.reviewer_name}</h4>
      <h5>{format(date, 'PPP')}</h5>
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
