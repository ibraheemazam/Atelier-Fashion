import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

function AnswerEntry({ answer }) {
  AnswerEntry.propTypes = {
    answer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      helpfulness: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      answerer_name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      photos: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const clickedHelpful = useRef(false);

  function helpfulAnswer() {
    if (!clickedHelpful.current) {
      axios
        .put('/answers/helpful', { answer_id: answer.id })
        .then(() => {
          setHelpfulness(helpfulness + 1);
          clickedHelpful.current = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        <div>
          {'by '}
          {answer.answerer_name.toLowerCase() === 'seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}
          {` on ${format(parseISO(answer.date), 'MMM dd, yyyy')}`}
        </div>
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
  display: flex;
  justify-content: flex-start;
`;

const AnswerImage = styled.img`
  width: 100px;
  height: 100px;
  padding-right: 10px;
`;

const AnswerFooter = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  font-size: 12px;
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
