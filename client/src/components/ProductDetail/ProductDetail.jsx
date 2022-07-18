import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductOverview from './ProductOverview/ProductOverview';
import StyleSelector from './StyleSelector/StyleSelector';
import ImageGallery from './ImageGallery/ImageGallery';
import AddToCart from './AddToCart/AddToCart';
import { useGlobalContext } from '../../contexts/GlobalStore';

function ProductDetail({ href }) {
  const {
    productID, setProductInfo, productInfo, setSelectedStyle, setStyles,
  } = useGlobalContext();
  // Works when ready to hook up API with URL
  // setProductID(window.location.pathname || 40348); // think should be in useEffect?
  useEffect(() => {
    // function getProductInfo() {
    //   axios
    //     .get('/products', { params: { ID: productID } })
    //     .then((productResult) => { setProductInfo(productResult.data); })
    //     .catch((err) => { console.log('error getting product information', err); });
    // }
    function getStyles() {
      axios
        .get('/styles', { params: { product_id: productID } })
        .then((stylesResult) => {
          setSelectedStyle(stylesResult.data.results[0]);
          setStyles(stylesResult.data.results);
        })
        // I'm catching two errors in one here, not great
        .catch((err) => console.log('error getting product styles', err));
    }
    // getProductInfo();
    getStyles();
    //   .catch(console.log('error getting product info'), console.error);
  }, [productID, setStyles, setSelectedStyle]);
  // add setProductID above when implemented

  return (
    <div id="product-details">
      <div>
        <ColumnParent>
          <Column1>
            <ImageGallery />
          </Column1>
          <Column2>
            <ProductOverview productInfo={productInfo} href={href} />
            <StyleSelector />
            <AddToCart />
          </Column2>
        </ColumnParent>
      </div>
    </div>
  );
}

export default ProductDetail;

const ColumnParent = styled.div`
  display: flex;
  width: 50%
  border: 1px
  padding: 1rem 1rem;
`;

const Column1 = styled.div`
  margin: 3%;
  padding: 20% 2%;
  text-align: center;
  width: 40%;
  flex: 1;
`;

const Column2 = styled.div`
  padding: 2px;
  text-align: left;
  width: 40%;
  flex: 1;
  margin-left: 20px;
`;
