import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SizeDropdown from './SizeDropdown';
import QuantityDropdown from './QuantityDropdown';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddToCart() {
  const { selectedStyle } = useGlobalContext();

  const [sizeSelected, setSizeSelected] = useState(false);

  // set state to be formatted like prototype
  // or maybe not because don't know how long the initial stock array will be and not necessary to set formatted state?
  // esp if add proptypes later
  // const [stock, setStock] = useState([]);
  // const [stock, updateStock] = useState([...{..}, {..},...]);

  const [currentSku, setCurrentSku] = useState({});

  // const initialState = {
  //   //     style: () => selectedStyle.style_id,
  //   //     stock: () => selectedStyle.skus,
  //   stockCount: (() => getStockCount(stock)),
  //   selectedSku: 1394805,
  //   selectedSize: null,
  //   quantity: null,
  //   sizedisplay: 'Select Size',
  //   quantitydisplay: '-',
  //   sizeselected: false,
  //   quantitydropdowndisabled: true,
  //   // selectedSku: null,
  //   //     selectedQuantity: null,
  //   cart: {
  //     style: selectedStyle.style_id,
  //     size: null,
  //     quantity: null,
  //   },
  //   //     styleDropdownCollapsed: true,
  //   //     quantityDropdownCollapsed: true,
  // };

  // const reducer = function (state, action) {
  //   switch (action.type) {
  //     case 'selectSize':
  //       return {
  //         ...state,
  //         selectSizeDisplay: payload.size,
  //         quantitydisplay: 1,
  //         sizeSelected: true,
  //         quantitydropdowndisabled: false,
  //         stock: payload,
  //         selectedSku: key,
  //         quantity: payload.quantity,
  //       };
  //       //     case 'selectQuantity':
  //       //       return {
  //       //         ...state,
  //       //         selectQuantityDisplay: payload.quantity,
  //       //       };
  //       //     case 'addToCart':
  //       //       return {
  //       //         ...state,
  //       //       };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const [stock, setStock] = useState({});
  // const [currentSkus, setCurrentSkus] = useState({});

  const initialStock = [];

  // proptypes for initialStock
  // [{1394805 : {quantity: 8, size: 'XS', sku: '1394805'}}, {1394806 : {quantity: 10, size: 'S', sku: '1394806'}}, ....]

  // console.log('selectedStyle: ', selectedStyle);
  // console.log('skus: ', selectedStyle.skus);

  if (selectedStyle.skus) {
    const { skus } = selectedStyle;
    const allSkus = Object.keys(skus);
    const sortedSkus = allSkus.sort((a, b) => a - b);
    sortedSkus.forEach((sku) => {
      skus[sku].sku = sku;
      initialStock.push(skus[sku]);
    });

    // const [stock, updateStock] = useState(() => initialStock);
    // setStock(initialStock);

    // function getStockCount() {
    //   const count = 0;
    //   for (const key in obj) {
    //     count = +obj[key].quantity;
    //   }
    //   return count;
    // }
    // getStockCount();
  }
  // const [stock, updateStock] = useState(() => initialStock);
  //  setStock(() => initialStock);
  //  console.log('initialStock: ', initialStock);
  // console.log('stockState: ', stock);

  // could make a separate state for each sku (inside useEffect passed with an empty array so only runs once upon rendering) --- I think I can do this because not making the states conditionally, or so that they will be set/ created at a different time
  // but would have to make sure all the skus have finishing fetching and loading/uploading before doing so



  function handleChangeSize(value) {
    event.preventDefault();
    setCurrentSku(() => value);
  }

  function handleChangeQuantity(value) {
    event.preventDefault();
    setCurrentSku(() => value);
  }

  function handleClickAddToCart(product_id, style_id, sku, quantity) {
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
            <select defaultValue="Select Size" onChange={(e) => handleChangeSize(null, e.target.value)}>
              <option>Select Size</option>
              {initialStock.map((productStock, index) => (
                <SizeDropdown key={productStock.sku} index={index} stock={productStock}>{productStock.size}</SizeDropdown>
              ))}
            </select>
          </div>
        </SelectSizeContainer>
        <SelectQuantityContainer>
          <select onChange={(e) => handleChangeQuantity(e.target.value)}>
            <option>-</option>
            <QuantityDropdown />
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
          </select>
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

// function Quantity({
//   key, stock, state, dispatch, stockCount, quantityDropdownDisabled,
// }) {
//   Quantity.propTypes = {
//     stock: PropTypes.oneOfType([
//       PropTypes.func,
//       PropTypes.shape({
//         size: PropTypes.string.isRequired,
//         quantity: PropTypes.number.isRequired,
//         sku: PropTypes.string.isRequired,
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
//           sku: PropTypes.string.isRequired,
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
{ /* <option
          key={state.stock.sku}
          stock={stock}
          size={stock.size}
          quantity={state.stock.quantity}
          onClick={() => dispatch({ type: 'selectQuantity', payload: state.stock })}
        >
          {state.stock.quantity}
        </option> */ }
//       </div>
//     </div>
//   );
// }

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
