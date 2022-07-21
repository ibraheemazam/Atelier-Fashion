import React from 'react';
import styled from 'styled-components';

import ProductOverview from './ProductOverview/ProductOverview';
import StyleSelector from './StyleSelector/StyleSelector';
import ImageGallery from './ImageGallery/ImageGallery';
import AddToCart from './AddToCart/AddToCart';

// Works when ready to hook up API with URL
// setProductID(window.location.pathname || 40348);

function ProductDetail() {
  return (
    <div id="product-details">
      <div>
        <ColumnParent>
          <Column1>
            <ImageGallery />
          </Column1>
          <Column2>
            {/* <ProductOverview href={id} /> */}
            <StyleSelector />
            {/* <AddToCart /> */}
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
