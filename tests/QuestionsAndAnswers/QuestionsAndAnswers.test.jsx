import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from '../../client/src/contexts/GlobalStore';
import '@testing-library/jest-dom';
import QuestionEntry from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/QuestionEntry';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

const exampleQuestion = {
  "question_id": 641780,
  "question_body": "text of the question",
  "question_date": "2022-07-11T00:00:00.000Z",
  "asker_name": "username here",
  "question_helpfulness": 5,
  "reported": false,
  "answers": {}
};

describe('Should render a question', () => {
  test('A question should render', () => {
      root.render(
        <GlobalContextProvider>
          <QuestionEntry question={exampleQuestion} />
        </GlobalContextProvider>,
    );
  });
});
