import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from '../../client/src/contexts/GlobalStore';
import '@testing-library/jest-dom';
import ReviewTile from '../../client/src/components/RatingsAndReviews/ReviewList/ReviewTile';
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
const exampleReview = {
  "review_id": 1275215,
  "body": "text of the question",
  "date": "2022-07-11T00:00:00.000Z",
  "reviewer_name": "username here",
  "helpfulness": 5,
  "reported": false
};

describe('Should render a question', () => {
  test('A question should render', () => {
      root.render(
        <GlobalContextProvider>
          <ReviewTile review={exampleReview} />
        </GlobalContextProvider>,
    );
  });
});