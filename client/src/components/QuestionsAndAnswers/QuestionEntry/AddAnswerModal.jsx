/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddAnswerModal({ setShowModal, question }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [photoURL, setPhotoURL] = useState();

  const [fileInput, setFileInput] = useState('');
  const [encodedImage, setEncodedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const { productID, productInfo, setQuestions } = useGlobalContext();

  function askQuestion() {
    const postBody = {
      body: answer,
      name: username,
      email,
      question_ID: question.question_id,
      photos: [photoURL],
    };

    axios
      .post('/answers', postBody)
      .then(() => {
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function submitFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64image = reader.result;
      axios.post('/answers/photo', { image: base64image })
        .then((result) => {
          setPhotoURL(result.data.url);
        }).catch((err) => {
          console.log(err);
        });
    };
  }

  function handlePhotos(event) {
    const file = event.target.files[0];
    submitFile(file);
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
        <Title>
          <h1>Submit your answer</h1>
        </Title>
        <QuestionBody>
          <h3>
            {productInfo.name}
            {': '}
            {question.question_body}
          </h3>
        </QuestionBody>
        <Form>
          <label htmlFor="username">Username</label>
          <input onChange={(event) => setUsername(event.target.value)} maxLength="60" type="text" id="username" name="username" placeholder="Example: jackson11!" />
          <label htmlFor="email">Email</label>
          <input onChange={(event) => setEmail(event.target.value)} maxLength="60" type="text" id="email" placeholder="jack@email.com"></input>
          <label htmlFor="answer">Answer</label>
          <InputAnswer onChange={(event) => setAnswer(event.target.value)} maxLength="1000"></InputAnswer>
          <label htmlFor="photos">Photos</label>
          <input onChange={(event) => handlePhotos(event)} type="file" id="photos" accept="image/png, image/jpeg" multiple />
          <Footer id="footer">
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
  height: 75%;
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

const QuestionBody = styled.div`
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
  gap: 5%;
`;

const InputAnswer = styled.textarea`
  resize: none;
  height: 100px;
`;

const Footer = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
  padding-top: 10%;
`;

const FooterButton = styled.button`
  width: 100px;
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
