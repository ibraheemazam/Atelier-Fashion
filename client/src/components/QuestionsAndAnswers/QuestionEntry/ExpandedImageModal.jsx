import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ExpandedImageModal({ src, setShowModal }) {
  ExpandedImageModal.propTypes = {
    src: PropTypes.string.isRequired,
    setShowModal: PropTypes.func.isRequired,
  };

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
        <Image src={src} alt="" />
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
  height: 500px;
  border-radius: 10px;
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

const Image = styled.img`
  width: auto;
  height: auto;
`;

export default ExpandedImageModal;
