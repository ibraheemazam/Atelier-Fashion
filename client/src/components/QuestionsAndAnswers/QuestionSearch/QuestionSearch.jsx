import React from 'react';
import styled from 'styled-components';

function QuestionSearch() {
  return (
    <QuestionSearchBar>
      <input
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        width="100%"
      />
      <button type="submit">Search</button>
    </QuestionSearchBar>
  );
}

const QuestionSearchBar = styled.div`
  width: 100%;
  margin-bottom 10px;
`;

export default QuestionSearch;
