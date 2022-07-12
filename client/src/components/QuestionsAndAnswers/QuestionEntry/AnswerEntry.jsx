/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AnswerEntry({ answer }) {
  const { productID, questions, setQuestions } = useGlobalContext();

  function helpfulAnswer() {
    // TODO: MAKE UPDATE ONLY SPECIFIC ANSWER
    axios
      .put('/answers/helpful', { answer_id: answer.id })
      .then(() => {
        axios
          .get('/questions', { params: { product_id: productID } })
          .then((results) => {
            setQuestions(results.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function reportAnswer() {
    // TODO: MAKE UPDATE ONLY SPECIFIC ANSWER
    axios
      .put('/answers/report', { answer_id: answer.id })
      .then(() => {
        axios
          .get('/questions', { params: { product_id: productID } })
          .then((results) => {
            setQuestions(results.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Answer key={answer.id}>
      <AnswerBody>
        {answer.body}
      </AnswerBody>
      <AnswerFooter>
        <div>
          by
          {' '}
          {answer.answerer_name}
          {' on '}
          {format(parseISO(answer.date), 'MMM dd, yyyy')}
        </div>
        <div>
          Helpful?
          {' '}
          <Clickable onClick={() => helpfulAnswer()}>Yes</Clickable>
          (
          {answer.helpfulness}
          )
        </div>
        <Clickable onClick={() => reportAnswer()}>Report</Clickable>
      </AnswerFooter>
    </Answer>
  );
}

const Answer = styled.div`
  grid-column: 2 / 3;
`;

const AnswerFooter = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
`;

const AnswerBody = styled.div`
  grid-column: 2 / 3;
  padding-bottom: 10px;
`;

const Clickable = styled.u`
  cursor: pointer;
  text-decoration: underline;
`;

export default AnswerEntry;
