import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from '../../client/src/contexts/GlobalStore';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
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

window.scrollTo = jest.fn();

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

describe('QA widget', () => {
  it('should render the whole QA widget', () => {
    render(
      <GlobalContextProvider>
        <QuestionsAndAnswers />
      </GlobalContextProvider>
    )
  })

});

describe('should render a question', () => {
  it('A question should render', () => {
    render(
      <QuestionEntry question={exampleQuestion} />
    );
    expect(screen.getByText('Q.')).toBeTruthy();
    expect(screen.getByText(exampleQuestion.question_body)).toBeTruthy();

    expect(screen.getByText('A.')).toBeTruthy();
    expect(screen.getByText('This question has not been answered yet!')).toBeTruthy();
  });
  it('Should have additional functionality', () => {
    render(
      <QuestionEntry question={exampleQuestion} />
    );

    expect(screen.getByText('Add Answer')).toBeTruthy();
    expect(screen.getByText('Yes')).toBeTruthy();
    expect(screen.getByText('Report')).toBeTruthy();
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
    const report = screen.getByText('Report');
    expect(report).toBeInTheDocument();

    await user.click(report);

    waitForElementToBeRemoved(report).then(() => {
      expect(screen.findByText('Reported')).toBeInTheDocument();
    })
  })

  it('should mark a question as helpful', async () => {
    const user = userEvent.setup()
    render(
      <QuestionEntry question={exampleQuestion} />
    );
    const helpful = screen.getByText('Yes');
    expect(helpful).toBeTruthy();
  })

  it('should open a modal', async () => {
    const user = userEvent.setup()
    render(
      <QuestionEntry question={exampleQuestion} />
    );
  })
});
