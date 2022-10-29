import React, { useState, useRef } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import _ from 'underscore';

const Review = ({ review }) => {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const reportPopup = useRef(null);
  const recommended = review.recommend ? (
    <h5 className="recommend">
      <span className="fa fa-solid fa-check" />
      {' I recommend this product'}
    </h5>
  ) : (
    <h5 className="recommend">
      <span className="fa fa-solid fa-xmark" />
      {' I do not recommend this product'}
    </h5>
  );
  const date = parseISO(review.date);

  const markHelpful = () => {
    axios.put(`reviews/${review.review_id}/helpful`);
    setHelpfulness(helpfulness + 1);
  };

  const report = () => {
    axios.put(`reviews/${review.review_id}/report`);
    reportPopup.current.style.display = 'block';
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
    <div className="review">
      {starRating}
      <h3 className="review-summary">{review.summary}</h3>
      <p className="review-body">{review.body}</p>
      {recommended}
      <ul className="review-img-list">
        {review.photos.map((photo) => (
          <a href={photo.url} rel="noreferrer" target="_blank" key={photo.id}>
            <img className="review-img" src={photo.url} alt={photo.id} height="150px" />
          </a>
        ))}
      </ul>
      <small><i>{`Submitted by ${review.reviewer_name} on ${format(date, 'PPP')}`}</i></small>
      <div className="review-btns">
        <button type="button" className="review-btn mark-helpful" onClick={markHelpful}>
          Helpful? (
          { helpfulness }
          )
        </button>
        {' | '}
        <button type="button" className="review-btn" onClick={report}>Report</button>
        <div ref={reportPopup} className="reported" id={`${review.review_id}-reported`}>
          <small><i>Reported! You won&apos;t see this review again</i></small>
        </div>
      </div>
    </div>
  );
};

export default Review;
