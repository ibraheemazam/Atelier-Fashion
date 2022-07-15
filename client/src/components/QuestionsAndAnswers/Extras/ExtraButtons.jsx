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

  function displayMoreQuestionsButton() {
    if (numQuestions < questions.length) {
      return (
        <Button type="submit" onClick={() => increaseQuestions()}>
          MORE ANSWERED QUESTIONS
        </Button>
      );
    }
    return null;
  }

  return (
    <div>
      <Button type="submit" onClick={() => setShowModal(true)}>ASK A QUESTION</Button>
      {displayMoreQuestionsButton()}
      {showModal && <AddQuestionModal setShowModal={setShowModal} />}
    </div>
  );
}

const Button = styled.button`
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
`;
