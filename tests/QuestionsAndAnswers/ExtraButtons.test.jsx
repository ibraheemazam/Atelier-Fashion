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

describe('searchbar', () => {
  it('should render a searchbar', () => {
    render(
      <GlobalContextProvider>
        <QuestionSearch/>
      </GlobalContextProvider>
    )
  })
});

describe('extras', () => {
  it('should render additional buttons', () => {
    render(
      <GlobalContextProvider>
        <ExtraButtons />
      </GlobalContextProvider>
    )
    const ask = screen.getByRole('button', { name: 'Ask a Question' });
    expect(ask).toBeInTheDocument();
  })
});
