import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
//import styled from 'styled-components';
import axios from 'axios';

import ProductDetail from '../ProductDetail.jsx';
import ProductOverview from '../ProductOverview/ProductOverview.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';
import getAvailableSizes from '../AddToCart/selectSize.jsx';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function StyleSelector() {

  const { productID, setProductID } = useGlobalContext();

  const productId = window.location.pathname;
  console.log(productId);
  setProductID(productId);

  const [stylesData, setStylesData] = useState({});

  useEffect(() => {

    function getStyles() {
      axios
        .get('http:localhost:3000/products/styles', { params: { ID: `${productID}` } })
        .then((stylesResult) => getAvailableSizes(stylesResult))
        .catch((err) => { console.log('error getting available sizes', err) })
    };
    getStyles();
  }, []);

  return(
    <div>Style Selector Here</div>
  );
};

export default StyleSelector;