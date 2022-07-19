import React, { useState, useEffect } from 'react';
// import ProductDetail from '../ProductDetail';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function reducer

function SelectSize({ sku, stock }) {
  const {
    productInfo, setProductInfo, selectedStyle,
  } = useGlobalContext();

  const [selectedSize, setSelectedSize] = useState('Select Size');
  const [selectedQuantity, setSelectedQuantity] = useState('-');

  const [state, dispatch] = useReducer(reducer, initialState);

  return(

    <>
      <option key={sku} onSelect={(e, key) => dispatch({type: 'selectSize', sku: key, quantity; quantity})}>{stock.size}</option>
    </>
  )

  const
  // const [skus, setSkus] = useState([]);

  const initialState = {style: () => selectedStyle.style_id, stockObj = () => selectedStyle.skus, stockSum = (stockObj) => ( return function(obj) {const count = 0; for (var key in obj) { count =+ obj[key].quantity; } return count)}(stockObj));
    selectSizeDisplay: 'Select Size', quantityDisplay: '-', sizeSelected: false, quantityDropdown: disabled, selectedSku: null, selectedQuantity: null, cart: {style: selectedStyle.style_id, sku: null, quantity: null styleDropdownCollapsed: true; quantityDropdownCollapsed: true}}

  function reducer(state, action) {
    switch (action.type) {
      case "selectSize":
        return { ...prevState, selectSizeDisplay: payload.size, quantityDisplay: 1, sizeSelected: true, quantityDropdown: enabled, selectedSku: payload,}
        return state.map((stock) => {
          if (stock.sku === action.sku) {
            if (stock.quantity === 1) {
              return { ...stock, quantity}
            }
            return { ...stock, quantity: (prevQuantity => prevQuantity - 1 };
          } else {
            return stock;
          }
          return {...}
        }
    }
  }

  const function sellSize(e, value) {
    e.preventDefault();
  }
    // could just map all the skus objects and return an option element if quantity > 0

    // skus.map((value, key) => (
    //   <option key={key}>{key.</option>
    // ))


     //  <option key={sku} size={skus[sku].size} quantity={skus[sku].quantity}>{skus[sku].size}</option>

    // console.log('allSkus from getAvailableSize: ', allSkus);
    // let sizeAvailable = false;
    // return allSkus.map((sku, index) => (
    //   sku.quantity > 0
    //   && <option onSelect={(e) => sellSize(e, index)}>{sku.size}</option>
    // ));


  }
  const initialStock = [];
  console.log(initialStock);

  useEffect(() => {
    if (selectedStyle.skus) {
      const skus = selectedStyle.skus;
      const allSkus = Object.keys(skus);
      const sortedSkus = allSkus.sort((a, b) => a - b);
      sortedSkus.forEach((sku) => {
        skus[sku]['sku'] = sku;
        initialStock.push(skus[sku]);
      });
    }
     // && getAvailableSizes(selectedStyle);
    // setSkus(() => selectedStyle.skus);
  }, [selectedStyle]);

//     let noSizesAvailable = true;

//     for (let i = 0; i < sizes.length; i++) {
//       if (sizes[i].quantity > 0) {
//         noSizesAvailable = false;
//       }
//     }
//     if (noSizesAvailable) {
//       // disableSelectSize();
//     }
//     return sizes;
//   }

//   // .then((stylesResult) => getAvailableSizes(stylesResult.results))
//   //       .catch((err) => { console.log('error getting available sizes', err) })

//   const availableSizes = getAvailableSizes(productStyles);
//   console.log(getAvailableSizes(productStyles));

  return (
    <select>
      <option>{selectedSize}</option>
      {selectedStyle.skus
      && getAvailableSizes(selectedStyle)}

      {/* //  {!sizeAvailable && <}
      // <option>{selectedSize}</option>

      // {!sizeAvailable && <} */}
      {/* <option>{skus['1394895'].size}</option> */}
      {/* {availableSizes.map((size) => <option>{size}</option>)} */}
    </select>
  );
}


function makeDropDowns(availableSizes) {
  // array is required PropTypes
    // and validate property in object in array


  return(
    {availableSizes.map((availableSize) => (
      <option key={availableSize.sku} size={availableSize.size} quantity={availableSize.quantity} onClick={() => dispatch({type: 'selectSize'})}>{availableSize.size}</option>
    ))}



  )

}

export default SelectSize;

//       "skus": {
//                 "37": {
//                       "quantity": 8,
//                       "size": "XS"
//                 },
//                 "38": {
//                       "quantity": 16,
//                       "size": "S"
//                 },
//                 "39": {
//                       "quantity": 17,
//                       "size": "M"
//                 },
//           //...
//
