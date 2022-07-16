import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalStore';
import QuestionEntry from './QuestionEntry/QuestionEntry';
import QuestionSearch from './QuestionSearch/QuestionSearch';
import ExtraButtons from './Extras/ExtraButtons';

function QuestionAndAnswers() {
  const {
    numQuestions, filteredQuestions,
  } = useGlobalContext();

  return (
    <Container>
      <QuestionSearch />
      <QuestionListContainer id="scrollable-container">
        {numQuestions === 0 ? <div>Be the first to ask a question!</div>
          : filteredQuestions.map((question) => (
            <QuestionEntry question={question} key={question.question_id} />
          ))}
      </QuestionListContainer>
      <ExtraButtons />
    </Container>
  );
}

export default QuestionAndAnswers;

const Container = styled.div`
  justify-content: center;
  margin-top: 100px;
`;

const QuestionListContainer = styled.div`
  background-color: #f1f1f1;
  max-height: 600px;
  overflow: auto;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
`;
