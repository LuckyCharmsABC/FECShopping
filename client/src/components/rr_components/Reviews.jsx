import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import OverallRatings from './OverallRatings.jsx';
import ReviewList from './ReviewList.jsx';

const Reviews = ({
  currentItem,
  data,
  averageRating,
  reviews,
  allReviews,
  setReviews,
  setAllReviews,
}) => {
  const showMore = (limit) => {
    setReviews(allReviews.results.slice(0, limit + 2));
  };

  const sort = (method) => {
    axios.get('/reviews', {
      params: {
        product_id: currentItem.id,
        sort: method,
        count: 999999,
      },
    }).then((results) => {
      setAllReviews(results.data);
      setReviews(results.data.results.slice(0, 2));
    });
  };

  return _.size(data) && _.size(allReviews) && _.size(reviews) ? (
    <div>
      <p>Ratings and Reviews</p>
      <OverallRatings data={data} averageRating={averageRating} />
      <ReviewList
        reviews={reviews}
        data={data}
        allReviews={allReviews}
        showMore={showMore}
        sort={sort}
      />
    </div>
  ) : <div />;
};

export default Reviews;
