import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../contexts/GlobalStore';
import QuestionEntry from './QuestionEntry/QuestionEntry';
import QuestionSearch from './QuestionSearch/QuestionSearch';
import ExtraButtons from './Extras/ExtraButtons';

function QuestionAndAnswers() {
  const {
    productID, setQuestions, numQuestions, setNumQuestions, filteredQuestions,
  } = useGlobalContext();

  useEffect(() => {
    function getQuestions() {
      axios
        .get('/questions', {
          params: { product_id: productID, count: 100 },
        })
        .then((results) => {
          setQuestions(results.data.results);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
    getQuestions();

    setNumQuestions(4);
  }, [productID, setNumQuestions, setQuestions]);

  return (
    <Container id="question-and-answers">
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
  background-color: ${(props) => props.theme.backgroundColor};
  max-height: 600px;
  overflow: auto;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
`;
