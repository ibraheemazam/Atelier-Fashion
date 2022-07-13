import React, { useState } from 'react';
import styled from 'styled-components';
import AddQuestionModal from './AddQuestionModal';
import { useGlobalContext } from '../../../contexts/GlobalStore';

export default function ExtraButtons() {
  const [showModal, setShowModal] = useState(false);
  const { questions, numQuestions, setNumQuestions } = useGlobalContext();

  function increaseQuestions() {
    setNumQuestions(numQuestions + 2);
  }

  return (
    <div>
      <Button type="submit" onClick={() => setShowModal(true)}>ASK A QUESTION</Button>
      {numQuestions < questions.length ? (
        <Button type="submit" onClick={() => increaseQuestions()}>
          MORE ANSWERED QUESTIONS
        </Button>
      ) : null}
      {showModal ? <AddQuestionModal setShowModal={setShowModal} /> : null}
    </div>
  );
}

const Button = styled.button`
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
`;
