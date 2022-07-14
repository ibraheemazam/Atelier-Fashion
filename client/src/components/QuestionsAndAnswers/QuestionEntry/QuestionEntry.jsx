/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswerEntry from './AnswerEntry';
import AddAnswerModal from './AddAnswerModal';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function QuestionEntry({ question }) {
  console.log(question);
  const { productID, setQuestions } = useGlobalContext();

  const [numAnswers, setNumAnswers] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);

  const { answers } = question;
  const allAnswers = Object.values(answers);
  allAnswers.sort((a, b) => b.helpfulness - a.helpfulness);
  const topAnswers = Object.values(allAnswers).slice(0, numAnswers);

  function helpfulQuestion() {
    axios
      .put('/questions/helpful', { question_id: question.question_id })
      .then(() => {
        setHelpfulness(helpfulness + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function answerQuestion() {
    setShowModal(true);
  }

  function increaseNumAnswers() {
    setNumAnswers(numAnswers + 2);
  }

  function answersList() {
    if (topAnswers.length === 0) {
      return (<AnswerNone>This question has not been answered yet!</AnswerNone>);
    }
    return topAnswers.map((answer) => (
      <AnswerEntry answer={answer} key={answer.id} />
    ));
  }

  function moreAnswers() {
    if (topAnswers.length < allAnswers.length) {
      return (<MoreAnswers onClick={() => increaseNumAnswers()}>LOAD MORE ANSWERS</MoreAnswers>);
    }
    return null;
  }
  return (
    <Entry>
      <Question>Q.</Question>
      <QuestionBody>{question.question_body}</QuestionBody>
      <QuestionHelpful>
        {'Helpful? '}
        <Clickable onClick={() => helpfulQuestion()}>Yes</Clickable>
        {`(${helpfulness})`}
      </QuestionHelpful>
      <AddAnswer>
        <Clickable onClick={() => answerQuestion()}>Add Answer</Clickable>
      </AddAnswer>
      <Answer>A.</Answer>
      <AnswersListContainer>
        {answersList()}
        {moreAnswers()}
      </AnswersListContainer>
      {showModal && <AddAnswerModal setShowModal={setShowModal} question={question} />}
    </Entry>
  );
}

const Entry = styled.div`
  display: grid;
  grid-template-columns: 5% 70% 15% 10%;
  padding-bottom: 5%;
  width: 100%;
  justify-content: center;
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

const AnswersListContainer = styled.div`
  background-color: #f1f1f1;
  height: 200px;
  overflow: auto;
  text-align: justify;
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
