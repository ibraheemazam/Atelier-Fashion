import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductOverview from './ProductOverview/ProductOverview';
import StyleSelector from './StyleSelector/StyleSelector';
import ImageGallery from './ImageGallery/ImageGallery';
import AddToCart from './AddToCart/AddToCart';
import { useGlobalContext } from '../../contexts/GlobalStore';

function ProductDetail() {

  const { productID, setProductID } = useGlobalContext();
  setProductID(window.location.pathname);

  const [stylesData, setStylesData] = useState(defaultStyle);
  const [productData, setProductData] = useState(product);

  useEffect(() => {

    function getStyles() {
      axios
        .get(`/products/styles?ID=${productID}`)
        .then((stylesResult) => { setStylesData(stylesResult.data); })
        .catch((err) => { console.log('error getting available sizes', err); });
    }

    function getProductData() {
      axios
        .get(`/products?ID=${productID}`)
        .then((result) => { setProductData(result.data); })
        .catch((err) => { console.log('error getting available sizes', err); });
    }

    getStyles();
    getProductData();
  }, [productID]);

  return (
    <div>
      <div>
        <ImageGallery />
        <ProductOverview />
        <StyleSelector/>
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductDetail;
