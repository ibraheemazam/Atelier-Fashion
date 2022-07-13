import React from 'react';
import { useGlobalContext } from '../../contexts/GlobalStore';
import CardsList from './RelatedList/CardsList.jsx';
import Outfit from './OutfitList/Outfit.jsx';

function RelatedItems() {
  const {
    productID, setProductID,
  } = useGlobalContext();
  return (
    <div>
      ADD RELATED ITEMS COMPONENTS HERE
      <CardsList productID={productID} setProductID={setProductID} />
      <Outfit />
    </div>
  );
}

export default RelatedItems;
