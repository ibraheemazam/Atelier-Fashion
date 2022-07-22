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
    <div
      style={{
        'marginTop': '4%',
        'marginRight': '2%',
        'marginLeft': '2%',
      }}
      id="product-details"
    >
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
`;

const Column1 = styled.div`
  display: flex;
  margin: 0%;
  width: 50%;
  flex: 1;
  justify-content: center;
`;

const Column2 = styled.div`
  padding: 2% 2%;
  text-align: left;
  width: 50%;
  flex: 1;
`;
