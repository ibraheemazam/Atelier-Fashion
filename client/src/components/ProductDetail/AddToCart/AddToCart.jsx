import React, { useState, useReducer, createElement, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddToCart() {
  const { productID, selectedStyle, productInfo, styles } = useGlobalContext();

  return (
    <Cart>
      <SQContainer>
        <SelectSizeContainer>
            <SelectSize>
                <option value={null}>Select Size</option>
              {selectedStyle.skus
              && (
                Object.entries(selectedStyle.skus).map(([sku, {quantity, size}]) => {
                  return (quantity > 0 && <option key={sku}>{size}</option>)
                }
              ))}
            </SelectSize>
        </SelectSizeContainer>
        <SelectQuantityContainer>
          <SelectQ >---
            <option defaultValue={1}>-</option>
          </SelectQ>
        </SelectQuantityContainer>
      </SQContainer>
      <BagContainer>
        <AddtoBag>
          <CartB type="submit">Add to Cart</CartB>
        </AddtoBag>
      </BagContainer>
    </Cart>
  );
}


const Cart = styled.div`
  display: block;
`;

const SQContainer = styled.div`
  flex-direction: row;
  align-content: space-between;
  display: inline-flex;
  margin-bottom: 2%;
`;

const SelectSizeContainer = styled.div`
  height: auto;
  width: auto;
`;

const SelectSize = styled.select`
  font-size: 1em;
  padding-bottom: 0.4em;
  padding-top: 0.4em;
  padding-left: 1em;
  padding-right: 1em;
  margin-right: 1em;
`;

const SelectQuantityContainer = styled.div`
  height: auto;
  width: auto;
  margin-left: 45ß%
  margin-right: 2%
`;

const SelectQ = styled.select`
  font-size: 1em;
  padding-bottom: 0.4em;
  padding-top: 0.4em;
  padding-left: 1.1em;
  padding-right: 1.1em;
`;

const BagContainer = styled.div`
`;


const AddtoBag = styled.div`
  margin-top: 1px;
  height: auto
  display: grid;
  width: 35%
`;

const CartB = styled.button`
  font-size: 1em;
  width: 13.3em;
  height: 2.4em;
`;

export default AddToCart;
