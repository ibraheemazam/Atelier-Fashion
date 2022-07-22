import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import StyleSelector from '../StyleSelector/StyleSelector';
import RatingsAndReviews from '../../RatingsAndReviews/RatingsAndReviews';
//import Breakdown from '../../RatingsAndReviews/Breakdown';
//import CardStars from '../../RelatedItems/RelatedList/CardStars';
import { useGlobalContext } from '../../../contexts/GlobalStore';

var k = 0;

function ProductOverview(props) {
  const {
    productID, productInfo, reviews, selectedStyle, setSelectedStyle, styles, setStyles,
  } = useGlobalContext();

  // correct review count
  //stars
  // average review score
  // need to make href work. use id on component, may need to pass that id as props tho so does not get lost in child components

  return (
    <div>
      <div>
        <ReviewContainer>
        {reviews.length > 0
          ? (
            <div>
              <span className="stars">
                Seeing Stars
              </span>
              <span className="readReviews">
                <a>{`Read all ${reviews.length} reviews`}</a>
              </span>
            </div>
          )
          : (
            <div>
              <span>
                <a href="RatingsAndReviews">No reviews yet. Add one!</a>
              </span>
            </div>
          )}
        </ReviewContainer>
      <h5>{productInfo.category}</h5>
      <PriceContainer>
        {selectedStyle.sale_price
        ? (
          <h5>
            <span style={{color: 'red '}}>
              {`${selectedStyle.sale_price}    `}
            </span>
            <s>{selectedStyle.original_price}</s>
          </h5>
        )
        : (
          <h5>{selectedStyle.original_price}</h5>
        )}
      </PriceContainer>
      <h2>{productInfo.name}</h2>
      <DescriptionContainer>
        <h4>{productInfo.slogan}</h4>
        <p>{productInfo.description}</p>
      </DescriptionContainer>
        <SocialMediaContainer>
          <ShareSocial>
            <button type="button">Share on Facebook!</button>
            <button type="button">Share on Twitter!</button>
            <button type="button">Share on Pintrest!</button>
          </ShareSocial>
        </SocialMediaContainer>
      </div>
    </div>
  );
}

const ReviewContainer = styled.div`
  height: 5%;
  width: auto;
`;

const PriceContainer = styled.div`
`;

const DescriptionContainer = styled.div`
  display: block
`;

const SocialMediaContainer = styled.div`
`;


const ShareSocial = styled.div`
  height: 50%;
  width: auto;
  border: .1rem solid black;
`;


export default ProductOverview;