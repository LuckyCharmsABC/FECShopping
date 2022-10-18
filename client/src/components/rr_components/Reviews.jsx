import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OverallRatings from './OverallRatings.jsx';
import ReviewList from './ReviewList.jsx';

/*
 * Needs to be able to write new review, show reviews, and sort reviews

 * Shows 2 reviews at a time, w/ "show more" button at the bottom (unless reviews <= 2)
 *  - Max height of list is capped, list should be scrollable
 *  - EC: clicking "show more" expands the list to show all reviews
 *
 * Individual tiles should show the star rating (0-5), the date, the summary
 * (one sentence, 60 char, bold), the body (50-1000 char, allows 5 images),
 * recommend checkbox, responses from seller, helpfulness
 *  - If the body is more than 250 chars long, it should only show the first
 * 250 characters and a "show more" button
 *
 * Breakdown Breakdown: average star rating, 5 bars for each star rating,
 * filled in with the percentage of the ratings that are that level
 *  - Clicking on one of the bars will change the ratings list to only
 * show reviews with that rating (if another one is clicked, it will show results for both)
 *
 * Feedback: reviews can give feedback on size, width, comfort, quality, length, and fit (5pt scale)
 *
 * Writing new reviews: Click on a star to select the rating, radio button array for recommendation,
 * select characteristics from 5 radio buttons with these values: https://prnt.sc/OJROWWwfFdH6,
 * text input for summary (60 char), text input for body (50-1000 char, counter for characters),
 * button to upload photos, text input for nickname, text input for email (60 char), submit btn
 *
 * Keyword search: automatically starts filtering the reviews after the user types more than
 * 2 characters in the search bar
 *  - The search should work with other filters
 *  - EC: highlight the text that matches the search result
 */

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState({});
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        count: 2,
        sort: 'relevance',
        product_id: id,
      },
    }).then((data) => {
      setReviews(data.data);
    });

    axios.get('/reviewdata', { params: {product_id: id } })
      .then((data) => {
        setMetaData(data.data);
      });
  }, []);

  return (
    <div>
      <p>Ratings and Reviews</p>
      <OverallRatings data={metaData || {}} />
      <ReviewList reviews={reviews || {}} data={metaData || {}} />
    </div>
  );
};

export default Reviews;
