import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './Info.jsx';
import Gallery from './Gallery.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';

const Product = (props) => {
//  Example data to use for now
  // const [isLoading, setIsLoading] = useState(true);
  const [productStyles, setProductStyles] = useState([]);
  const product = {
    "id": 40344,
    "campus": "hr-rfp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]
  };

  useEffect(() => {
    axios.get('/productstyles', { params: { id: '40344' } })
      .then((response) => {
        console.log(response.data.results);
        setProductStyles(response.data.results);
      });
  }, []);

  return (
    <div id="AllPO">
      <div id="PO">
        <div id="imageGallery">
          <Gallery product={product} />
        </div>
        <div id="sideInfo">
          <Info product={product} />
          <StyleSelector productStyles={productStyles} />
          <Cart product={product} />
        </div>
      </div>
      <AdditionalInfo product={product} />
    </div>
  );
};

export default Product;
