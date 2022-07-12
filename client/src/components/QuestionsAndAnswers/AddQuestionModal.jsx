/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';

function AddQuestionModal({ setShowModal }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  function askQuestion() {
    console.log("SENDING QUESTION TO SERVER");
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButtonDiv>
          <CloseButtonButton onClick={() => setShowModal(false)}>&#10006;</CloseButtonButton>
        </CloseButtonDiv>
        <Title>
          <h1>About the (PRODUCT NAME HERE)</h1>
        </Title>
        <Body>
          <label htmlFor="username">Username</label>
          <input onChange={(event) => setUsername(event.target.value)} maxLength="60" type="text" id="username" name="username" placeholder="Example: jackson11!" />
          <label htmlFor="email">Email</label>
          <input onChange={(event) => setEmail(event.target.value)} maxLength="60" type="text" id="email" placeholder="Why did you like the product or not?"></input>
          <label htmlFor="question">Question</label>
          <InputQuestion onChange={(event) => setQuestion(event.target.value)} maxLength="1000"></InputQuestion>
        </Body>
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
  width: 50%;
  height: 50%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 1%;
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

const Body = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
  gap: 5%;
`;

const InputQuestion = styled.textarea`
  resize: none;
  height: 100px;
`;

const Footer = styled.div`
  flex: 20%;
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

export default AddQuestionModal;
