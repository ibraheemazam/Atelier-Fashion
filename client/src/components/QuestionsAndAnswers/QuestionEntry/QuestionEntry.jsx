/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import AnswerEntry from './AnswerEntry';

function QuestionEntry({ question }) {
  const { answers } = question;
  const allAnswers = Object.values(answers);
  const topAnswers = Object.values(answers).slice(0, 2);

  function helpfulQuestion() {
    console.log(`Mark question with id ${question.question_id} as helpful`);
  }
  function answerQuestion() {
    console.log(`Answering question with id ${question.question_id}`);
  }

  function moreAnswers() {
    if (topAnswers.length < allAnswers.length) {
      return <MoreAnswers>LOAD MORE ANSWERS</MoreAnswers>;
    }
    return null;
  }
  return (
    <Entry>
      <Question>Q.</Question>
      <QuestionBody>{question.question_body}</QuestionBody>
      <QuestionHelpful>
        Helpful?
        {' '}
        <Clickable onClick={() => helpfulQuestion()}>Yes</Clickable>
        (
        {question.question_helpfulness}
        )
      </QuestionHelpful>
      <AddAnswer>
        <Clickable onClick={() => answerQuestion()}>Add Answer</Clickable>
      </AddAnswer>
      <Answer>A.</Answer>
      {topAnswers.length > 0 ? (
        topAnswers.map((answer) => (
          <AnswerEntry answer={answer} key={answer.id} />
        ))
      ) : (
        <AnswerNone>
          This question has not been answered yet!
        </AnswerNone>
      )}
      {moreAnswers()}
    </Entry>
  );
}

const Entry = styled.div`
  display: grid;
  border: 1px solid;
  grid-template-columns: 5% 70% 15% 10%;
`;

const Question = styled.div`
  grid-column: 1;
  font-weight: bold;
`;

const QuestionBody = styled.div`
  grid-column: 2;
  font-weight: bold;
  padding-right: 10px;
`;

const QuestionHelpful = styled.div`
  grid-column: 3;
`;

const AddAnswer = styled.div`
`;

const Answer = styled.div`
  grid-column: 1;
  font-weight: bold;
`;

const AnswerNone = styled.div`
  grid-column: 2;
`;

const MoreAnswers = styled.div`
  grid-column: 1 / 5;
  font-weight: bold;
  cursor: pointer;
  padding-left: 5%
`;

const Clickable = styled.u`
  cursor: pointer;
`;

export default QuestionEntry;
