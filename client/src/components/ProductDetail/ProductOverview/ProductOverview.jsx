import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
//import styled from 'styled-components';
import axios from 'axios';

import ProductDetail from '../ProductDetail.jsx';
import StyleSelector from '../StyleSelector/StyleSelector.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';
import getAvailableSizes from '../AddToCart/selectSize.jsx';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function ProductOverview() {

  // would put this in general context
  const {
    productID, setProductID
  } = useGlobalContext();

  const [productData, setProductData] = useState({});

  useEffect(() => {
    const productId = window.location.pathname;
    console.log(productId);
    setProductID(productId);

    axios
      .get('/products', { params: { ID: `${productID}` } })
      .then((results) => { setProductData(results.data); })
      // .then using request url (maybe?) to setProductID
      // .then((result) => {setData(result.data)}
      // alert client when error
      .catch((err) => { console.log(err); });
  }, []);
  return (
    <div>
      {/* <StarRating />
      <ProductCategory /> */}
    </div>
  );
}

export default ProductOverview;
