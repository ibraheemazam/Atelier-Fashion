import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
// import SelectSize from './SelectSize';
import StyleSelector from '../StyleSelector/StyleSelector';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';




function AddToCart() {
  const { selectedStyle } = useGlobalContext();

//   const initialState = {
//     style: () => selectedStyle.style_id,
//     stock: () => selectedStyle.skus,
//     stockCount: (stock) => getStockCount(stock),
//     selectedSku: null,
//     selectedSize: null,
//     quantity: null,
//     sizeDisplay: 'Select Size',
//     quantityDisplay: '-',
//     sizeSelected: false,
//     quantityDropdownDisabled: true,
//     selectedSku: null,
//     selectedQuantity: null,
//     cart: {
//       style: selectedStyle.style_id,
//       size: null,
//       quantity: null
//     },
//     styleDropdownCollapsed: true,
//     quantityDropdownCollapsed: true,
//   };

// const reducer = function (state, action) {
//   switch (action.type) {
//     case 'selectSize':
//       return {
//         ...state,
//         selectSizeDisplay: payload.size,
//         quantityDisplay: 1,
//         sizeSelected: true,
//         quantityDropdown: enabled,
//         stock: payload,
//         selectedSku: key,
//       };
//     case 'selectQuantity':
//       return {
//         ...state,
//         selectQuantityDisplay: payload.quantity,
//       };
//     case 'addToCart':
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// };

  // const [state, dispatch] = useReducer(reducer, initialState);

  // // const [stock, setStock] = useState({});
  // const [skus, setSkus] = useState({});

  const initialStock = [];

  console.log('selectedStyle: ', selectedStyle);
  console.log('skus: ', selectedStyle.skus);

  if (selectedStyle.skus) {
    const { skus } = selectedStyle;
    const allSkus = Object.keys(skus);
    const sortedSkus = allSkus.sort((a, b) => a - b);
    sortedSkus.forEach((sku) => {
      skus[sku].sku = sku;
      initialStock.push(skus[sku]);
    });
  }

  console.log('initialStock: ', initialStock);


  // useEffect(() => {
  //   function getSkus() {
  //     const test = (selectedStyle.skus == true);
  //     console.log(test);
  //     if (typeof skus === "object") {
  //       console.log(skus);
  //       const { skus } = selectedStyle;
  //       const allSkus = Object.keys(skus);
  //       const sortedSkus = allSkus.sort((a, b) => a - b);
  //       sortedSkus.forEach((sku) => {
  //         skus[sku].sku = sku;
  //         initialStock.push(skus[sku]);
  //       // if (index) {
  //       // setMain(() => photos[index]);
  //       // } else {
  //       //setMain(() => photos[place]);
  //       //setPhotosLength(() => photos.length);
  //       // }
  //       });
  //     }
  //   };

  //   setSkus(() => selectedStyle.skus);
  //   getSkus();

  //   // else {
  //   //   return (<></>)
  //   // }
  // }, [selectedStyle, setSkus, skus]);

  // function getStock() {
  //   if (selectedStyle.skus) {
  //     const { skus } = selectedStyle;
  //     const allSkus = Object.keys(skus);
  //     const sortedSkus = allSkus.sort((a, b) => a - b);
  //     sortedSkus.forEach((sku) => {
  //       skus[sku].sku = sku;
  //       initialStock.push(skus[sku]);
  //     });
  //   }
  //   console.log('initialStock', initialStock);
  //   setStock(initialStock);
  // }
  // getStock();

  // useEffect(() => {
  //   getStock();
  // }


  // function getStockCount() {
  //   const count = 0;
  //   for (const key in obj) {
  //     count = +obj[key].quantity;
  //   }
  //   return count;
  // }




  //           return state.map((stock) => {
  //             if (stock.sku === action.sku) {
  //               if (stock.quantity === 1) {
  //                 return { ...stock, quantity };
  //               }
  //               return { ...prevState, quantity: ((prevQuantity) => prevQuantity - 1) };
  //             }
  //             return stock;

  //             return { ...preState };
  //           });
  //       }
  //   }
  // };
  // !stock
  // ? return 'Pending...';
  // :

  return (
    <div>
      <div>
       </div>
       <Cart>
         <div>
           <div>
            <div className="container"> */}
              {initialState.selectedStyle ?}
                  <select>
                    Select Size
                    {initialStock.map((productStock) => (
                      <option
                        key={productStock.sku}
                        stock={productStock}
                        size={productStock.size}
                        quantity={productStock.quantity}
                        // state={state}
                        // dispatch={dispatch}
                       />
                    ))}
                  </select>
                  )
                 (
                  <div>No Size Selected</div>
                  )
                }
              </div>
                : (
                  <select>
                    {state.stock.size}
                    {initialStock.map((productStock) => (
                      <Size
                        key={productStock.key}
                        stock={productStock}
                        state={state}
                        dispatch={dispatch}
                      />
                    ))}
                  </select>
                )}
            </SelectSizeContainer>
            <Quantity
              key={state.stock.key}
              stock={state.stock}
              state={state}
              dispatch={dispatch}
              stockCount={state.stockCount}
              quantityDropdownDisabled={state.quantityDropdownDisabled}
            />
          </div>
        </div>
        <div>
          <div>
            <button type="submit">Add to Cart</button>
          </div>
          <div />
        </div>
      </Cart>
      <div>
      </div>
    </div>
  );
}

// function Size({
//   stock, key, state, dispatch, quantity,
// }) {
//   Size.propTypes = {
//     stock: PropTypes.shape({
//       size: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//       sku: PropTypes.number.isRequired,
//     }).isRequired,
//     // key: PropTypes.number.isRequired,
//   };
//   return (
//     <option key={stock.sku} stock={stock} size={stock.size} quantity={stock.quantity} onClick={() => dispatch({ type: 'selectSize', payload: stock })}>{stock.size}</option>
//   );
// }

// // console.log('stock.sku', stock.sku);

// function Quantity({
//   key, stock, state, dispatch, stockCount, quantityDropdownDisabled,
// }) {
//   Quantity.propTypes = {
//     stock: PropTypes.oneOfType([
//       PropTypes.func,
//       PropTypes.shape({
//         size: PropTypes.string.isRequired,
//         quantity: PropTypes.number.isRequired,
//         sku: PropTypes.number.isRequired,
//       }).isRequired,
//     ]).isRequired,
//     // key: PropTypes.number.isRequired,
//     state: PropTypes.shape({
//       stockCount: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.func,
//       ]).isRequired,
//       quantityDropdownDisabled: PropTypes.bool.isRequired,
//       stock: PropTypes.oneOfType([
//         PropTypes.func,
//         PropTypes.objectOf(PropTypes.shape({
//           size: PropTypes.string.isRequired,
//           quantity: PropTypes.number.isRequired,
//           sku: PropTypes.number.isRequired,
//         }).isRequired),
//       ]).isRequired,
//     }).isRequired,
//     dispatch: PropTypes.func.isRequired,
//     // optionalUnion: PropTypes.oneOfType([
//     //   PropTypes.string,
//     //   PropTypes.number,
//     //   PropTypes.instanceOf(Message)
//     // ]),
//   };
//   function soldOut() {
//     return <select onClick={() => dispatch({ type: soldOut })}>Sold Out</select>;
//   }
//   return (
//     <div>
//       {stockCount === 0
//       && soldOut()}
//       {quantityDropdownDisabled
//         ? <select>-</select>
//         : (() => (
//           state.stock[selectedSku].quantity < 15
//             ? [...Array(state.stock[selectedSku].quantity)].map((e, i) => <QuantityOption key={i}>i + 1</QuantityOption>)
//             : [...Array(15)].map((e, i) => <QuantityOption key={i}>i + 1</QuantityOption>)))}
//           ))
//       <div>
        {/* <option
          key={state.stock.sku}
          stock={stock}
          size={stock.size}
          quantity={state.stock.quantity}
          onClick={() => dispatch({ type: 'selectQuantity', payload: state.stock })}
        >
          {state.stock.quantity}
        </option> */}
//       </div>
//     </div>
//   );
// }

const Cart = styled.div`
`;
const SelectSizeContainer = styled.div`
`;

// export default AddToCart;

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
// }

export default AddToCart;
