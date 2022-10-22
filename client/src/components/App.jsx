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
  const ref = useRef(null);

  useEffect(() => {
    axios.get('product/?id=40344')
      .then((results) => {
        // console.log('result from getProduct is ', results);
        setCurrentItem(results.data);
        setIsLoading(false);
      })
      .catch((err) => { console.log(err); });
  }, []);

  useEffect(() => {
    axios.get('/reviewdata', { params: { product_id: currentItem.id } })
      .then((data) => {
        const count = parseInt(data.data.recommended.false, 10) + parseInt(data.data.recommended.true, 10);
        let allRatings = 0;
        _.each(data.data.ratings, (rating, i) => {
          allRatings += rating * i;
        });
        setMetaData(data.data);
        setReviewCount(count);
        setAverageRating(Math.round((allRatings / count) * 10) / 10);
      })

  }, [currentItem]);

  const scrollToReviews = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  if (isLoading) {
    return (<div>Loading</div>);
  }

  return (
    <div>
      <div className="page-top">
        <span className="title-text">Lucky & Charm</span>
      </div>
      <div id="merchandise-directory">New Arrivals</div>
      <Product currentItem={currentItem} scrollToReviews={scrollToReviews} averageRating={averageRating} reviewCount={reviewCount}/>
      <Related currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <div ref={ref}>
        <Reviews currentItem={currentItem} data={metaData} count={reviewCount} averageRating={averageRating} />
      </div>
    </div>
  );
};

export default App;
