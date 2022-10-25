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
  averageStarRating,
}) => {
  const showMore = (limit) => {
    setReviews(allReviews.results.slice(0, limit + 2));
  };

  const qualities = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too large', 'A size too large'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly comfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
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
      <OverallRatings
        data={data}
        averageRating={averageRating}
        averageStarRating={averageStarRating}
        qualities={qualities}
      />
      <ReviewList
        reviews={reviews}
        data={data}
        allReviews={allReviews}
        showMore={showMore}
        sort={sort}
        qualities={qualities}
      />
    </div>
  ) : <div />;
};

export default Reviews;
