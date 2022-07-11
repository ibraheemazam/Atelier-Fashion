/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

function AnswerEntry({ answer }) {
  function helpfulAnswer() {
    console.log(`Mark answer with id ${answer.id} as helpful`);
  }
  function reportAnswer() {
    console.log(`Report answer with id ${answer.id} I am offended`);
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
