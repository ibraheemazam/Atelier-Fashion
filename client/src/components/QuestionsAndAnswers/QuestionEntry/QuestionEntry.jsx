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
      answers: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          helpfulness: PropTypes.number.isRequired,
          body: PropTypes.string.isRequired,
          answerer_name: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          photos: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  };

  const [numAnswers, setNumAnswers] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [helpfulness, setHelpfulness] = useState(
    question.question_helpfulness,
  );
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
    if (clickedReport) return;
    axios
      .put('/questions/report', {
        question_id: question.question_id,
      })
      .then(() => {
        setClickedReport(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function helpfulQuestion() {
    if (clickedHelpful.current) return;
    axios
      .put('/questions/helpful', {
        question_id: question.question_id,
      })
      .then(() => {
        setHelpfulness((prevHelpfulness) => prevHelpfulness + 1);
        clickedHelpful.current = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function answerQuestion() {
    setShowModal(true);
  }

  function changeNumAnswers(val) {
    const count = Math.max(2, numAnswers + val);
    setNumAnswers(count);
  }

  function handleScroll(e) {
    // within 0.9 of the bottom
    const bottom = 0.9 * (e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight;
    if (bottom && allAnswers.length > numAnswers) {
      changeNumAnswers(2);
    }
  }

  function moreAnswers() {
    if (allAnswers.length <= 2) {
      return null;
    }
    if (topAnswers.length < allAnswers.length) {
      return (
        <MoreAnswers onClick={() => changeNumAnswers(2)}>
          <span>See More Answers</span>
        </MoreAnswers>
      );
    }
    return (
      <MoreAnswers onClick={() => setNumAnswers(2)}>
        <span>Collapse Answers</span>
      </MoreAnswers>
    );
  }

  function answersList() {
    if (topAnswers.length === 0) {
      return (
        <AnswerNone>
          This question has not been answered yet!
        </AnswerNone>
      );
    }
    const list = topAnswers.map((answer) => (
      <AnswerEntry answer={answer} key={answer.id} />
    ));
    return (
      <AnswersListContainer
        id="question_answers"
        onScroll={(event) => handleScroll(event)}
      >
        {list}
      </AnswersListContainer>
    );
  }

  return (
    <Entry>
      <Question id="question_header">Question.</Question>
      <QuestionBody id="question_body">
        {question.question_body}
      </QuestionBody>
      <HelpfulReport>
        Helpful?
        <Clickable onClick={() => helpfulQuestion()}>Yes</Clickable>
        {`(${helpfulness})`}
        {clickedReport ? (
          <Reported>Reported</Reported>
        ) : (
          <Clickable onClick={() => reportQuestion()}>
            Report
          </Clickable>
        )}
      </HelpfulReport>
      <AddAnswer>
        <Clickable onClick={() => answerQuestion()}>
          Add Answer
        </Clickable>
      </AddAnswer>
      <Answer id="answer_header">Answer.</Answer>
      {answersList()}
      {moreAnswers()}
      {showModal && (
        <AddAnswerModal
          setShowModal={setShowModal}
          question={question}
        />
      )}
    </Entry>
  );
}

const Entry = styled.div`
  border-color: black;
  border-bottom: 1px solid;
  display: grid;
  grid-template-columns: 8% 57% 25% 10%;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
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

const Reported = styled.span`
  grid-column: 3;
  font-weight: bold;
`;

const AnswersListContainer = styled.div`
  border: 1px solid;
  background-color: ${(props) => props.theme.tertiaryColor};
  max-height: 150px;
  overflow-x: auto;
  overflow-y: auto;
  text-align: justify;
  border-radius: 10px;
  grid-column: 2;
`;

const AnswerNone = styled.div`
  grid-column: 2;
`;

const Answer = styled.div`
  grid-column: 1;
  font-weight: bold;
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
