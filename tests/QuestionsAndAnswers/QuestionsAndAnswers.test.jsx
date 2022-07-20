import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from '../../client/src/contexts/GlobalStore';
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import QuestionsAndAnswers from '../../client/src/components/QuestionsAndAnswers/QuestionsAndAnswers';
import QuestionEntry from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/QuestionEntry';
import AddQuestionModal from '../../client/src/components/QuestionsAndAnswers/Extras/AddQuestionModal';
import AddAnswerModal from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/AddAnswerModal';
import ExpandedImageModal from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/ExpandedImageModal';
import AnswerEntry from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/AnswerEntry';
import QuestionSearch from '../../client/src/components/QuestionsAndAnswers/QuestionSearch/QuestionSearch';
import ExtraButtons from '../../client/src/components/QuestionsAndAnswers/Extras/ExtraButtons';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

window.scrollTo = jest.fn();
jest.mock("axios");

const exampleQuestion = {
  "question_id": 641780,
  "question_body": "text of the question",
  "question_date": "2022-07-11T00:00:00.000Z",
  "asker_name": "username here",
  "question_helpfulness": 5,
  "reported": false,
  "answers": {}
};

const exampleAnswer = {
  "id": 5986086,
  "body": "test answer",
  "date": "2022-07-11T00:00:00.000Z",
  "answerer_name": "123",
  "helpfulness": 0,
  "photos": [
      "https://res.cloudinary.com/drf3dli0i/image/upload/v1657574319/mt0lrspfmwzyzibtfc2z.webp",
      "https://res.cloudinary.com/drf3dli0i/image/upload/v1657574319/uc5efxhy16x8wqzxmkby.jpg"
  ]
};

const exampleInfo = {
  "id": 40344,
  "campus": "hr-rfp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-08-13T14:38:44.509Z",
  "updated_at": "2021-08-13T14:38:44.509Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}

describe('QA widget', () => {
  it('should render the whole QA widget', () => {
    const user = userEvent.setup;
    axios.get.mockResolvedValue(exampleInfo);
    render(
      <GlobalContextProvider>
        <QuestionsAndAnswers />
      </GlobalContextProvider>
    )
  })

});

describe('should render a answer entry', () => {
  it('should render a answer', () => {
    render(
      <AnswerEntry answer={exampleAnswer} />
      )
    const sellerUserDate = screen.getByText(`by ${exampleAnswer.answerer_name} on ${format(parseISO(exampleAnswer.date), 'MMM dd, yyyy')}`);
    expect(sellerUserDate).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
    expect(screen.getByText(exampleAnswer.body)).toBeInTheDocument();
  })
});

describe('should interact with a question', () => {
  it('should be able to report a question', async () => {
    const user = userEvent.setup()
    render(
      <QuestionEntry question={exampleQuestion} />
    );
    expect(screen.getByText('Report')).toBeInTheDocument();

    axios.post.mockResolvedValueOnce('success');
    user.click(screen.getByText('Report'));

    waitForElementToBeRemoved(screen.getByText('Report')).then(async () => {
      expect(await screen.findByText('Reported')).toBeInTheDocument();
    }, {timeout: 10000})
  })

  it('should mark a question as helpful', async () => {
    const user = userEvent.setup()
    render(
      <QuestionEntry question={exampleQuestion} />
    );
    expect(screen.getByText('Yes')).toBeTruthy();

    axios.post.mockResolvedValueOnce('success');
    user.click(screen.getByText('Yes'));
  })

  // it('should open a modal', async () => {
  //   const user = userEvent.setup()
  //   render(
  //     <QuestionEntry question={exampleQuestion} />
  //   );
  // })
});
