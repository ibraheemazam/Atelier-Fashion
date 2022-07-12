/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswerEntry from './AnswerEntry';
import AddAnswerModal from './AddAnswerModal';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function QuestionEntry({ question }) {
  // TODO: NEED TO SORT ANSWERS BY HELPFULNESS
  const { productID, setQuestions } = useGlobalContext();
  const [numAnswers, setNumAnswers] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const { answers } = question;
  const allAnswers = Object.values(answers);
  const topAnswers = Object.values(answers).slice(0, numAnswers);

  function helpfulQuestion() {
    // TODO: MAKE UPDATE ONLY SPECIFIC QUESTION
    axios
      .put('/questions/helpful', { question_id: question.question_id })
      .then(() => {
        axios
          .get('/questions', { params: { product_id: productID } })
          .then((results) => {
            setQuestions(results.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }
  function answerQuestion() {
    // TODO: MAKE UPDATE ONLY SPECIFIC QUESTION
    console.log(`Answering question with id ${question.question_id}`);
    setShowModal(true);
  }

  function increaseNumAnswers() {
    setNumAnswers(numAnswers + 2);
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
      {topAnswers.length < allAnswers.length ? (
        <MoreAnswers onClick={() => increaseNumAnswers()}>LOAD MORE ANSWERS</MoreAnswers>
      ) : null}
      {showModal ? <AddAnswerModal setShowModal={setShowModal} question={question} /> : null}
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
