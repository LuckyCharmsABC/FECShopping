import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './Info.jsx';
import Gallery from './Gallery.jsx';
import ExpandedGallery from './ExpandedGallery.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';
// import exampleData from './exampleStyles.js';

const Product = ({
  currentItem, scrollToReviews, averageRating, reviewCount, averageStarRating,
}) => {
  console.log('average rating passed in product is ', averageRating);
  const [isLoading, setIsLoading] = useState(true);
  const [productStyles, setProductStyles] = useState({});
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [maxQuant, setMaxQuant] = useState(-1);
  const [expandedView, setExpandedView] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState({ sku_id: '', count: 1 });
  const product = currentItem;
  const changeSelectedImgInx = (value) => {
    setSelectedImageIndex(value);
  };
  const determineImgInd = (style) => {
    if (style.photos[selectedImageIndex]) {
      return;
    }
    changeSelectedImgInx(0);
  };
  useEffect(() => {
    axios.get('/productstyles', { params: { id: product.id } })
      .then((response) => {
        // console.log(response.data.results);
        setProductStyles(response.data.results);
        setSelectedStyle(response.data.results[0]);
        setIsLoading(false);
        setMaxQuant(-1);
        changeSelectedImgInx(0);
        setSelectedCombo({ sku_id: '', count: 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentItem]);

  const changeMaxQuant = (value) => {
    setMaxQuant(value);
  };

  const selectStyle = (style) => {
    setSelectedStyle(style);
    changeMaxQuant(-1);
    determineImgInd(style);
  };

  if (isLoading) {
    return (<div>Loading</div>);
  }

  const changeView = (value) => {
    setExpandedView(value);
  };

  const renderPO = (expanded) => {
    if (expanded) {
      return (
        <div id="AllPO">
          <ExpandedGallery
            selectedStyle={selectedStyle}
            selectedImageIndex={selectedImageIndex}
            changeSelectedImgInx={setSelectedImageIndex}
            changeView={changeView}
          />
        </div>
      );
    }
    return (
      <div id="AllPO">
        <div id="PO">
          <Gallery
            selectedStyle={selectedStyle}
            selectedImageIndex={selectedImageIndex}
            changeSelectedImgInx={setSelectedImageIndex}
            changeView={changeView}
          />
          <div id="sideInfo">
            <Info
              product={product}
              selectedStyle={selectedStyle}
              scrollToReviews={scrollToReviews}
              averageRating={averageRating}
              reviewCount={reviewCount}
              averageStarRating={averageStarRating}
            />
            <span className="divider" />
            <StyleSelector
              productStyles={productStyles}
              selectStyle={selectStyle}
              selectedStyle={selectedStyle}
              setSelectedCombo={setSelectedCombo}
            />
            <Cart
              selectedStyle={selectedStyle}
              maxQuant={maxQuant}
              changeMaxQuant={changeMaxQuant}
              selectedCombo={selectedCombo}
              setSelectedCombo={setSelectedCombo}
            />
          </div>
        </div>
        <AdditionalInfo product={product} />
      </div>
    );
  };

  return (
    <div>
      { renderPO(expandedView) }
    </div>
  );
};

export default Product;
