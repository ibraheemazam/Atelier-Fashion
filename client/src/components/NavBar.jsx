import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function NavBar({ toggleTheme }) {
  NavBar.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
  };

  function scrollTo(event) {
    if (event.target.getAttribute('target') !== 'question-and-answers') return;

    const scrollTarget = event.target.getAttribute('target');
    const target = document.getElementById(scrollTarget);
    target.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <Background id="navbar">
      <GridItem onClick={() => toggleTheme()}>Toggle Dark Mode</GridItem>
      <GridItem target="product-details" onClick={(event) => scrollTo(event)}>Product Details</GridItem>
      <GridItem target="related-items" onClick={(event) => scrollTo(event)}>Related Items</GridItem>
      <GridItem target="question-and-answers" onClick={(event) => scrollTo(event)}>Questions & Answers</GridItem>
      <GridItem target="ratings-and-reviews" onClick={(event) => scrollTo(event)}>Ratings & Reviews</GridItem>
      <GridItem>
        <Input />
        <i className="fa-solid fa-magnifying-glass" />
      </GridItem>
    </Background>
  );
}

const Background = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.tertiaryColor};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 14% 18% 18% 18% 18% 14%;
  justify-content: center;
  height: auto;
  margin-bottom: 100px;
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor};
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
  border: 2 px solid;
  &:focus {
    outline: none;
  }
  width: 60%;
`;

export default NavBar;
