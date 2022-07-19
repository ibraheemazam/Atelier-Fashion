/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function ComparisonModal({ details }) {
  const {
    currOutfit,
  } = useGlobalContext();
  console.log('CurrOutfit:', currOutfit.details.data.features);
  console.log('CompareOutfit:', details.data.features);
  let currentProduct = currOutfit.details.data.features;
  let comparedProduct = details.data.features;
  const modal = {};
  for (let i = 0; i < currentProduct.length; i += 1) {
    modal[currentProduct[i].feature] = [];
    modal[currentProduct[i].feature][0] = currentProduct[i].value;
  }
  for (let i = 0; i < comparedProduct.length; i += 1) {
    // Create the "feature" property in modal if it doesn't exist in current product
    if (modal[comparedProduct[i].feature] === undefined) {
      modal[comparedProduct[i].feature] = [];
    }
    modal[comparedProduct[i].feature][1] = comparedProduct[i].value;
  }
  const outcome = [];
  outcome[0] = [];
  outcome[1] = [];
  outcome[2] = [];
  for (const key in modal) {
    // console.log(key);
    console.log('First prod:', modal[key][0]);
    console.log('Second prod:', modal[key][1]);
    outcome[0].push(modal[key][0]);
    if (modal[key][0] !== undefined) {
      outcome[1].push(modal[key][0]);
    } else {
      outcome[1].push(modal[key][1]);
    }
    outcome[2].push(modal[key][1]);
    console.log('Outcome:', outcome);
  }
  console.log('Modal:', modal);
  return (
    <Modal>
      <Product>
        {currOutfit.details.data.name}
        {outcome[0].map((feature, i) => (feature ? <Product key={i}>&#10003;</Product> : <div key={i}>&nbsp;</div>))}
      </Product>
      <Product>
        Features
        {outcome[1].map((feature, i) => (feature ? <Product key={i}>{feature}</Product> : <div key={i}>&nbsp;</div>))}
      </Product>
      <Product>
        {details.data.name}
        {outcome[2].map((feature, i) => (feature ? <Product key={i}>&#10003;</Product> : <div key={i}>&nbsp;</div>))}
      </Product>
    </Modal>
  );
}

const Modal = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 300px;
  height: 175px;
  top: 20%;
  right: 20%;
  border: 2px solid black;
  background-color: gray;
`;

const Product = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

export default ComparisonModal;
