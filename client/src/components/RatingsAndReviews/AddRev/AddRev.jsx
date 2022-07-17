import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Characteristics from './Characteristics';

function AddRev({ revMeta }) {
  const { productInfo } = useGlobalContext();
  const [addClicked, setAddClicked] = useState(true);
  const [recommendProd, setRecommendProd] = useState();
  const [charVal, setCharVal] = useState({
    Size: 'none selected',
    sizeNum: null,
    Width: 'none selected',
    widthNum: null,
    Comfort: 'none selected',
    comfortNum: null,
    Quality: 'none selected',
    qualityNum: null,
    Length: 'none selected',
    lengthNum: null,
    Fit: 'none selected',
    fitNum: null,
  });

  if (!revMeta.product_id) {
    return (
      <div />
    );
  }

  const handleAddRev = function handleAddRev() {
    setAddClicked((prevAddClicked) => !prevAddClicked);
  };

  const handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted pho');
    console.log('addClicked:\n', addClicked);
    console.log('recommendProd:\n', recommendProd);
    console.log('revMeta:\n', revMeta);
    console.log('charVal:\n', charVal);
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

                <Characteristics
                  revMeta={revMeta}
                  productInfo={productInfo}
                  charVal={charVal}
                  setCharVal={setCharVal}
                />

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
  height: 40%;
  width: 50%;
  border: 1px solid;
  overflow: scroll;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
