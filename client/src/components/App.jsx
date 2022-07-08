/* eslint-disable import/extensions */
import React from 'react';
import ProductDetail from './ProductDetail/ProductDetail.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

function App() {
  return (
    <div>
      <ProductDetail />
      <RelatedItems />
      <RatingsAndReviews />
      <QuestionsAndAnswers />
    </div>
  );
}

export default App;
