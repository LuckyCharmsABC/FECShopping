import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import _ from 'underscore';
import Product from './po_components/Product.jsx';
import Related from './ri_components/RelatedItemsAndOutfits.jsx';
import Reviews from './rr_components/Reviews.jsx';

// I set up three different folders for each widget: product overview (po),
// related items(ri) and ratings and reviews (rr). Each contains a main div,
// which will be a child to App. you guys can rename the components and folder if you guys want.

const App = () => {
  const [currentItem, setCurrentItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [metaData, setMetaData] = useState({});
  const [reviewCount, setReviewCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [allReviews, setAllReviews] = useState({});
  const [reviews, setReviews] = useState({});
  const [averageStarRating, setAverageStarRating] = useState(<div />);
  const ref = useRef(null);

  useEffect(() => {
    axios.get('product/?id=40344')
      .then((results) => {
        setCurrentItem(results.data);
        setIsLoading(false);
      })
      .catch((err) => { console.log(err); });
  }, []);

  const calculateStarRating = (rating) => {
    const starFloor = Math.floor(rating);
    const starDec = rating - starFloor;
    const from25 = Math.abs(starDec - 0.25);
    const from50 = Math.abs(starDec - 0.5);
    const from75 = Math.abs(starDec - 0.75);
    const from100 = 1 - starDec;
    let starPerc = 'empty-star';
    if (from100 < from75) {
      starPerc = 'full-star';
    } else if (from75 < from50) {
      starPerc = 'three-quarters-star';
    } else if (from50 < from25) {
      starPerc = 'half-star';
    } else if (from25 < starDec) {
      starPerc = 'quarter-star';
    }
    return (
      <div className="average-star-rating">
        {_.map(Array(starFloor), (elem, i) => (
          <span className="star fa fa-star full-star" key={i} />
        ))}

        <span className={`star fa fa-star ${starPerc}`} />

        {_.map(Array(5 - (starFloor + 1)), (elem, i) => (
          <span className="star fa fa-star" key={starFloor + 1 + i} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    axios.get('/reviewdata', { params: { product_id: currentItem.id || 40344 } })
      .then((data) => {
        const count = parseInt(data.data.recommended.false, 10)
        + parseInt(data.data.recommended.true, 10);
        let allRatings = 0;
        _.each(data.data.ratings, (rating, i) => {
          allRatings += rating * i;
        });
        setMetaData(data.data);
        setAverageRating(Math.round((allRatings / count) * 10) / 10);
        setAverageStarRating(calculateStarRating(Math.round((allRatings / count) * 10) / 10));
      })
      .catch((err) => { console.log(err); });

    axios.get('/reviews', {
      params: {
        product_id: currentItem.id || 40344,
        sort: 'relevance',
        count: 999999,
      },
    }).then((results) => {
      setAllReviews(results.data);
      setReviews(results.data.results.slice(0, 2));
      setReviewCount(results.data.results.length);
    }, [currentItem]);
  }, [currentItem]);

  const scrollToReviews = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (<div>Loading</div>);
  }

  return (
    <div>
      <div className="page-top">
        <span className="title-text">Lucky & Charm</span>
      </div>
      <div id="merchandise-directory">New Arrivals</div>
      <Product
        currentItem={currentItem}
        scrollToReviews={scrollToReviews}
        averageRating={averageRating}
        reviewCount={reviewCount}
        averageStarRating={averageStarRating}
      />
      <Related
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        getStars={calculateStarRating}
      />
      <div ref={ref}>
        <Reviews
          currentItem={currentItem}
          data={metaData}
          count={reviewCount}
          averageRating={averageRating}
          allReviews={allReviews}
          reviews={reviews}
          setAllReviews={setAllReviews}
          setReviews={setReviews}
          averageStarRating={averageStarRating}
        />
      </div>
    </div>
  );
};

export default App;
