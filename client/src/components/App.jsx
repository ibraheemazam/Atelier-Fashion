import React from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import RelatedItems from './RelatedItems/RelatedItems';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';
import { GlobalContextProvider } from '../contexts/GlobalStore';

function App() {
  return (
    <div>
      <GlobalContextProvider>
        {/* <ProductDetail /> */}
        <RelatedItems />
        {/* <QuestionsAndAnswers /> */}
        {/* <RatingsAndReviews /> */}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
