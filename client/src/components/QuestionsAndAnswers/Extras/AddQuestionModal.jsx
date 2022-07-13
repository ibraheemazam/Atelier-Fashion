/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddQuestionModal({ setShowModal }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const { productID, productInfo } = useGlobalContext();

  function askQuestion() {
    const postBody = {
      body: question,
      name: username,
      email,
      product_id: productID,
    };
    axios
      .post('/questions', postBody)
      .then((results) => {
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeModal(event) {
    if (event.target.id === 'background') {
      setShowModal(false);
    }
  }

  return (
    <ModalBackground id="background" onClick={(event) => closeModal(event)}>
      <ModalContainer>
        <CloseButtonDiv>
          <CloseButtonButton onClick={() => setShowModal(false)}>&#10006;</CloseButtonButton>
        </CloseButtonDiv>
        <h1>
          About the
          {' '}
          {productInfo.name}
        </h1>
        <Form>
          <label htmlFor="username">Username</label>
          <input onChange={(event) => setUsername(event.target.value)} maxLength="60" type="text" id="username" name="username" placeholder="Example: jackson11!" />
          <label htmlFor="email">Email</label>
          <input onChange={(event) => setEmail(event.target.value)} maxLength="60" type="text" id="email" placeholder="Why did you like the product or not?"></input>
          <label htmlFor="question">Question</label>
          <InputQuestion onChange={(event) => setQuestion(event.target.value)} maxLength="1000"></InputQuestion>
          <Footer>
            <FooterButton onClick={() => askQuestion()}>Confirm</FooterButton>
            <FooterButton onClick={() => setShowModal(false)}>Cancel</FooterButton>
          </Footer>
        </Form>
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

const Form = styled.div`
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
  grid-column: 1 / 3;
  padding-top: 5%;
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
