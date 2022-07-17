/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function NavBar({ toggleTheme }) {
  return (
    <Background id="navbar">
      <Link href="/#" onClick={() => toggleTheme()}><GridItem>Toggle Dark Mode</GridItem></Link>
      <Link href="/#"><GridItem>Product Overview</GridItem></Link>
      <Link href="/#"><GridItem>Related Products</GridItem></Link>
      <Link href="/#"><GridItem>Questions & Answers</GridItem></Link>
      <Link href="/#"><GridItem>Reviews</GridItem></Link>
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
  background-color : ${(props) => props.theme.secondaryColor};
  border: 2 px solid;
  &:focus {
    outline: none;
  }
  width: 60%;
`;

export default NavBar;
