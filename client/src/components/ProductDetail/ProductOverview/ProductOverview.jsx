import React from 'react';
import styled from 'styled-components';
import { IoLogoFacebook, IoLogoTwitter, IoLogoPinterest } from 'react-icons/Io';
import RatingsAndReviews from '../../RatingsAndReviews/RatingsAndReviews';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function ProductOverview(props) {
  const {
    productID, productInfo, reviews, selectedStyle, setSelectedStyle, styles, setStyles,
  } = useGlobalContext();


  return (
    <div>
      <div>
        <ReviewContainer>
        {reviews.length > 0
          ? (
            <div>
              <span className="readReviews">
                <a>{`Read all ${reviews.length}+ reviews`}</a>
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
      <CategoryContainer>{productInfo.category}</CategoryContainer>
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
        <SocialMediaContainer>
          <ShareSocial>
            <Facebook>
              <IoLogoFacebook />
            </Facebook>
            <Twitter>
              <IoLogoTwitter />
            </Twitter>
            <Pinterest>
              <IoLogoPinterest />
            </Pinterest>
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

const CategoryContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const PriceContainer = styled.span`
`;


const SocialMediaContainer = styled.div`
  height: auto;
  width: auto;
`;

const Facebook = styled.div`
  flex: f1;
  font-size: 24px;
`;

const Twitter = styled.div`
  flex: f1;
  font-size: 24px;

`;

const Pinterest = styled.div`
  flex: f1;
  font-size: 24px;
`;


const ShareSocial = styled.div`
  height: 1.5rem;
  width: 4.5rem;
  border: .1rem solid black;
  display: flex;
`;


export default ProductOverview;