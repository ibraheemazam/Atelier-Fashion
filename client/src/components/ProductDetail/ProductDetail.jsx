import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductOverview from './ProductOverview/ProductOverview';
import StyleSelector from './StyleSelector/StyleSelector';
import ImageGallery from './ImageGallery/ImageGallery';
import AddToCart from './AddToCart/AddToCart';
import { useGlobalContext } from '../../contexts/GlobalStore';

function ProductDetail() {

  const { productID, setProductID, productInfo, setProductInfo,
    productStyles, setProductStyles } = useGlobalContext();
  setProductID(window.location.pathname);

  useEffect(() => {

    function getStyles() {
      axios
        .get('/products/styles', { params: { ID: `${productID}` } })
        .then((stylesResult) => { setProductStyles(stylesResult.data); })
        .catch((err) => { console.log('error getting product styles', err); });
    }

    function getProductData() {
      axios
        .get('/products', { params: { ID: `${productID}` } })
        .then((productResult) => { setProductInfo(productResult.data); })
        .catch((err) => { console.log('error getting product information', err); });
    }

    getStyles();
    getProductData();
  }, [productID, setProductInfo, setProductStyles]);

  return (
    <div>
      <div>
        <ImageGallery />
        <ProductOverview />
        <StyleSelector />
        <AddToCart />
      </div>
    </div>
  );
}

export default ProductDetail;
