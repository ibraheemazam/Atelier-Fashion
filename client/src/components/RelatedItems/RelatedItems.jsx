import React from 'react';
import { useGlobalContext } from '../../contexts/GlobalStore';
import CardsList from './CardsList.jsx';

function RelatedItems() {
  const {
    productID,
  } = useGlobalContext();
  return (
    <div>
      ADD RELATED ITEMS COMPONENTS HERE
      <CardsList productID={productID} />
    </div>
  );
}

export default RelatedItems;
