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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [maxQuant, setMaxQuant] = useState(-1);
  const product = currentItem;
  const changeSelectedImgInx = (value) => {
    setSelectedImageIndex(value);
  };
  useEffect(() => {
    axios.get('/productstyles', { params: { id: product.id } })
      .then((response) => {
        console.log(response.data.results);
        setProductStyles(response.data.results);
        setSelectedStyle(response.data.results[0]);
        setIsLoading(false);
        setMaxQuant(-1);
        changeSelectedImgInx(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentItem]);

  const changeMaxQuant = (value) => {
    setMaxQuant(value);
  };

  const selectStyle = (styleId) => {
    setSelectedStyle(styleId);
    changeMaxQuant(-1);
    changeSelectedImgInx(0);
  };

  if (isLoading) {
    return (<div>Loading</div>);
  }
  return (
    <div id="AllPO">
      <div id="PO">
        <Gallery
          selectedStyle={selectedStyle}
          selectedImageIndex={selectedImageIndex}
          changeSelectedImgInx={setSelectedImageIndex}
        />
        <div id="sideInfo">
          <Info product={product} selectedStyle={selectedStyle} scrollToReviews={scrollToReviews} />
          <StyleSelector
            productStyles={productStyles}
            selectStyle={selectStyle}
            selectedStyle={selectedStyle}
          />
          <Cart selectedStyle={selectedStyle} maxQuant={maxQuant} changeMaxQuant={changeMaxQuant} />
        </div>
      </div>
      <AdditionalInfo product={product} />
    </div>
  );
};

export default Product;
