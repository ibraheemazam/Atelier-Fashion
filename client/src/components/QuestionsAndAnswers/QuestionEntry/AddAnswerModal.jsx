import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddAnswerModal({ setShowModal, question }) {
  AddAnswerModal.propTypes = {
    question: PropTypes.shape({
      question_id: PropTypes.number.isRequired,
      question_body: PropTypes.string.isRequired,
    }).isRequired,
    setShowModal: PropTypes.func.isRequired,
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [photoURL, setPhotoURL] = useState([]);
  const [validInput, setValidInput] = useState(true);

  const { productInfo } = useGlobalContext();

  function validateInput() {
    function validateEmail(emailName) {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(emailName);
    }

    if (name === '' || email === '' || body === '') {
      return false;
    }

    if (!validateEmail(email)) {
      return false;
    }
    return true;
  }

  function input() {
    if (!validInput) {
      return (
        <Disclaimer>
          <div>1. Not all fields have been provided.</div>
          <div>2. Email is not in the correct email format.</div>
          <div>3. The images selected are invalid or unable to be uploaded.</div>
        </Disclaimer>
      );
    }
    return null;
  }

  function askQuestion() {
    if (!validateInput()) {
      setValidInput(false);
      return;
    }

    const postBody = {
      body,
      name,
      email,
      question_ID: question.question_id,
      photos: photoURL,
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

  function handlePhotos(event) {
    const { files } = event.target;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64image = reader.result;
        await axios.post('/answers/photo', { image: base64image })
          .then((result) => {
            setPhotoURL([...photoURL, result.data.url]);
          }).catch((err) => {
            console.log(err);
          });
      };
    }
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
        <header>
          <div><b>Submit your answer</b></div>
          <div><b>{`${productInfo.name} : ${question.question_body}`}</b></div>
        </header>
        <Form>
          <FormField htmlFor="name">
            Username
            <Required>*</Required>
          </FormField>
          <FormEntry onChange={(event) => setName(event.target.value)} maxLength="60" type="text" id="name" name="name" placeholder="Example: jackson11!" />
          <Disclaimer>
            For privacy reasons, do not use your full name or email address.
          </Disclaimer>
          <FormField htmlFor="email">
            Email
            <Required>*</Required>
          </FormField>
          <FormEntry onChange={(event) => setEmail(event.target.value)} maxLength="60" type="text" id="email" placeholder="jack@email.com" />
          <Disclaimer>
            For authentication reasons, you will not be emailed.
          </Disclaimer>
          <FormField htmlFor="body">
            Answer
            <Required>*</Required>
          </FormField>
          <InputAnswer onChange={(event) => setBody(event.target.value)} maxLength="1000" placeholder="Enter your answer" />
          <FormField>
            Photos(optional)
          </FormField>
          <FormEntry onChange={(event) => handlePhotos(event)} type="file" id="photos" accept="image/png, image/jpeg" multiple />
          {input()}
          <PhotoPreviews>
            {photoURL.map((photo) => <ImagePreview src={photo} alt="" key={photo} />)}
          </PhotoPreviews>
        </Form>
        <Footer id="footer">
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
  width: 60%;
  height: 90%;
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

const Form = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
  gap: 5%;
`;

const FormField = styled.label`
  font-size: 18px;
  grid-column: 1;
  cursor: initial;
`;

const FormEntry = styled.input`
  grid-column: 2;
  cursor: initial;
`;

const InputAnswer = styled.textarea`
  resize: none;
  height: 100px;
  font-family: Arial;
`;

const Footer = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: flex-end;
  grid-column: 1 / 3;
  margin-top: 20%;
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

const Required = styled.sup`
  color: #ff0000;
`;

const Disclaimer = styled.div`
  font-size: 12px;
  color: #ff0000;
  grid-column: 2;
`;

const PhotoPreviews = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / 3;
`;

const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  padding-right: 10px;
`;

export default AddAnswerModal;
