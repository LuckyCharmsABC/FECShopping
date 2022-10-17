import React from 'react';
import Info from './Info.jsx'
import Gallery from './Gallery.jsx'
import AdditionalInfo from './AdditionalInfo.jsx'

const Product = (props) => {

  //Example data to use for now
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
  }

  return (
    <div id="AllPO">
      <div id="PO">
        <div id="imageGallery">
          <Gallery product={product}/>
        </div>
        <div id="sideInfo">
          <Info product={product}/>
        </div>
      </div>
      <AdditionalInfo product={product}/>
    </div>
  )
}

export default Product;