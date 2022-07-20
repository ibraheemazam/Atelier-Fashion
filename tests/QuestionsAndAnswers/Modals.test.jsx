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
    it('add answer modal', async () => {
      render(
        <GlobalContextProvider>
          <AddAnswerModal question={exampleQuestion} setShowModal={() => {}}/>
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
      const submit = screen.getByRole('button', { name: 'Submit' });
      const cancel = screen.getByRole('button', { name: 'Cancel' });
      expect(submit).toBeInTheDocument();
      expect(cancel).toBeInTheDocument();
    });

    it('should show incomplete fields', async() => {
      const user = userEvent.setup()
      render(
        <GlobalContextProvider>
          <AddAnswerModal question={exampleQuestion} setShowModal={() => {}}/>
        </GlobalContextProvider>
      )
      const submit = screen.getByRole('button', { name: 'Submit' });
      const cancel = screen.getByRole('button', { name: 'Cancel' });
      expect(submit).toBeInTheDocument();
      expect(cancel).toBeInTheDocument();

      await user.click(submit);

      await screen.findByText('1. Not all mandatory fields have been provided.');
      await screen.findByText('2. Email is not in the correct email format.');
      await screen.findByText('3. The images selected are invalid or unable to be uploaded.');
    })

    it('should close', async () => {
      const user = userEvent.setup()
      render(
        <GlobalContextProvider>
          <AddAnswerModal question={exampleQuestion} setShowModal={() => {}}/>
        </GlobalContextProvider>
      )

      const close = screen.getByText('✖');
      user.click(close);

      await(screen.getByText('✖'));
    })
  });
});
