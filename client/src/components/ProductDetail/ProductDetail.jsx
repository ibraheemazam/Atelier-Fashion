import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductOverview from './ProductOverview/ProductOverview';
import StyleSelector from './StyleSelector/StyleSelector';
import ImageGallery from './ImageGallery/ImageGallery';
import AddToCart from './AddToCart/AddToCart';
import { useGlobalContext } from '../../contexts/GlobalStore';

function ProductDetail() {
  const {
    productID, setProductID, setProductInfo, productInfo,
  } = useGlobalContext();
  // Works when ready to hook up API with URL
  // setProductID(window.location.pathname || 40348); // think should be in useEffect?
  useEffect(() => {
    function getProductInfo() {
      axios
        .get('/products', { params: { ID: productID } })
        .then((productResult) => { setProductInfo(productResult.data); })
        .catch((err) => { console.log('error getting product information', err); });
    }
    getProductInfo();
    //   .catch(console.log('error getting product info'), console.error);
  }, [productID, setProductInfo]);
  // add setProductID above when implemented

  return (
    <div>
      <div>
        <ColumnParent>
          <Column1>
            <ImageGallery />
          </Column1>
          <Column2>
            <ProductOverview />
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
  margin: 10px;
  padding: 2px;
  text-align: left;
  width: 40%;
  flex: 1;
`;

const Column2 = styled.div`
  padding: 2px;
  text-align: left;
  width: 40%;
  flex: 1;
  margin-right: 20px;
`;
