import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductOverview from './ProductOverview/ProductOverview.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import getAvailableSizes from './AddToCart/selectSize.jsx';
import selectSize from './AddToCart/selectSize.jsx';
import selectQuantity from './AddToCart/selectQuantity.jsx'
import { useGlobalContext } from '../../contexts/GlobalStore';

function ProductDetail() {

  const {
    productID, setProductId
  } = useGlobalContext();


  const productId = window.location.pathname;
  console.log(productId);
  setProductID(productId); // need help setting parent state

  setProductId(window.location.pathname);

  const [stylesData, setStylesData] = useState(defaultStyle);

  useEffect(() => {

    function getStyles() {
      axios
        .get(`http:localhost:3000/products/${productID}/styles`)
        .then((stylesResult) => getAvailableSizes(stylesResult))
        .catch((err) => { console.log('error getting available sizes', err) })
    };
    // function getProductData() {
    //   axios
    //     .get(`http:localhost:3000/products/${productID}/styles`)
    //     .then((stylesResult) => getAvailableSizes(stylesResult))
    //     .catch((err) => { console.log('error getting available sizes', err) })
    // };
    getStyles();
  }, []);

  return (
    <div>
      <div>
        <ImageGallery />
        <ProductOverview />
        <StyleSelector styles={styleData}/>
        <AddToCart />
      </div>
    </div>
  );
}

export default ProductDetail;
