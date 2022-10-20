import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './po_components/Product.jsx';
import Related from './ri_components/RelatedItemsAndOutfits.jsx';
import Reviews from './rr_components/Reviews.jsx';

// I set up three different folders for each widget: product overview (po),
// related items(ri) and ratings and reviews (rr). Each contains a main div,
// which will be a child to App. you guys can rename the components and folder if you guys want.

const App = () => {
  const [currentItem, setCurrentItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('product/?id=40344')
      .then((results) => {
        console.log('result from getProduct is ', results);
        setCurrentItem(results.data);
        setIsLoading(false);
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (isLoading) {
    return (<div>Loading</div>);
  }

  return (
    <div>
      <h1>Hello</h1>
      <Product currentItem={currentItem} />
      <Related currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <Reviews currentItem={currentItem} />
    </div>
  );
};

export default App;
