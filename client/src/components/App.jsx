import React from 'react';
import styled from 'styled-components';
import ProductDetail from './ProductDetail/ProductDetail';
import RelatedItems from './RelatedItems/RelatedItems';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';
import { GlobalContextProvider } from '../contexts/GlobalStore';

function App() {
  return (
    <StyledContainer>
      <GlobalContextProvider>
        {/* <ProductDetail /> */}
        <RelatedItems />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </GlobalContextProvider>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
`;

export default App;
