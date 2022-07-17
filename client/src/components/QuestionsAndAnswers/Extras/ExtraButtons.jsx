import React, { useState } from 'react';
import styled from 'styled-components';
import AddQuestionModal from './AddQuestionModal';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function ExtraButtons() {
  const [showModal, setShowModal] = useState(false);
  const { questions, numQuestions, setNumQuestions } = useGlobalContext();

  function increaseQuestions() {
    const container = document.getElementById('scrollable-container');

    setNumQuestions(numQuestions + 2);

    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 0);
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
      <Button type="submit" onClick={() => setShowModal(true)}>Ask a Question</Button>
      {displayMoreQuestionsButton()}
      {showModal && <AddQuestionModal setShowModal={setShowModal} />}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.secondaryColor};
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;

const Button = styled.button`
  height: 50px;
  width: 250px;
  border-radius: 10px;
  cursor:pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  background-color: ${(props) => props.theme.tertiaryColor};
  color: ${(props) => props.theme.fontColor};
`;

export default ExtraButtons;
