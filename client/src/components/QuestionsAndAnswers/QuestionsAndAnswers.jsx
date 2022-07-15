import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../contexts/GlobalStore';
import QuestionEntry from './QuestionEntry/QuestionEntry';
import QuestionSearch from './QuestionSearch/QuestionSearch';
import ExtraButtons from './Extras/ExtraButtons';

function QuestionAndAnswers() {
  const {
    productID, setQuestions, numQuestions, filteredQuestions,
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
          console.log(err);
        });
    }

    getQuestions();
  }, [productID, setQuestions]);

  return (
    <Container style={{ marginTop: '100px' }}>
      <QuestionSearch />
      <QuestionListContainer>
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
  width: 100%;
  justify-content: center;
`;

const QuestionListContainer = styled.div`
  background-color: #f1f1f1;
  max-height: 600px;
  overflow: auto;
  margin: 20px;
  padding: 10px;
`;
