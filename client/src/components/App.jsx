/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ProductDetail from './ProductDetail/ProductDetail';
import RelatedItems from './RelatedItems/RelatedItems';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';
import NavBar from './NavBar';
import { GlobalContextProvider } from '../contexts/GlobalStore';

function App() {
  const [theme, setTheme] = useState('light');

  const themeLight = {
    backgroundColor: 'white',
    secondaryColor: '#f0f5f1',
    tertiaryColor: '#e0e0e0',
    fontColor: 'black',
  };

  const themeDark = {
    backgroundColor: 'black',
    secondaryColor: '#82827d',
    tertiaryColor: '#706d6d',
    fontColor: 'white',
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <StyledContainer id="styled-container">
        {/* <Primary>EXAMPLE</Primary>
        <Secondary>EXAMPLE</Secondary>
        <Tertiary>EXAMPLE</Tertiary>
        <Font>EXAMPLE</Font> */}
        <GlobalContextProvider>
          {/* <NavBar theme={theme} toggleTheme={toggleTheme} /> */}
          {/* <ProductDetail /> */}
          {/* <RelatedItems /> */}
          {/* <QuestionsAndAnswers /> */}
          <RatingsAndReviews />
        </GlobalContextProvider>
      </StyledContainer>
    </ThemeProvider>
  );
}

const StyledContainer = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

const Primary = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

const Secondary = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
`;

const Tertiary = styled.div`
  background-color: ${(props) => props.theme.tertiaryColor};
  color: ${(props) => props.theme.fontColor};
`;

const Font = styled.div`
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.fontColor};
`;

export default App;
