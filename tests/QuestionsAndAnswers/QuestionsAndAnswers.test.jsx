import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from '../../client/src/contexts/GlobalStore';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import QuestionsAndAnswers from '../../client/src/components/QuestionsAndAnswers/QuestionsAndAnswers';
import QuestionEntry from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/QuestionEntry';
import AddQuestionModal from '../../client/src/components/QuestionsAndAnswers/Extras/AddQuestionModal';
import AddAnswerModal from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/AddAnswerModal';
import ExpandedImageModal from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/ExpandedImageModal';
import AnswerEntry from '../../client/src/components/QuestionsAndAnswers/QuestionEntry/AnswerEntry';
import QuestionSearch from '../../client/src/components/QuestionsAndAnswers/QuestionSearch/QuestionSearch';
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

describe('should render the entire section', () => {
  render(
    <GlobalContextProvider>
      <QuestionsAndAnswers />
    </GlobalContextProvider>
  )
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

describe('should interact with a question', () => {
  it('should be able to report a question', async () => {
    const user = userEvent.setup()
    render(
      <QuestionEntry question={exampleQuestion} />
    );
    const report = screen.getByText('Report');
    expect(report).toBeTruthy();
  })

  it('should mark a question as helpful', async () => {
    const user = userEvent.setup()
    render(
      <QuestionEntry question={exampleQuestion} />
    );
    const helpful = screen.getByText('Yes');
    expect(helpful).toBeTruthy();
  })
});

describe('should render a question entry', () => {
  it('should render a answer', () => {
    render(
      <AnswerEntry answer={exampleAnswer} />
      )
    const sellerUserDate = screen.getByText(`by ${exampleAnswer.answerer_name} on ${format(parseISO(exampleAnswer.date), 'MMM dd, yyyy')}`);
    expect(sellerUserDate).toBeTruthy();

  })
});

describe('should render a modal', () => {
  describe('expanded image modal', () => {
    it('expanded image modal', () => {
      const exampleImage = 'https://res.cloudinary.com/drf3dli0i/image/upload/v1657490738/clezmsseo2if8kwixquh.jpg';
      render(
        <GlobalContextProvider>
          <ExpandedImageModal src={exampleImage}/>
        </GlobalContextProvider>
      )
      const img = screen.getByAltText('modal-image');
      expect(img.src).toEqual(exampleImage);
    });
  })

  describe('add question modal', () => {
    it('add question modal', () => {
      render(
        <GlobalContextProvider>
          <AddQuestionModal />
        </GlobalContextProvider>
      )

      //fields
      expect(screen.getByText('Username')).toBeTruthy();
      expect(screen.getByText('Email')).toBeTruthy();
      expect(screen.getByText('Question')).toBeTruthy();

      //buttons
      expect(screen.getByText('Submit')).toBeTruthy();
      expect(screen.getByText('Cancel')).toBeTruthy();

      expect(screen.getByText('For privacy reasons, do not use your full name or email address.')).toBeTruthy();
      expect(screen.getByText('For authentication reasons, you will not be emailed.')).toBeTruthy();
    });
  });

  describe('add answer modal', () => {
    it('add answer modal', () => {
      render(
        <GlobalContextProvider>
          <AddAnswerModal question={exampleQuestion}/>
        </GlobalContextProvider>
      )

      //fields
      expect(screen.getByText('Username')).toBeTruthy();
      expect(screen.getByText('Email')).toBeTruthy();
      expect(screen.getByText('Answer')).toBeTruthy();
      expect(screen.getByText('Photos(optional)')).toBeTruthy();

      expect(screen.getByText('For privacy reasons, do not use your full name or email address.')).toBeTruthy();
      expect(screen.getByText('For authentication reasons, you will not be emailed.')).toBeTruthy();

      //buttons
      expect(screen.getByText('Submit')).toBeTruthy();
      expect(screen.getByText('Cancel')).toBeTruthy();

      expect(screen.getByRole('button', { name: 'Submit' }));
      expect(screen.getByRole('button', { name: 'Cancel' }));
    });
  });
});

describe('should render a searchbar', () => {
  render(
    <GlobalContextProvider>
      <QuestionSearch/>
    </GlobalContextProvider>
  )
});