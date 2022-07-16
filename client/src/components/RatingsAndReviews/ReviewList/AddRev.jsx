import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddRev() {
  const { productInfo } = useGlobalContext();
  const [addClicked, setAddClicked] = useState(false);

  const handleAddRev = function handleAddRev() {
    setAddClicked((prevAddClicked) => !prevAddClicked);
  };

  const handleSubmit = function handleSubmit(event) {
    //
    event.preventDefault();
    console.log('submitted pho');
  };

  return (
    <div>
      <button type="button" onClick={handleAddRev}>
        ADD REVIEW
      </button>
      {
        addClicked && (
          <AddRevBackground>
            <TestDiv>
              <h2>Write a Review</h2>
              <h3>About the {productInfo.name}</h3>
              <FormContainer onSubmit={handleSubmit}>
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
                <label htmlFor="overall rating">
                  Do you recommend this product?*&nbsp;
                  <div>
                    <label htmlFor="option one">Yes</label>
                    <input type="radio" value="yes" id="choice1" />
                  </div>
                  <div>
                    <label htmlFor="option two">No</label>
                    <input type="radio" value="no" id="choice2" />
                  </div>
                </label>
                <button type="submit">Submit</button>
              </FormContainer>
            </TestDiv>
          </AddRevBackground>
        )
      }
    </div>
  );
}

export default AddRev;

const AddRevBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vw;
  width: 100vw;
  position: absolute;
  top: 0; left: 0;
  background: gold;
`;

const TestDiv = styled.div`
  padding: 1em;
  background: pink;
  height: 35%;
  width: 50%;
  border: 1px solid;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
