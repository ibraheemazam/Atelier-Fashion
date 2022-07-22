import React, { useState, useReducer, createElement, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
//import SizeDropdown from './SizeDropdown';
//import QuantityDropdown from './QuantityDropdown';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddToCart() {
  const { productID, selectedStyle, productInfo, styles } = useGlobalContext();

  //const [allSkus, setAllSkus] = useState([]);
  // const [stock, setStock] = useState([]);
  // const [sku, setSku] = useState('');
  // const [size, setSize] = useState(null);
  // const [isSizeSelected, setIsSizeSelected] = useState(false);
  // const [quantity, setQuantity] = useState(null);
  // const [availableQuantity, setAvailableQuantity] = useState(null);

  // useEffect(() => {
  //   // console.log('render');
  //   if (selectedStyle.skus) {
  //     const { skus } = selectedStyle;
  //     const skusKeys = Object.keys(skus);
  //     skusKeys.sort((a, b) => a - b);
  //     setAllSkus(() => skusKeys);
  //   }

  //   console.log('allSkus at line 104: ', allSkus);
  // }, [], [selectedStyle]);


  // const initialState = {
  //   size: '',
  //   //stock: () => selectedStyle.skus,
  //   // //  'sku': { sku } = selectedStyle.skus {() => selectedStyle.skus{sku() => selectedStyle.skus,  // do I need to destructure this to assign all values? I think so
  //   // stockCount: (() => getStockCount(initialState.stock)),
  //   // selectedSku: null,
  //   // selectedSize: {
  //   //   size: '',
  //   //   count: null,
  //   // },
  //   quantity: null,
  //   // selectSizeDisplay: 'Select Size',
  //   // selectQuantityDisplay: '-',
  //   // sizeSelected: false,
  //   // disableQuantity: true,
  //   // selectedQuantity: null,
  //   disable: true,
  //   soldOut: false,
  //   // cart: {
  //   //   product: productID,
  //   //   style: selectedStyle.style_id,
  //   //   size: '',
  //   //   quantity: null,
  //   // },
  //   // disableSizes: false,
  //   // soldOut: false,
  // };


  // const reducer = function(state, action) {
  //   switch (action.type) {
  //     case 'changeSize':
  //       return {
  //         ...state,
  //         disabled: false,
  //         size: action.payload.value,
  //         // selectSizeDisplay: payload.size,
  //         // quantitydisplay: state.,
  //         quantity: 1,
  //         sizeSelected: true,
  //         // quantitydropdowndisabled: false,
  //         // stock: payload,
  //         // selectedSku: key,
  //         // quantity: payload.quantity,
  //       };
  //     case 'selectQuantity':
  //       return {
  //         ...state,
  //         quantity: action.payload.value,
  //         //selectQuantityDisplay: payload.quantity,
  //       };
  //     // case 'addToCart':
  //     //   return {
  //     //     ...state,
  //     //   };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const [stock, setStock] = useState({});
  // const [currentSkus, setCurrentSkus] = useState({});

  // const initialStock = [];
  // // get sizes and assocaited quantity for selectedStyle so can map style dropdown only for sizes in stock
  // if (selectedStyle.skus) {
  //   const { skus } = selectedStyle;
  //   const allSkus = Object.keys(skus);
  //   const sortedSkus = allSkus.sort((a, b) => a - b);
  //   sortedSkus.forEach((sku) => {
  //     skus[sku].sku = sku;
  //     initialStock.push(skus[sku]);
  //   });
  // }

  console.log('selectedStyle from add to cart before render: ', selectedStyle);


  // setStock(() => initialStock);
  // console.log('selectedStyle: ', selectedStyle, 'stock: ', stock);

  // function everythingForQuantity() {
  //   // // function Quantity({
  //         // //   key, stock, state, dispatch, stockCount, quantityDropdownDisabled,
  //         // // }) {
  //         // //   Quantity.propTypes = {
  //         // //     stock: PropTypes.oneOfType([
  //         // //       PropTypes.func,
  //         // //       PropTypes.shape({
  //         // //         size: PropTypes.string.isRequired,
  //         // //         quantity: PropTypes.number.isRequired,
  //         // //         sku: PropTypes.string.isRequired,
  //         // //       }).isRequired,
  //         // //     ]).isRequired,
  //         // //     // key: PropTypes.number.isRequired,
  //         // //     state: PropTypes.shape({
  //         // //       stockCount: PropTypes.oneOfType([
  //         // //         PropTypes.number,
  //         // //         PropTypes.func,
  //         // //       ]).isRequired,
  //         // //       quantityDropdownDisabled: PropTypes.bool.isRequired,
  //         // //       stock: PropTypes.oneOfType([
  //         // //         PropTypes.func,
  //         // //         PropTypes.objectOf(PropTypes.shape({
  //         // //           size: PropTypes.string.isRequired,
  //         // //           quantity: PropTypes.number.isRequired,
  //         // //           sku: PropTypes.string.isRequired,
  //         // //         }).isRequired),
  //         // //       ]).isRequired,
  //         // //     }).isRequired,
  //         // //     dispatch: PropTypes.func.isRequired,
  //         // //     // optionalUnion: PropTypes.oneOfType([
  //         // //     //   PropTypes.string,
  //         // //     //   PropTypes.number,
  //         // //     //   PropTypes.instanceOf(Message)
  //         // //     // ]),
  //         //      //}
  //         // //   }
  //         // //   function soldOut() {
  //         // //     return <select onClick={() => dispatch({ type: soldOut })}>Sold Out</select>;
  //         // //   }
  //         // //   return (
  //         // //     <div>
  //         // //       {stockCount === 0
  //         // //       && soldOut()}
  //         // //       {quantityDropdownDisabled
  //         // //         ? <select>-</select>
  //         // //         : (() => (
  //         // //           state.stock[selectedSku].quantity < 15
  //         // //             ? [...Array(state.stock[selectedSku].quantity)].map((e, i) => <QuantityOption key={i}>i + 1</QuantityOption>)
  //         // //             : [...Array(15)].map((e, i) => <QuantityOption key={i}>i + 1</QuantityOption>)))}
  //         // //           ))
  //         // //       <QuantityOption>
  //         //             /* <option
  //         //             key={state.stock.sku}
  //         //             stock={stock}
  //         //             size={stock.size}
  //         //             quantity={state.stock.quantity}
  //         //             onClick={() => dispatch({ type: 'selectQuantity', payload: state.stock })}
  //         //             >
  //         //             {state.stock.quantity}
  //         //             </option> */
  //         //   //     </QuantityOption>
  //         //         // </div>
  //         //         // (
  //         // // }

  // }

  // function renderQuantityDropdown(event) {
  //   console.log(currentSku);
  //   switch (currentSku) {
  //     case (currentSku.quantity <= 15):
  //       const num = currentSku.quantity;
  //       return;
  //       { [...Array(num).keys()].map((e, i) => <QuantityDropdown key={i}>{i + 1}</QuantityDropdown>); }
  //     case (currentSku.quantity > 15):
  //       return;
  //       { [...Array(15)].map((e, i) => <QuantityDropdown key={i}>{i + 1}</QuantityDropdown>); }
  //     default:
  //   }
  // }


  function handleChangeSize(event) {
    event.preventDefault();
    // setSku(event.target.value);
    // setIsSizeSelected(true);
    // setSize(selectedStyle[event.target.value].size);
    // setQuantity(selectedStyle[event.target.value].quantity);


    // renderQuantityDropdown(currentSku);
    // useReducer({type: changeSize, payload: e});
  }

  function handleChangeQuantity(event) {
    event.preventDefault();
    // add value to cart state  -- can do this when add to cart clicked

    // setQuantity((prevQuantity) => prevQuantity - event.target.value);
  }

  function handleClickAddToCart() {
    // setQuantity((prevQuantity) => prevQuantity - event.target.value);

    const sellAmount = quantity;

    // update quantity state locally
    // there might be some errors with this array (i.e., no array, array, outside array?)
    // updateStock([...stock, { sku : { 'quantity' : (quantity => quantity - sellAmount) } } ] )
    // {({sku: {sku: sku, quantity: quantity}}))

    // update quantity in api
    // edit request

    // handle sell out of one size
    // if ()
  }

  function handleSoldOutofAllSizes() {
    // let noSizesAvailable = true;

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

  }

  return (
    <Cart>
      <span>
        <SelectSizeContainer>
          <div>
            <select
            // { (initialState.soldOut)
            //   ? 'disabled'
            //   : ''
            // }
              //onChange={(e) => dispatch({type: changeSize, payload: e})}
              >
                <option value={null}>Select Size</option>
              {selectedStyle.skus
              && (
                Object.entries(selectedStyle.skus).map(([sku, {quantity, size}]) => {
                console.log('sku from mapped sku objects: ', sku);
                //  , 'stock object from mapped stock objecs: ', stock)
                console.log('quantity from mapped sku objects: ', quantity, 'size from mapped sku objects: ', size);
                  return (quantity > 0 && <option key={sku}>{size}</option>)
                }


                // (Object.values(selectedStyle.skus)).map((sku, index) => (
                // sku.quantity > 0 && <option key={index}>{sku.size}</option>

                // <option
                //   key={sku}
                //   size={selectedStyle[sku].size}
                //   quantity={selectedStyle[sku].quantity}

                // >
                //   {selectedStyle[sku].size}

                // </option>
              ))}



            </select>
          </div>
        </SelectSizeContainer>
        <SelectQuantityContainer>
          {/* <select
        //     {isSizeSelected
        //       ? ''
        //       : 'disabled'
        // }
            onChange={(e) => dispatch({type: 'quantityChange', payload: e.target.value})}
          >
            --
            {
        state.quantity < 15
          ? (
            [...Array(state.quantity)].map((e, i) => <option key={i} value={e}>{e}</option>)
          )
          : (
            [...Array(15)].keys().map((e, i) => <option key={i}>{e}</option>)
          )
        }
          </select> */}

          {/* {!sizeSelected
        ?

        :
        <select onChange={(e) => handleChangeQuantity(e.target.value)}>1
        {renderQuantityDropdown(currentSku)}
        </select>} */}
          {/* {initialStock.map((productStock, index) => (
              <SizeDropdown
                key={productStock.sku}
                index={index}
                stock={productStock}
                size={productStock.size}
                quantity={productStock.quantity}
                />
              ))} */}
          {/* // key={initialState.selectedSku}
              // stock={initialState.skus}
                 // quantity={initialState.selectedsku.quantity}
                // state={}
                  // dispatch={dispatch}
                // stockCount={state.stockCount}
              // quantityDropdownDisabled={initialState.quantityDropdownDisabled} */}
        </SelectQuantityContainer>
      </span>
      <span>
        <AddtoBag>
          <button type="submit">Add to Cart</button>
        </AddtoBag>
        <AddStars />
      </span>
    </Cart>
  );
}

// // console.log('stock.sku', stock.sku);
//   }selectedSku: payload.sku}
//     return state.map((stock) => {
//       if (stock.sku === action.sku) {
//         if (stock.quantity === 1) {
//           return { ...stock, quantity}
//         }
//         return { ...stock, quantity: (prevQuantity => prevQuantity - 1 };
//       } else {
//         return stock;
//       }
//       return {...}
//     }
// };

const Cart = styled.div`
`;
const SelectSizeContainer = styled.div`
`;

// const SizeCoverDD = styled.option`
//   aria-label="Select size";
// `;

const SelectQuantityContainer = styled.div`
`;

// const QuantityCoverDD = styled.option`
// `;

const AddtoBag = styled.div`
`;

const AddStars = styled.div`
`;

export default AddToCart;
