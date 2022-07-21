import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function QuestionSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { questions, setFilteredQuestions, numQuestions } = useGlobalContext();

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const filtered = [];
      Object.values(questions).forEach((question) => {
        if (question.question_body.includes(searchTerm)) {
          filtered.push(question);
        }
      });
      setFilteredQuestions(filtered.slice(0, numQuestions));
    } else if (searchTerm.length < 3) {
      setFilteredQuestions(questions.slice(0, numQuestions));
    }
  }, [questions, searchTerm, numQuestions]);

  return (
    <QuestionSearchBar>
      <Input
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
    </QuestionSearchBar>
  );
}

const QuestionSearchBar = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.secondaryColor};
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-color: ${(props) => props.theme.fontColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.tertiaryColor};
  color: ${(props) => props.theme.fontColor};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  :-ms-input-placeholder {
     color: ${(props) => props.theme.fontColor};
  }
`;

export default QuestionSearch;
