import React, {useState, useEffect} from 'react';
import Product from './po_components/Product.jsx';
import Related from './ri_components/RelatedItemsAndOutfits.jsx';
import Reviews from './rr_components/Reviews.jsx';


//I set up three different folders for each widget: product overview (po), related items(ri) and ratings and reviews (rr). Each contains a main div, which will be a child to App. you guys can rename the components and folder if you guys want.


const App = (props) => {

  return (
    <div>
      <h1>Hello</h1>
      <Product />
      <Related />
      <Reviews />
    </div>
  )
}

export default App;