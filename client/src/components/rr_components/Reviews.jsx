import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import OverallRatings from './OverallRatings.jsx';
import ReviewList from './ReviewList.jsx';

const Reviews = ({ currentItem }) => {
  const [allReviews, setAllReviews] = useState({});
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    axios.get('/reviewdata', { params: { product_id: currentItem.id } })
      .then((data) => {
        setMetaData(data.data);
      });

    axios.get('/reviews', {
      params: {
        product_id: currentItem.id,
        sort: 'relevance',
        count: 999999,
      },
    }).then((data) => {
      setAllReviews(data.data);
      setReviews(data.data.results.slice(0, 2));
    });
  }, [currentItem]);

  const showMore = (count) => {
    setReviews(allReviews.results.slice(0, count + 2));
  };

  const helpful = (id) => {
    axios.put(`reviews/${id}/helpful`);
  };

  const sort = (method) => {
    axios.get('/reviews', {
      params: {
        product_id: currentItem.id,
        sort: method,
        count: 999999,
      },
    }).then((data) => {
      setAllReviews(data.data);
      setReviews(data.data.results.slice(0, 2));
    });
  };

  return _.size(metaData) && _.size(allReviews) && _.size(reviews) ? (
    <div>
      <p>Ratings and Reviews</p>
      <OverallRatings data={metaData} />
      <ReviewList
        reviews={reviews}
        data={metaData}
        allReviews={allReviews}
        showMore={showMore}
        helpful={helpful}
        sort={sort}
      />
    </div>
  ) : <div />;
};

export default Reviews;
