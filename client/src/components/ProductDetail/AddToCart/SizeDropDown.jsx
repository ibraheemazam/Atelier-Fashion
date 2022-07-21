import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function SizeDropdown({size, quantity}) {
  const { productID, selectedStyle } = useGlobalContext();

  return (
    <option value={size} size={size} quantity={quantity}
    {
      quantity === 0
    &&  'disabled'

    }
  {size}</option>
);


// SizeDropdown.propTypes = {
//   // key: PropTypes.number.isRequired,
//   index: PropTypes.number.isRequired,
//   stock: PropTypes.shape({
//     size: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//     sku: PropTypes.string.isRequired,
//   }).isRequired,
//   size: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
//   quantity: PropTypes.number.isRequired,
// };

export default SizeDropdown;
