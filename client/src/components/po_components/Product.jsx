import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './Info.jsx';
import Gallery from './Gallery.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';
// import exampleData from './exampleStyles.js';

const Product = ({ currentItem, scrollToReviews }) => {
//  Example data to use for now
  const [isLoading, setIsLoading] = useState(true);
  const [productStyles, setProductStyles] = useState({});
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedStyleInd, setSelectedStyleInd] = useState('');
  const product = currentItem;

  useEffect(() => {
    axios.get('/productstyles', { params: { id: product.id } })
      .then((response) => {
        console.log(response.data.results);
        setProductStyles(response.data.results);
        setSelectedStyle(response.data.results[0]);
        setSelectedStyleInd(0);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentItem]);

  const selectStyle = (styleId) => {
    setSelectedStyle(styleId);
  };

  if (isLoading) {
    return (<div>Loading</div>);
  }
  return (
    <div id="AllPO">
      <div id="PO">
        <Gallery selectedStyle={selectedStyle} />
        <div id="sideInfo">
          <Info product={product} selectedStyle={selectedStyle} scrollToReviews={scrollToReviews} />
          <StyleSelector
            productStyles={productStyles}
            selectStyle={selectStyle}
            selectedStyle={selectedStyle}
          />
          <Cart selectedStyle={selectedStyle} styleIndex={selectedStyleInd} />
        </div>
      </div>
      <AdditionalInfo product={product} />
    </div>
  );
};

export default Product;
