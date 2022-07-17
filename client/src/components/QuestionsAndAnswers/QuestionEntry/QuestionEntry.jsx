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
      answers: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        helpfulness: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
        answerer_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(PropTypes.string).isRequired,
      })).isRequired,
    }).isRequired,
  };

  const [numAnswers, setNumAnswers] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [clickedReport, setClickedReport] = useState(false);

  const clickedHelpful = useRef(false);

  const { answers } = question;
  const allAnswers = Object.values(answers);
  function sellerFirst(a, b) {
    if (a.answerer_name.toLowerCase() === 'seller') return -1;
    if (b.answerer_name.toLowerCase() === 'seller') return 1;
    return b.helpfulness - a.helpfulness;
  }
  function helpfulnessFirst(a, b) {
    return b.helpfulness - a.helpfulness;
  }
  allAnswers.sort(helpfulnessFirst);
  allAnswers.sort(sellerFirst);

  const topAnswers = Object.values(allAnswers).slice(0, numAnswers);
  function reportQuestion() {
    if (!clickedReport) {
      axios
        .put('/questions/report', { question_id: question.question_id })
        .then(() => {
          setClickedReport(true);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }

  function helpfulQuestion() {
    if (!clickedHelpful.current) {
      axios
        .put('/questions/helpful', { question_id: question.question_id })
        .then(() => {
          setHelpfulness(helpfulness + 1);
          clickedHelpful.current = true;
        })
        .catch((err) => {
          throw new Error(err);
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

  function helpfulReport() {
    if (clickedReport) {
      return (
        <Reported>Reported</Reported>
      );
    }
    return (
      <HelpfulReport>
        {'Helpful? '}
        <Clickable onClick={() => helpfulQuestion()}>Yes</Clickable>
        {`(${helpfulness}) `}
        <Clickable onClick={() => reportQuestion()}>Report</Clickable>
      </HelpfulReport>
    );
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
      return (
        <MoreAnswers onClick={() => changeNumAnswers(100)}>
          <i className="fa-solid fa-chevron-down" />
          <span>See More Answers</span>
        </MoreAnswers>
      );
    }
    return (
      <MoreAnswers onClick={() => changeNumAnswers(-100)}>
        <i className="fa-solid fa-chevron-up" />
        <span>Collapse Answers</span>
      </MoreAnswers>
    );
  }

  return (
    <Entry>
      <Question>Q.</Question>
      <QuestionBody>{question.question_body}</QuestionBody>
      {helpfulReport()}
      <AddAnswer>
        <Clickable onClick={() => answerQuestion()}>Add Answer</Clickable>
      </AddAnswer>
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
  grid-template-columns: 5% 64% 20% 10%;
  padding-bottom: 5%;
  width: 100%;
  justify-content: center;
`;

const Question = styled.div`
  grid-column: 1;
  font-weight: bold;
  margin-bottom: 10px;
`;

const QuestionBody = styled.div`
  grid-column: 2;
  font-weight: bold;
  padding-right: 10px;
`;

const HelpfulReport = styled.div`
  grid-column: 3;
`;

const AddAnswer = styled.div`
  grid-column: 4;
`;

const Reported = styled.div`
  grid-column: 3;
  font-weight: bold;
`;

const AnswersListContainer = styled.div`
  border: 1px solid;
  background-color: ${(props) => props.theme.tertiaryColor};
  max-height: 350px;
  overflow: auto;
  text-align: justify;
  padding: 1%;
  border-radius: 10px;
`;

const Answer = styled.div`
  grid-column: 1;
  font-weight: bold;
`;

const AnswerNone = styled.div`
  grid-column: 2;
`;

const MoreAnswers = styled.div`
  display: flex;
  grid-column: 2;
  font-weight: bold;
  cursor: pointer;
`;

const Clickable = styled.u`
  cursor: pointer;
`;

export default QuestionEntry;
