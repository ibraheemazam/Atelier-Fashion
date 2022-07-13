import react, { useState } from 'react';

import selectSize from './selectSize.jsx';
import selectQuantity from './selectQuantity.jsx';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddToCart() {
  return (
    <div>
      <selectSize></selectSize>
      <selectQuantity></selectQuantity>
      <button>Add to Cart</button>
    </div>

  );
}

export default AddToCart;
