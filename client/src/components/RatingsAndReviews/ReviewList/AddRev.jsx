import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddRev() {
  const { productInfo, revMeta } = useGlobalContext();
  const [addClicked, setAddClicked] = useState(false);
  const [recommendProd, setRecommendProd] = useState();

  const handleAddRev = function handleAddRev() {
    setAddClicked((prevAddClicked) => !prevAddClicked);
  };

  const handleSubmit = function handleSubmit(event) {
    //
    event.preventDefault();
    console.log('submitted pho');
    console.log('addClicked:\n', addClicked);
    console.log('recommendProd:\n', recommendProd);
    console.log(revMeta);
  };

  const handleBackgroundClick = function handleBackgroundClick(event) {
    if (event.target.id === 'AddRevBackground') {
      setAddClicked(false);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleAddRev}>
        ADD REVIEW
      </button>
      {
        addClicked && (
          <AddRevBackground id="AddRevBackground" onClick={(event) => handleBackgroundClick(event)}>
            <TestDiv>
              <h2>Write a Review</h2>
              <h3>
                About the&nbsp;
                {productInfo.name}
              </h3>
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
                <br />
                <label htmlFor="recommendProd" onChange={(event) => setRecommendProd(event.target.value === 'true')}>
                  Do you recommend this product?*&nbsp;
                  <div>
                    <input type="radio" value="true" name="ovRating" />
                    Yes
                    <input type="radio" value="false" name="ovRating" />
                    No
                  </div>
                </label>
                <br />

                <label htmlFor="characteristics" onChange={() => null}>
                  None selected
                  <div>
                    <input type="radio" value={1} name="chars" />
                    1
                    <input type="radio" value={2} name="chars" />
                    2
                    <input type="radio" value={1} name="chars" />
                    3
                    <input type="radio" value={2} name="chars" />
                    4
                    <input type="radio" value={1} name="chars" />
                    5
                  </div>
                </label>
                <br />

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
