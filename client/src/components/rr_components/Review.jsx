import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import _ from 'underscore';

const Review = ({ review }) => {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const recommended = review.recommend ? <h5>I recommend this product</h5> : <div />;
  const date = parseISO(review.date);

  const markHelpful = () => {
    axios.put(`reviews/${review.review_id}/helpful`);
    setHelpfulness(helpfulness + 1);
  };

  const report = () => {
    axios.put(`reviews/${review.review_id}/report`);
    document.getElementById(`${review.review_id}-reported`).style.display = 'block';
  };

  const starRating = (
    <div>
      {_.map(Array(review.rating), (elem, i) => (
        <span className="star fa fa-star full-star" key={i} />
      ))}

      {_.map(Array(5 - review.rating), (elem, i) => (
        <span className="star fa fa-star" key={i + review.rating} />
      ))}
    </div>
  );

  return (
    <div>
      <h4>{review.reviewer_name}</h4>
      <h5>{format(date, 'PPP')}</h5>
      {starRating}
      <h3>{review.summary}</h3>
      {recommended}
      <p>{review.body}</p>
      <ul>
        {review.photos.map((photo) => (
          <img src={photo.url} key={photo.id} alt={photo.id} width="200px" />
        ))}
      </ul>
      <button type="button" onClick={markHelpful}>
        Helpful? (
        { helpfulness }
        )
      </button>
      <button type="button" onClick={report}>Report</button>
      <div className="reported" id={`${review.review_id}-reported`}>
        <small><i>Reported! You won&apos;t see this review again</i></small>
      </div>
    </div>
  );
};

export default Review;
