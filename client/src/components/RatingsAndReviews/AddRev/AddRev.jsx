import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Characteristics from './Characteristics';

function AddRev({ revMeta, productID }) {
  const { productInfo } = useGlobalContext();
  const [addClicked, setAddClicked] = useState(false);
  const [recommendProd, setRecommendProd] = useState();
  const [charVal, setCharVal] = useState({});
  const [charObj, setCharObj] = useState({});
  const [revSum, setRevSum] = useState('');
  const [revBody, setRevBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  if (!revMeta.product_id) {
    return (
      <div />
    );
  }

  const handleAddRev = function handleAddRev() {
    setAddClicked((prevAddClicked) => !prevAddClicked);
  };

  const postRev = function postRev(newReview) {
    axios.post('/reviews', newReview)
      .then((result) => {
        console.log('A new review was posted to the API:\n', result);
      })
      .catch((err) => {
        console.log('there was an error posting review to API:\n', err);
      });
  };

  const handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    const newRevObj = {
      product_id: productID,
      rating: 2,
      summary: revSum,
      body: revBody,
      recommend: recommendProd,
      name: nickname,
      email,
      photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'],
      characteristics: charObj,
    };
    postRev(newRevObj);
    setAddClicked(false);
    console.log(newRevObj);
  };

  const handleBackgroundClick = function handleBackgroundClick(event) {
    if (event.target.id === 'AddRevBackground') {
      setAddClicked(false);
    }
  };

  return (
    <div>
      <AddButton type="button" onClick={() => handleAddRev()}>
        ADD A REVIEW +
      </AddButton>
      {addClicked && (
      <AddRevBackground id="AddRevBackground" onClick={(event) => handleBackgroundClick(event)}>
        <AddRevDiv>
          <CloseDiv onClick={() => setAddClicked(false)}>
            X
          </CloseDiv>
          <AddRevHeader>
            <h2>Write a Review</h2>
            <div>
              About the&nbsp;
              {productInfo.name}
            </div>
          </AddRevHeader>
          <FormContainer onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="overall rating">
              Overall rating*&nbsp;
              <select>
                <option>1 star</option>
                <option>2 star</option>
                <option>3 star</option>
                <option>4 star</option>
                <option>5 star</option>
              </select>
            </label>
            <br />

            <RecommendProdLabel htmlFor="recommendProd" onChange={(event) => setRecommendProd(event.target.value === 'true')}>
              Do you recommend this product?*&nbsp;
              <div>
                <input required type="radio" value="true" name="ovRating" />
                Yes
                <input type="radio" value="false" name="ovRating" />
                No
              </div>
            </RecommendProdLabel>
            <br />

            <Characteristics
              revMeta={revMeta}
              productInfo={productInfo}
              charVal={charVal}
              setCharVal={setCharVal}
              charObj={charObj}
              setCharObj={setCharObj}
            />
            <br />

            <RevSummaryDiv>
              <div>Review summary</div>
              <textarea
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                rows="1"
                onChange={(event) => setRevSum(event.target.value)}
              />
            </RevSummaryDiv>
            <br />

            <RevBodyDiv>
              <div>Review body*</div>
              <textarea
                placeholder="Why did you like the product or not?"
                minLength="50"
                maxLength="1000"
                rows="6"
                onChange={(event) => setRevBody(event.target.value)}
                required
              />
            </RevBodyDiv>
            <br />

            <div>Upload your photos</div>
            <input />
            <br />

            What is your nickname?*
            <textarea
              maxLength="60"
              placeholder="Example: jackson11!"
              rows="1"
              onChange={(event) => setNickname(event.target.value)}
              required
            />
            <br />

            Your email*
            <textarea
              maxLength="60"
              placeholder="Example: jackson11@email.com"
              rows="1"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <AuthTag>For authentication reasons, you will not be emailed</AuthTag>
            <br />

            <ButtonContainer>
              <ButtonDiv type="submit">Submit</ButtonDiv>
              <ButtonDiv type="button" onClick={() => setAddClicked(false)}> Cancel </ButtonDiv>
            </ButtonContainer>

          </FormContainer>
        </AddRevDiv>
      </AddRevBackground>
      )}
    </div>
  );
}

AddRev.propTypes = {
  revMeta: PropTypes.shape({
    product_id: PropTypes.string,
  }).isRequired,
};

export default AddRev;

const AddButton = styled.button`
  padding: 1em;
  font-size: .9em;
  font-weight: bold;
`;

const AddRevBackground = styled.div`
  height: 100vw;
  width: 100vw;
  background: #1fe0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0; left: 0;
`;

const AddRevDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 45%;
  width: 60%;
  border: 1px solid;
  overflow: scroll;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.8em;
  cursor: pointer;
`;

const AddRevHeader = styled.div`
  padding: 0em 1em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  padding: 1em;
  flex-direction: column;
`;

const RecommendProdLabel = styled.label`

`;

const RevSummaryDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const RevBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthTag = styled.div`
  font-size: .9em;
  font-style: oblique;
  font-weight: lighter;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.5em;
`;

const ButtonDiv = styled.button`
  width 40%;
  padding: 1em;
  font-size: .9em;
  font-weight: bold;
  border-radius: 10px;
`;
