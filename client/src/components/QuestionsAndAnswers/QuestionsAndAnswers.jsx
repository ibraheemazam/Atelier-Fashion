import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../contexts/GlobalStore';
import QuestionEntry from './QuestionEntry/QuestionEntry';
import QuestionSearch from './QuestionSearch/QuestionSearch';
import ExtraButtons from './ExtraButtons';

function QuestionAndAnswers() {
  // TODO: NEED TO SORT QUESTIONS IN ORDER OF HELPFULNESS
  const {
    questions, setQuestions, numQuestions, productID,
  } = useGlobalContext();

  useEffect(() => {
    axios
      .get('/questions', { params: { product_id: productID } })
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
      {numQuestions === 0 ? <NoQuestions>Be the first to ask a question!</NoQuestions>
        : questions.slice(0, numQuestions).map((question) => (
          <QuestionEntry question={question} key={question.question_id} />
        ))}
      <ExtraButtons />
    </Container>
  );
}

export default QuestionAndAnswers;

const Container = styled.div`

`;

const NoQuestions = styled.div`

`;
