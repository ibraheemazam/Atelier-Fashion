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
          More Answered Questions
        </Button>
      );
    }
    return null;
  }

  return (
    <ButtonContainer>
      <Button type="submit" onClick={() => setShowModal(true)}>Ask a Question +</Button>
      {displayMoreQuestionsButton()}
      {showModal && <AddQuestionModal setShowModal={setShowModal} />}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  height: 50px;
  margin-top: 10px;
  margin-left: 20px;
  font-family: 'Roboto', sans-serif;
`;
