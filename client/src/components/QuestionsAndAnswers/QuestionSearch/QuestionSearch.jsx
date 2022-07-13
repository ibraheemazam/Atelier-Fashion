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
      setFilteredQuestions(filtered);
    } else if (searchTerm.length < 3) {
      setFilteredQuestions(questions.slice(0, numQuestions));
    }
  }, [questions, searchTerm, setFilteredQuestions, numQuestions]);

  return (
    <QuestionSearchBar>
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        style={{ width: '84%' }}
      />
      <button type="submit" style={{ width: '9%' }}>Search</button>
    </QuestionSearchBar>
  );
}

const QuestionSearchBar = styled.div`
  width: 100%;
  margin-bottom 10px;
`;

export default QuestionSearch;
