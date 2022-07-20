import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function SizeDropdown({index, stock, size, quantity}) {
  return (
    <option value={stock.size} index={index} size={size} quantity={quantity}></option>
  );
}

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
