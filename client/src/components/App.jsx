import React, {useState, useEffect} from 'react';
import Product from './po_components/Product.jsx';
import RelatedItems from './ri_components/RelatedItems.jsx';
import Reviews.jsx from './rr_components/Reviews.jsx';


//I set up three different folders for each widget: product overview (po), related items(ri) and ratings and reviews (rr). Each contains a main div, which will be a child to App. you guys can rename the components and folder if you guys want.


const App = (props) => {

  return (
    <div>
      <Product />
      <RelatedItems />
      <Reviews />
    </div>
  )
}