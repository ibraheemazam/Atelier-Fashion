import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function NavBar({ toggleTheme }) {
  NavBar.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
  };

  return (
    <Background id="navbar">
      <GridItem onClick={() => toggleTheme()}>Toggle Dark Mode</GridItem>
      <Link href="#ProductDetails"><GridItem>Product Details</GridItem></Link>
      <Link href="#RelatedProducts"><GridItem>Related Products</GridItem></Link>
      <Link href="#QuestionsAndAnswers"><GridItem>Questions & Answers</GridItem></Link>
      <Link href="#RatingsAndReviews"><GridItem>Ratings & Reviews</GridItem></Link>
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
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor};
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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
