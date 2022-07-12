/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';

function AddAnswerModal({ setShowModal, question }) {
  function askQuestion() {
    console.log('SENDING QUESTION TO SERVER');
    console.log(question);
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButtonDiv>
          <CloseButtonButton onClick={() => setShowModal(false)}>&#10006;</CloseButtonButton>
        </CloseButtonDiv>
        <Title>
          <h1>Submit your answer</h1>
        </Title>
        <div className="body">
          <p>{question.question_body}</p>
        </div>
        <Footer>
          <FooterButton onClick={() => askQuestion()}>Confirm</FooterButton>
          <FooterButton onClick={() => setShowModal(false)}>Cancel</FooterButton>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0%;
  top: 0%;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const CloseButtonDiv = styled.div`
  display: flex;
  justify-content:flex-end;
`;

const CloseButtonButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Title = styled.div`

`;
const Footer = styled.div`
  flex: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  color: white;
  background-color: grey;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export default AddAnswerModal;
