import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './po_components/Product.jsx';
import RelatedItems from './ri_components/RelatedItems.jsx';
import Reviews from './rr_components/Reviews.jsx';

// I set up three different folders for each widget: product overview (po),
// related items(ri) and ratings and reviews (rr). Each contains a main div,
// which will be a child to App. you guys can rename the components and folder if you guys want.

const App = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get('/product', { params: { id: 40344 } })
      .then((data) => {
        setProduct(data.data);
      });
  }, []);

  return (
    <div>
      <Product />
      <RelatedItems />
      <Reviews id={product.id || 40344} />
    </div>
  );
};

export default App;
