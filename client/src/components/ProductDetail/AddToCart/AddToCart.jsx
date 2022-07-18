import React, { useState } from 'react';

import SelectSize from './SelectSize';
// import selectQuantity from './selectQuantity.jsx';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddToCart() {
  return (
    <div>
      <div>
        <SelectSize />
        {/* <selectQuantity></selectQuantity> */}
      </div>
      <button type="submit">Add to Cart</button>
    </div>
  );
}

export default AddToCart;
