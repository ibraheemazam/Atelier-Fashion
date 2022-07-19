import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
// import SelectSize from './SelectSize';
import StyleSelector from '../StyleSelector/StyleSelector';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';


function SizeDropdown ({ InitialStock, State, Dispatch }) {
  //   stock, key, state, dispatch, quantity,
  // }) {
  //   Size.propTypes = {
  //     stock: PropTypes.shape({
  //       size: PropTypes.string.isRequired,
  //       quantity: PropTypes.number.isRequired,
  //       sku: PropTypes.number.isRequired,
  //     }).isRequired,
    // key: PropTypes.number.isRequired,
  function handleSelectSize (e, value) {
    dispatch({ type: 'selectSize', payload: value})
  }

  return (
    <option
      key={productStock.sku}
      index={index}
      stock={productStock}
      size={productStock.size}
      quantity={productStock.quantity}
      onClick={e => handleClick(quantity, e)}
      state={state}
      dispatch={dispatch}
    >{productStock.size}</option>
  );
}

export default SizeDropdown;

