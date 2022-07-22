import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function SizeDropdown({size, quantity}) {
  const { productID, selectedStyle } = useGlobalContext();
  return (
    <option value={size} size={size} quantity={quantity}
    disabled={
      quantity === 0
       &&  true
       }
     >
      {size}
      </option>
  );
}

//export defaut SizeDropdown;
// SizeDropdown.propTypes = {
//   // key: PropTypes.number.isRequired,
//   index: PropTypes.number.isRequired,
//   stock: PropTypes.shape({
//     size: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   }).isRequired,
//   size: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
//   quantity: PropTypes.number.isRequired,
// }

//border-radiux 10px