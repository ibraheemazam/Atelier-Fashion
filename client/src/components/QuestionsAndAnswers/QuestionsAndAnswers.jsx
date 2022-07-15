import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../contexts/GlobalStore';
import QuestionEntry from './QuestionEntry/QuestionEntry';
import QuestionSearch from './QuestionSearch/QuestionSearch';
import ExtraButtons from './Extras/ExtraButtons';

function QuestionAndAnswers() {
  // TODO: NEED TO SORT QUESTIONS IN ORDER OF HELPFULNESS
  const {
    setQuestions, numQuestions, filteredQuestions, productID,
  } = useGlobalContext();

  useEffect(() => {
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
  }, [productID, setQuestions]);

  return (
    <Container>
      <QuestionSearch />
      <QuestionListContainer>
        {numQuestions === 0 ? <NoQuestions>Be the first to ask a question!</NoQuestions>
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
  height: 500px;
  overflow: auto;
  margin: 20px;
  text-align: justify;
  padding: 20px;
`;

const NoQuestions = styled.div`

`;
