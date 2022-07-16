import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import AnswerEntry from './AnswerEntry';
import AddAnswerModal from './AddAnswerModal';

function QuestionEntry({ question }) {
  QuestionEntry.propTypes = {
    question: PropTypes.shape({
      question_id: PropTypes.number.isRequired,
      question_helpfulness: PropTypes.number.isRequired,
      question_body: PropTypes.string.isRequired,
      answers: PropTypes.node,
    }).isRequired,
  };

  const [numAnswers, setNumAnswers] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const clickedHelpful = useRef(false); // can only say it was helpful once

  const { answers } = question;
  const allAnswers = Object.values(answers);
  allAnswers.sort((a, b) => b.helpfulness - a.helpfulness);
  const topAnswers = Object.values(allAnswers).slice(0, numAnswers);

  function helpfulQuestion() {
    if (!clickedHelpful.current) {
      axios
        .put('/questions/helpful', { question_id: question.question_id })
        .then(() => {
          setHelpfulness(helpfulness + 1);
          clickedHelpful.current = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function answerQuestion() {
    setShowModal(true);
  }

  function changeNumAnswers(val) {
    const count = Math.max(2, val);
    setNumAnswers(count);
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
    if (allAnswers.length <= 2) {
      return null;
    }
    if (topAnswers.length < allAnswers.length) {
      return (<MoreAnswers onClick={() => changeNumAnswers(100)}>See More Answers</MoreAnswers>);
    }
    return (<MoreAnswers onClick={() => changeNumAnswers(-100)}>Collapse Answers</MoreAnswers>);
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
      <div>
        <Clickable onClick={() => answerQuestion()}>Add Answer</Clickable>
      </div>
      <Answer>A.</Answer>
      <AnswersListContainer>
        {answersList()}
      </AnswersListContainer>
      {moreAnswers()}
      {showModal && <AddAnswerModal setShowModal={setShowModal} question={question} />}
    </Entry>
  );
}

const Entry = styled.div`
  display: grid;
  grid-template-columns: 5% 65% 15% 10%;
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

const AnswersListContainer = styled.div`
  background-color: #f1f1f1;
  max-height: 250px;
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
