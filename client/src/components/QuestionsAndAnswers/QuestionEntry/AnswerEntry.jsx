/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

function AnswerEntry({ answer }) {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);

  function helpfulAnswer() {
    axios
      .put('/answers/helpful', { answer_id: answer.id })
      .then(() => {
        setHelpfulness(helpfulness + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function reportAnswer() {
    axios
      .put('/answers/report', { answer_id: answer.id })
      .then(() => {
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
      <AnswerPhotos>
        {answer.photos.map((photo) => (
          <AnswerImage
            src={photo}
            alt=""
            key={photo}
          />
        ))}
      </AnswerPhotos>
      <AnswerFooter>
        <AnswerDate>
          {'by '}
          {answer.answerer_name}
          {` on ${format(parseISO(answer.date), 'MMM dd, yyyy')}`}
        </AnswerDate>
        <div>
          {'Helpful? '}
          <Clickable onClick={() => helpfulAnswer()}>Yes</Clickable>
          {`(${helpfulness})`}
        </div>
        <div>
          <Clickable onClick={() => reportAnswer()}>Report</Clickable>
        </div>
      </AnswerFooter>
    </Answer>
  );
}

const Answer = styled.div`
  grid-column: 2 / 3;
  padding-bottom: 1%;
`;

const AnswerPhotos = styled.span`

`;

const AnswerImage = styled.img`
  width: 30%;
  height: 30%;
  padding-right: 5%;
`;

const AnswerFooter = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  font-size: 12px;
`;

const AnswerDate = styled.div`

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
