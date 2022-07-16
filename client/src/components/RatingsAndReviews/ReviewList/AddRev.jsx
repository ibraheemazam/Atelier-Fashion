import React, { useState } from 'react';
import styled from 'styled-components';

function AddRev() {
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
          <TestDiv>
            <h2>Write a Review</h2>
            <h3>About the Prod Name</h3>
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
        )
      }
    </div>
  );
}

export default AddRev;

const TestDiv = styled.div`
  padding: 1em;
  background: gold;
  height: 25em;
  width: 25em;
  position: relative;
  top -470px; left: 80px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;