import React from 'react';
import styled from 'styled-components';

import ProductOverview from './ProductOverview/ProductOverview';
import StyleSelector from './StyleSelector/StyleSelector';
import ImageGallery from './ImageGallery/ImageGallery';
import AddToCart from './AddToCart/AddToCart';

import { useGlobalContext } from '../../contexts/GlobalStore';

// Works when ready to hook up API with URL
// setProductID(window.location.pathname || 40348);

function ProductDetail() {
  const { productID, productInfo, setProductID, setProductInfo, styles, selectedStyle, setSelectedStyle } = useGlobalContext();
  return (
    <div id="product-details">
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
  padding: .5% 0;
`;

const Column1 = styled.div`
  display: flex;
  margin: 0%;
  padding: .5% .5%
  text-align: center;
  width: 40%;
  flex: 1;
  justify-content: center;
`;

const Column2 = styled.div`
  padding: 2% 2%;
  text-align: left;
  width: 40%;
  flex: 1;
  margin-left: 20px;
`;
