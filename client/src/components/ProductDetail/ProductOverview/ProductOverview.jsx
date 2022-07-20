import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import axios from 'axios';

// import StyleSelector from '../StyleSelector/StyleSelector';
import RatingsAndReviews from '../../RatingsAndReviews/RatingsAndReviews';
import { useGlobalContext } from '../../../contexts/GlobalStore';

// const initialState = { count: 0, sum: 0 };

function ProductOverview({ productInfo, href }) {
  const {
    reviews, selectedStyle, setSelectedStyle,
  } = useGlobalContext();

  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  // const [descriptionLength, setDescriptionLength] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    // setReviews([{ no: 1 }, { no: 2 }, { no: 3 }]);
    setPrice(() => selectedStyle.original_price);
    setSalePrice(() => selectedStyle.sale_price);
    setDescription(() => productInfo.description);
   // setDescriptionLength(() => productInfo['description'].length);
  }, [selectedStyle, setSelectedStyle, selectedStyle.original_price, selectedStyle.sale_price]);

  // useEffect(() => {
  //   // const productId = window.location.pathname;
  //   // setProductID(productId);
  //   axios
  //     .get('/products', { params: { ID: productID } })
  //     .then((results) => setProductInfo(results.data))
  //     // alert client when error
  //     .catch((err) => console.log(err));
  // }, [productID, setProductInfo]);

  // need to calculate average score
  // use reviews metadata
  // or see if Ibraheem already did

  // need to make href work. use id on component, may need to pass that id as props tho so does not get lost in child components

  return (
    <div>
      <div>
        <div>
          {reviews.length > 0
            ? (
              <div>
                <span className="stars">
                  Seeing Stars
                </span>
                <span className="readReviews">
                  <a href={href}>{`Read all ${reviews.length} reviews`}</a>
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
        </div>
        <h5>{productInfo.category}</h5>
        {salePrice
          ? (
            <h6>
              <span style={{ color: 'red' }}>
                {`${salePrice}   `}
              </span>
              <s>{price}</s>
            </h6>
          )
          : (
            <h6>{price}</h6>
          )}
        <div />
        <h2>{productInfo.name}</h2>
        <div>
          {description
          && (
            <div>
              <h4>{productInfo.slogan}</h4>
              <p>
                {productInfo.description}
              </p>
            </div>
          )}
        </div>
        <div>
          <div>
            <ShareSocial>
              <button type="button">Share on Facebook!</button>
              <button type="button">Share on Twitter!</button>
              <button type="button">Share on Pintrest!</button>
            </ShareSocial>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;

const ShareSocial = styled.div`
  height: 50%;
  width: auto;
  border: .5rem solid black;
`;
